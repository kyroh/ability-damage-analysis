import AbilityDmg from '../necromancy_ad.js';
import OnNPC from '../necromancy_on_npc.js';
import OnHit from '../necromancy_on_hit.js';
import Crit from '../necromancy_crit.js';
import NecroHelper from '../necromancy_helper.js';
import Avg from '../average_damage.js';
import split_soul from './split_soul.js';
import construction from '../necromancy_const.js';


function soul_strike(type, settings, numberOfHits) {
    const AD_INS = new AbilityDmg();
    const NPC_INS = new OnNPC();
    const HIT_INS = new OnHit();
    const CRIT_INS = new Crit();
    const AVG_INS = new Avg();
    const Helper = new NecroHelper(); 
    let abil_val = 'soul strike - main'
    let fixedPercent = construction['abilities'][abil_val]['fixed percent'];
    let variablePercent = construction['abilities'][abil_val]['variable percent'];
    settings['category'] = construction['abilities'][abil_val]['category'];

    if (settings['flanking position'] === true) {
        fixedPercent += fixedPercent * settings['flanking'] * 0.4;
        variablePercent += variablePercent * settings['flanking'] * 0.4;
    }

    const hits = []
   
    for(var hitsplat = 0; hitsplat < numberOfHits; hitsplat++) {
        const damageObject = Helper.damageObjectCreator(settings);

        //calculates ability damage
        let AD = AD_INS.calcAd(type,settings);
        
        //sets fixed and variable damage
        let fixed = Math.floor(AD * fixedPercent);
        let variable = Math.floor(AD * variablePercent);

        //applies on-hit effects
        let onHit = HIT_INS.calcOnHit(fixed, variable, type, construction['abilities'][abil_val]['on hit effects'],settings);

        //sets up for further calculations
        damageObject['non-crit']['list'] = Helper.baseDamageListCreator(onHit[0],onHit[1]);

        //apply crit dmg
        damageObject['crit']['list'] = CRIT_INS.critDamageList(damageObject['non-crit']['list'], settings);

        //apply on-npc effects and hitcaps
        damageObject['non-crit']['list'] = NPC_INS.onNpcDamageList(damageObject['non-crit']['list'],settings,AD);
        damageObject['crit']['list'] = NPC_INS.onNpcDamageList(damageObject['crit']['list'],settings,AD);    
        
        //split soul
        const splitSoul = split_soul(damageObject['non-crit']['list'],settings);
        const splitSoulCrit =  split_soul(damageObject['crit']['list'],settings);

        //apply hit caps
        damageObject['non-crit']['list'] = Helper.hitCapDmgList(damageObject['non-crit']['list'],settings);
        damageObject['crit']['list'] = Helper.hitCapDmgList(damageObject['crit']['list'],settings);

        //add up damages
        damageObject['non-crit']['list'] = Helper.listAdder(damageObject['non-crit']['list'],splitSoul);
        damageObject['crit']['list'] = Helper.listAdder(damageObject['crit']['list'],splitSoulCrit);

        //calc min, avg, or max depending on request
        hits.push(AVG_INS.returnDecider(damageObject,settings,abil_val));
    }
    
    //calc total damage
    hits.push(Helper.totalDamageCalc(hits));
    return Helper.flooredList(hits);
}

export default soul_strike;


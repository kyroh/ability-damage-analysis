class Crit {
    calcFCritChance(settings, furystacks) {
        if (settings['aura'] === 'equilibrium') {
            return 0;
          }
          
        if (furystacks === undefined) {
            furystacks = 0;
        }
        let fcrit = 0.1 +
            (0.05 * settings['crit-i-kal']) +
            (0.01 * settings['kalgerion demon familiar']) +
            (0.02 * settings['biting']) +
            (0.05 * furystacks); 

        if (settings['ring'] === 'reavers') {
            fcrit = fcrit + 0.05;
        }
        if (settings['pocket slot'] === 'grimoire') {
            fcrit = fcrit + 0.12;
        }        
        return fcrit;
    }

    critDmgBuff(dmg,settings) {
        let modifier = 0.2;
        modifier = modifier + Math.min(0.05 * Math.floor((settings['level'] - 10)/10),0.5);
        if (settings['smoke cloud'] === true) {
            modifier = modifier + 0.06;
        }

        return Math.floor(dmg * (1 + modifier));
    }

    critDamageList(dmgList,settings) {
        const critDamage = [];
        for (const i of dmgList) {
            critDamage.push(this.critDmgBuff(i,settings));
        }
        return critDamage;
    }
}

export default Crit;

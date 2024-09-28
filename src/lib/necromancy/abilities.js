import hit_damage_calculation from '../new_stuff/damage_calc.js';

const abilities = {
	'Necro auto': {
		title: 'Necro auto',
		calc: hit_damage_calculation,
		icon: '/ability_icons/necro/30x30/auto.png',
	},
	'Necro auto 2x': {
		title: 'Necro auto (2x)',
		calc: hit_damage_calculation,
		icon: '/ability_icons/necro/30x30/auto.png',
	},
	//double damage auto
	'Soul Sap': {
		title: 'Soul Sap',
		calc: hit_damage_calculation,
		icon: '/ability_icons/necro/30x30/soul-sap.png',
	},
	'Touch of Death': {
		title: 'Touch of Death',
		calc: hit_damage_calculation,
		icon: '/ability_icons/necro/30x30/tod.png',
	},
	'Skeleton Auto': {
		title: 'Skeleton auto',
		calc: hit_damage_calculation,
		icon: '/ability_icons/necro/30x30/conj-skele.png',
	},
	'Command skeleton 8': {
		title: 'Command skeleton (autos 2-10)',
		calc: hit_damage_calculation,
		icon: '/ability_icons/necro/30x30/comm-skele.png',
	},
	'Command skeleton': {
		title: 'Command skeleton (all 10 autos)',
		calc: hit_damage_calculation,
		icon: '/ability_icons/necro/30x30/comm-skele.png',
	},
	'Ghost Auto': {
		title: 'Ghost auto',
		calc: hit_damage_calculation,
		icon: '/ability_icons/necro/30x30/conj-ghost.png',
	},
	'Zombie Auto': {
		title: 'Zombie auto',
		calc: hit_damage_calculation,
		icon: '/ability_icons/necro/30x30/conj-zom.png',
	},
	'Command zombie': {
		title: 'Command zombie',
		calc: hit_damage_calculation,
		icon: '/ability_icons/necro/30x30/comm-zom.png',
	},
	'Finger of Death': {
		title: 'Finger of death',
		calc: hit_damage_calculation,
		icon: '/ability_icons/necro/30x30/FOD.png',
	},
	'Finger of Death in LD': {
		title: 'Finger of Death (1.5x)',
		calc: hit_damage_calculation,
		icon: '/ability_icons/necro/30x30/FOD.png',
	},
	'Death Skulls': {
		// 3 or 4
		title: 'Death Skulls',
		calc: hit_damage_calculation,
		icon: '/ability_icons/necro/30x30/skulls.png',
	},
	//death skulls 5 or 7
	'Soul strike': {
		//main
		title: 'Soul strike',
		calc: hit_damage_calculation,
		icon: '/ability_icons/necro/30x30/soul_strike.png',
	},
	//soul strike flank
	'Volley of Souls': {
		title: 'Volley of Souls (2 hit)',
		calc: hit_damage_calculation,
		icon: '/ability_icons/necro/30x30/volley-2.png',
	},
	'Volley of Souls 3': {
		title: 'Volley of Souls (3 hit)',
		calc: hit_damage_calculation,
		icon: '/ability_icons/necro/30x30/volley-3.png',
	},
	'Volley of Souls 4': {
		title: 'Volley of Souls (4 hit)',
		calc: hit_damage_calculation,
		icon: '/ability_icons/necro/30x30/volley-4.png',
	},
	'Volley of Souls 5': {
		title: 'Volley of Souls (5 hit)',
		calc: hit_damage_calculation,
		icon: '/ability_icons/necro/30x30/volley-5.png',
	},
	'Spectral scythe 1': {
		title: 'Spectral scythe 1',
		calc: hit_damage_calculation,
		icon: '/ability_icons/necro/30x30/scyth-1.png',
	},
	'Spectral scythe 2': {
		title: 'Spectral scythe 2',
		calc: hit_damage_calculation,
		icon: '/ability_icons/necro/30x30/scyth-2.png',
	},
	'Spectral scythe 3': {
		title: 'Spectral scythe 3',
		calc: hit_damage_calculation,
		icon: '/ability_icons/necro/30x30/scyth-3.png',
	},
	//scythe 2
	//scythe 3
	'Blood siphon': {
		title: 'Blood siphon',
		calc: hit_damage_calculation,
		icon: '/ability_icons/necro/30x30/blood-siphon.png',
	},
	//blood siphon aoe
	Bloat: {
		title: 'Bloat',
		calc: hit_damage_calculation,
		icon: '/ability_icons/necro/30x30/bloat.png',
	},
	'Death Grasp': {
		title: 'Death Grasp',
		calc: hit_damage_calculation,
		icon: '/ability_icons/necro/30x30/deathguard-bg.png',
	},
	'Death Essence': {
		title: 'Death Essence',
		calc: hit_damage_calculation,
		icon: '/ability_icons/necro/30x30/omniguard-bg.png',
	}
};

export { abilities };

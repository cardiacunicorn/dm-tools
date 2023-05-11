import { Player } from '../interfaces'

export var Pico: Player =
{
    name: 'Pico',
    level: 7,
    image_path: 'images/players/Pico-headshot.png',
    colour: '#096340',
    race: 'Human',
    classes: [
        {
            name: 'Ranger',
            levels: 7,
            subclass: 'Gloom Stalker'
        }
    ],
    type: 'hybrid-caster',
    passive_perception: 16,
    speed: 35,
    initiative: {
        modifier: 6,
        current: 21
    },
    hp: {
        current: 60,
        current_max: 60,
        regular_max: 60,
        temp: 0
    },
    ac: {
        regular: 17,
        current: 17,
        note: 'Mithril Halfplate'
    },
    attributes: {
        str: -1,
        dex: 3,
        con: 2,
        int: -1,
        wis: 3,
        cha: -1,
    },
    proficiencies: {
        armor: {
            light: 1,
            medium: 1,
            heavy: 0,
            shields: 1
        },
        tools: ['Forgery Kit', 'Thieves Tools', 'Playing Cards'],
        languages: ['Elvish', 'Orc', 'Abyssal'],
        saves: {
            str: 1,
            dex: 1,
            con: 0,
            int: 0,
            wis: 1,
            cha: 0
        },
        skills: {
            acrobatics: 0,
            animal_handling: 0,
            arcana: 0,
            athletics: 1,
            deception: 0,
            history: 0,
            insight: 1,
            intimidation: 0,
            investigation: 1,
            medicine: 0,
            nature: 1,
            perception: 1,
            performance: 0,
            persuasion: 0,
            religion: 0,
            sleight_of_hand: 1,
            stealth: 1,
            survival: 0
        },
        weapons: {
            simple: 1,
            martial: 1,
            misc: []
        }
    },
    attacks: [
        {
            name: 'Vicious Heavy Crossbow',
            activation: 'Action',
            attribute: 'dex',
            notes: [
                {label: 'Push', text: 'Once per turn, push a creature 10ft away from you, if not more than one size larger than you.'},
                {label: 'Vicious Criticals', text: 'After calculating crit damage, add +7 Piercing Dmg to the total.'}
            ],
            rarity: 'rare',
            type: 'Ranged Attack',
            range: 400,
            instances: 2,
            hit: {
                attribute: true
            },
            damage: [
                {
                    attribute: true,
                    type: 'Piercing',
                    dice: '1d10'
                }
            ]
        }
    ],
    features: [
        {
            name: 'Favored Foe',
            effect: 'Once per turn, add 1d6 damage by marking a target as your foe.',
            activation: 'Special',
            concentration: true,
            uses: 3,
            recharge: 'LR',
        },
        {
            name: 'Umbral Sight',
            effect: 'Invisible to creatuues relying on darkvision.',
            activation: 'Special',
        },
        {
            name: 'Sharpshooter',
            effect: 'No long range penalty. Option for -5 to hit for +10 damage.',
            activation: 'Special'
        },
        {
            name: 'Crossbow Expert',
            effect: 'No short range penalty. Ignore half and three-quarters cover.',
            activation: 'Special'
        },
        {
            name: 'Lockpicking Expertise',
            effect: 'Lockpicking Check is d20 + DEX + 2x Proficiency',
            activation: 'Action'
        }
    ],
    effects: {
        advantage: [],
        disadvantage: [],
        immunities: [],
        resistances: [],
        vulnerabilities: []
    },
    spellcasting: {
        spellsave: 14,
        attribute: 'wis',
        slots: [
            {
                level: 1,
                total: 4,
                used: 0
            },
            {
                level: 2,
                total: 3,
                used: 0
            }
        ]
    }
}
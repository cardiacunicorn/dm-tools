import { Player } from '../interfaces'

export var Wolfgang: Player =
{
    name: 'Wolfgang',
    level: 7,
    image_path: 'images/players/Wolfgang-headshot.png',
    colour: '#72638D',
    race: 'Pugfolk',
    classes: [
        {
            name: 'Sorcerer',
            levels: 6,
            subclass: 'Lunar'
        },
        {
            name: 'Warlock',
            levels: 1,
        }
    ],
    type: 'caster',
    passive_perception: 13,
    speed: 30,
    initiative: {
        modifier: 3,
        current: 13
    },
    hp: {
        current: 51,
        current_max: 51,
        regular_max: 51,
        temp: 0
    },
    ac: {
        regular: 20,
        current: 20,
        note: 'Bracers of Defence'
    },
    attributes: {
        str: -1,
        dex: 3,
        con: 2,
        int: -1,
        wis: -1,
        cha: 5,
    },
    proficiencies: {
        armor: {
            light: 1,
            medium: 1,
            heavy: 0,
            shields: 0
        },
        tools: ['Dragonchess'],
        languages: ['Giant', 'Orc'],
        saves: {
            str: 0,
            dex: 0,
            con: 1,
            int: 0,
            wis: 0,
            cha: 1
        },
        skills: {
            acrobatics: 0,
            animal_handling: 0,
            arcana: 1,
            athletics: 0,
            deception: 1,
            history: 1,
            insight: 0,
            intimidation: 0,
            investigation: 0,
            medicine: 0,
            nature: 0,
            perception: 0,
            performance: 0,
            persuasion: 1,
            religion: 0,
            sleight_of_hand: 0,
            stealth: 0,
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
            name: 'Pact Blade of Nox',
            activation: 'Action',
            attribute: 'cha',
            notes: [
                {label: 'Vex', text: 'Once per turn, on a hit, get Adv. on your next attack against that target.'}
            ],
            rarity: 'common',
            type: 'Melee Attack',
            hit: {
                attribute: true
            },
            damage: [{
                dice: '1d8',
                type: 'Piercing'
            }]
        },
        {
            name: 'Shocking Grasp',
            activation: 'Action',
            attribute: 'cha',
            range: '5ft',
            rarity: 'common',
            type: 'Melee Spell Attack',
            hit: {
                attribute: true
            },
            damage: [{
                dice: '2d8',
                type: 'Lightning'
            }]
        },
    ],
    features: [
        {
            name: 'Sorcery Points',
            uses: 6,
            recharge: 'LR',
            effect: 'You have Sorcery Points equal to your Sorcerer level for Metamagics',
            activation: 'Special'
        },
        {
            name: 'Bloodwell Vial',
            uses: 1,
            recharge: 'LR',
            rarity: 'uncommon',
            effect: 'Recharge 5 Sorcery Points whenever you use a Hit Die to recover health.',
            activation: 'Special'
        }
    ],
    effects: {
        advantage: [],
        disadvantage: [],
        immunities: [],
        resistances: ['Lightning'],
        vulnerabilities: []
    },
    spellcasting: {
        spellsave: 17,
        attribute: 'cha',
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
            },
            {
                level: 3,
                total: 3,
                used: 0
            },
            {
                level: 4,
                total: 1,
                used: 0
            },
        ]
    }
}
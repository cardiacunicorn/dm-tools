import { Player } from '../interfaces'

export var Numwick: Player =
{
    name: 'Numwick',
    level: 8,
    image_path: 'images/players/Numwick-headshot.png',
    colour: '#3F7CF7',
    race: 'High Elf',
    classes: [
        {
            name: 'Wizard',
            levels: 8,
            subclass: 'Evocation'
        }
    ],
    type: 'caster',
    passive_perception: 17,
    speed: 30,
    initiative: {
        modifier: 0,
        current: 13
    },
    hp: {
        current: 59,
        current_max: 59,
        regular_max: 59,
        temp: 0
    },
    ac: {
        regular: 13,
        current: 16,
        note: 'Mage Armor'
    },
    attributes: {
        str: -2,
        dex: 3,
        con: 2,
        int: 5,
        wis: 0,
        cha: 1,
    },
    proficiencies: {
        armor: {
            light: 0,
            medium: 0,
            heavy: 0,
            shields: 0
        },
        tools: ["Alchemist's Supplies","Smith's Tools","Cobbler's Tools","Instruments"],
        languages: ['Gnomish', 'Elvish', 'Dwarvish'],
        saves: {
            str: 0,
            dex: 0,
            con: 0,
            int: 1,
            wis: 1,
            cha: 0
        },
        skills: {
            acrobatics: 0,
            animal_handling: 0,
            arcana: 1,
            athletics: 0,
            deception: 0,
            history: 0,
            insight: 1,
            intimidation: 0,
            investigation: 1,
            medicine: 0,
            nature: 0,
            perception: 1,
            performance: 0,
            persuasion: 2,
            religion: 0,
            sleight_of_hand: 0,
            stealth: 0,
            survival: 0
        },
        weapons: {
            simple: 0,
            martial: 0,
            misc: ['Quarterstaff', 'Light Crossbow', 'Dagger']
        }
    },
    attacks: [
        {
            name: 'Fire Bolt',
            attribute: 'int',
            instances: 1,
            range: 120,
            rarity: 'common',
            type: 'Ranged Spell Attack',
            hit: {
                attribute: true
            },
            damage: [{
                dice: '2d10',
                type: 'Fire'
            }]
        },
    ],
    features: [
        {
            name: 'Chronosphere',
            uses: 1,
            recharge: 'LR',
            rarity: 'legendary',
            effect: 'Take 1 point of damage, and gain a Legendary Action',
            activation: 'Action'
        },
        {
            name: 'Masquerade Tattoo',
            uses: 1,
            recharge: 'LR',
            attunement: true,
            effect: 'Cast Disguise Self once per day for free, DC 13 for creatures to identify the disguise.',
            activation: 'Action'
        },
    ],
    effects: {
        advantage: ['Charmed'],
        disadvantage: [],
        immunities: ['Sleep'],
        resistances: [],
        vulnerabilities: []
    },
    spellcasting: {
        spellsave: 17,
        attribute: 'int',
        slots: [
            {
                level: 1,
                total: 4,
                used: 1
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
                total: 2,
                used: 0
            },
        ]
    }
}
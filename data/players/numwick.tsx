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
    spellsave: 15,
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
        regular: 20,
        current: 20,
        note: 'Natural Armor, Shield'
    },
    attributes: {
        str: 1,
        dex: 0,
        con: 3,
        int: 0,
        wis: 4,
        cha: 0,
    },
    proficiencies: {
        armor: {
            light: 1,
            medium: 1,
            heavy: 0,
            shields: 1
        },
        tools: ['Alchemist\'s Supplies','Herbalism Kit'],
        languages: ['Druidic', 'Elvish', 'Primordial'],
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
            arcana: 0,
            athletics: 0,
            deception: 0,
            history: 0,
            insight: 1,
            intimidation: 0,
            investigation: 1,
            medicine: 1,
            nature: 0,
            perception: 1,
            performance: 0,
            persuasion: 0,
            religion: 1,
            sleight_of_hand: 0,
            stealth: 0,
            survival: 0
        },
        weapons: {
            simple: 1,
            martial: 0,
            misc: ['Quarterstaff']
        }
    },
    attacks: [
        {
            name: 'Fire Bolt',
            type: 'Spell Attack',
            range: 120,
            attribute: 'int',
            instances: 1,
            hit_bonus: 0,
            damage_die: 10,
            damage_die_quantity: 2,
            damage_type: 'Fire'
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
        spellsave: 15,
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
import { Player } from '../interfaces'

export var Quarth: Player =
{
    name: 'Quarth',
    level: 7,
    image_path: 'images/players/Quarth-headshot.png',
    colour: '#6f47b5',
    race: 'Half High-Elf',
    classes: [
        {
            name: 'Warlock',
            levels: 7,
            subclass: 'Great Old One'
        }
    ],
    type: 'caster',
    passive_perception: 14,
    speed: 30,
    initiative: {
        modifier: 2,
        current: 5
    },
    hp: {
        current: 46,
        current_max: 46,
        regular_max: 46,
        temp: 0
    },
    ac: {
        regular: 14,
        current: 14,
        note: 'Studded Leather'
    },
    attributes: {
        str: 0,
        dex: 2,
        con: 2,
        int: -1,
        wis: 1,
        cha: 5,
    },
    proficiencies: {
        armor: {
            light: 1,
            medium: 1,
            heavy: 0,
            shields: 0
        },
        tools: ['Forgery Kit', 'Disguise Kit'],
        languages: ['Elvish', 'Deep Speech'],
        saves: {
            str: 0,
            dex: 0,
            con: 0,
            int: 0,
            wis: 1,
            cha: 1
        },
        skills: {
            acrobatics: 0,
            animal_handling: 0,
            arcana: 0,
            athletics: 0,
            deception: 2,
            history: 0,
            insight: 0,
            intimidation: 1,
            investigation: 0,
            medicine: 0,
            nature: 0,
            perception: 1,
            performance: 0.5,
            persuasion: 2,
            religion: 0,
            sleight_of_hand: 1,
            stealth: 0,
            survival: 0
        },
        weapons: {
            simple: 1,
            martial: 0,
            misc: ['Rapier']
        }
    },
    attacks: [
        {
            name: 'Eldritch Blast',
            type: 'Ranged Spell Attack',
            level: 0,
            attribute: 'cha',
            instances: 2,
            range: 120,
            rarity: 'rare',
            hit: {
                attribute: true,
                modifier: 1
            },
            damage: [
                {
                    attribute: true,
                    dice: '1d10'
                }
            ]
        }
    ],
    features: [
        {
            name: 'Pactkeeper Spell',
            uses: 1,
            recharge: 'LR',
            effect: 'Cast any Warlock spell without a spellslot',
            activation: 'Action',
            attunement: true
        },
        {
            name: 'Faerie Fire',
            uses: 1,
            recharge: 'LR',
            effect: 'Cast Faerie Fire without a spellslot',
            activation: 'Action',
            concentration: true
        },
        {
            name: 'Darkness',
            uses: 1,
            recharge: 'LR',
            effect: 'Cast Darkness without a spellslot',
            activation: 'Action',
            concentration: true
        },
        {
            name: 'Sacrificial Healing',
            uses: 35,
            recharge: 'LR',
            effect: 'A creature you touch regains hitpoints up to 5x your level, and you take half of the amount healed as Necrotic Damage.',
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
        {
            name: 'Entropic Ward',
            uses: 1,
            recharge: 'SR',
            effect: 'Give Disadvantage to an Attack Roll against you, and gain Advantage on your next Attack Roll against that creature.',
            activation: 'Reaction'
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
        attribute: 'cha',
        slots: [
            {
                level: 4,
                total: 2,
                used: 0
            }
        ]
    }
}
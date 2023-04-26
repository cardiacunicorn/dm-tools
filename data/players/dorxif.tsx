import { Player } from '../interfaces'

export var Dorxif: Player =
{
    name: 'Dorxif',
    level: 7,
    image_path: 'images/players/Dorxif-headshot.png',
    colour: '#3F7CF7',
    race: 'Rock Gnome',
    classes: [
        {
            name: 'Artificer',
            levels: 7,
            subclass: 'Artillerist'
        }
    ],
    type: 'hybrid-caster',
    spellsave: 16,
    passive_perception: 16,
    speed: 30,
    initiative: {
        modifier: 7,
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
        note: 'Breastplate'
    },
    attributes: {
        str: -1,
        dex: 4,
        con: 3,
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
            type: 'ranged',
            proficiency: 3,
            attribute: 'dex',
            rarity: 'rare',
            instances: 2,
            hit_bonus: 0,
            damage_die: 'd10',
            damage_die_quantity: 1,
            damage_bonus: 0,
            conditional_damage_bonus: 7
        }
    ],
    features: [
        {
            name: 'Sharpshooter',
            activation: 'Option',
            recharge: 'NA',
            effect: '-5 to Hit, +10 extra damage. Ignore Cover.'
        }
    ],
    effects: {
        advantage: [],
        disadvantage: [],
        immunities: [],
        resistances: ['Poison'],
        vulnerabilities: []
    },
    spellcasting: {
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
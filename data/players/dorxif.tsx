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
    passive_perception: 10,
    speed: 30,
    initiative: {
        modifier: 2,
        current: 21
    },
    hp: {
        current: 62,
        current_max: 62,
        regular_max: 62,
        temp: 0
    },
    ac: {
        regular: 19,
        current: 19,
        note: 'Infused Breastplate, Shield'
    },
    attributes: {
        str: -1,
        dex: 2,
        con: 3,
        int: 5,
        wis: 0,
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
            str: 0,
            dex: 0,
            con: 1,
            int: 1,
            wis: 0,
            cha: 0
        },
        skills: {
            acrobatics: 0,
            animal_handling: 0,
            arcana: 1,
            athletics: 0,
            deception: 0,
            history: 0,
            insight: 0,
            intimidation: 0,
            investigation: 1,
            medicine: 0,
            nature: 0,
            perception: 0,
            performance: 0,
            persuasion: 0,
            religion: 0,
            sleight_of_hand: 0,
            stealth: 0,
            survival: 0
        },
        weapons: {
            simple: 1,
            martial: 0,
            misc: ['Firearms']
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
        {
            name: 'Arcane Firearm',
            type: 'Spell Attack',
            instances: 1,
            damage_die: 8,
            damage_die_quantity: 1
        },
    ],
    features: [
        {
            name: 'Eldritch Cannon',
            uses: 35,
            recharge: 'LR',
            effect: 'A creature you touch regains hitpoints up to 5x your level, and you take half of the amount healed as Necrotic Damage.',
            activation: 'Bonus'
        },
        {
            name: 'Flash of Genius',
            uses: 5,
            recharge: 'LR',
            effect: 'Add +5 to any failed Ability Check within 30ft of you.',
            activation: 'Reaction'
        }
    ],
    effects: {
        advantage: ['INT Saves','WIS Saves','CHA Saves'],
        disadvantage: [],
        immunities: [],
        resistances: [],
        vulnerabilities: []
    },
    spellcasting: {
        spellsave: 16,
        attribute: 'int',
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
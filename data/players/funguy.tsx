import { Player } from '../interfaces'

export var Funguy: Player =
{
    name: 'Funguy',
    level: 7,
    proficiency: 3,
    image_path: 'images/players/Funguy-headshot.png',
    colour: '#096340',
    race: 'Tortle',
    classes: [
        {
            name: 'Druid',
            levels: 7,
            subclass: 'Spores'
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
        note: 'Natural Armor, Bracers'
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
            name: 'Chill Touch',
            type: 'spell',
            level: 0,
            attribute: 'wis',
            instances: 1,
            hit_bonus: 2,
            damage_die: 8,
            damage_die_quantity: 2,
            damage_bonus: 0
        },
        {
            name: 'Staff of the Woodlands',
            type: 'Melee',
            attribute: 'wis',
            rarity: 'rare',
            instances: 1,
            hit_bonus: 2,
            damage_die: 8,
            damage_die_quantity: 1,
            damage_bonus: 2
        },
    ],
    features: [
        {
            name: 'Wild Shape',
            uses: 2,
            recharge: 'SR',
            effect: 'Transform into a CR1 Beast for up to 3 hours.',
            activation: 'Action'
        },
        {
            name: 'Halo of Spores',
            recharge: 'NA',
            effect: 'CON Save or take 1d6 Necrotic to one creature if within 10ft',
            activation: 'Reaction'
        }
    ],
    effects: {
        advantage: ['Concentration'],
        disadvantage: [],
        immunities: [],
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
                used: 1
            },
            {
                level: 3,
                total: 3,
                used: 2
            },
            {
                level: 4,
                total: 1,
                used: 0
            },
        ]
    }
}
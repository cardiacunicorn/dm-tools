import { Player } from '../interfaces'

export var Fen: Player =
{
    name: 'Fen',
    level: 8,
    image_path: 'images/players/Fen-headshot.png',
    colour: '#E9D554',
    race: 'Half Elf Aasimar',
    classes: [
        {
            name: 'Fighter',
            levels: 6,
            subclass: 'Samurai'
        },
        {
            name: 'Rogue',
            levels: 2
        }
    ],
    type: 'martial',
    spellsave: 13,
    passive_perception: 10,
    speed: 30,
    initiative: {
        modifier: 4,
        current: 20
    },
    hp: {
        current: 74,
        current_max: 74,
        regular_max: 74,
        temp: 0
    },
    ac: {
        regular: 20,
        current: 20,
        note: 'Mithril Plate, Shield'
    },
    attributes: {
        str: 0,
        dex: 5,
        con: 3,
        int: 0,
        wis: 0,
        cha: 2,
    },
    proficiencies: {
        armor: {
            light: 1,
            medium: 1,
            heavy: 1,
            shields: 1
        },
        tools: ['Thieves Tools','Land Vehicles','Playing Cards'],
        languages: ['Elvish', 'Celestial'],
        saves: {
            str: 1,
            dex: 0,
            con: 1,
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
            insight: 2,
            intimidation: 1,
            investigation: 0,
            medicine: 0,
            nature: 0,
            perception: 0,
            performance: 1,
            persuasion: 0,
            religion: 0,
            sleight_of_hand: 0,
            stealth: 2,
            survival: 1
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
            attribute: 'dex',
            rarity: 'rare',
            instances: 2,
            hit_bonus: 0,
            damage_die: 10,
            damage_die_quantity: 1,
            damage_bonus: 0,
            conditional_damage_bonus: 7
        },
        {
            name: 'Arming Sword',
            attribute: 'dex',
            rarity: 'uncommon',
            activation: 'Action',
            instances: 2,
            hit_bonus: 1,
            damage_die: 8,
            damage_die_quantity: 1,
            damage_bonus: 1
        }
    ],
    spellcasting: {
        attribute: 'cha',
        spellsave: 13
    },
    features: [
        {
            name: 'Action Surge',
            uses: 1,
            recharge: 'SR',
            effect: 'Gain another Action to use as you see fit.',
            activation: 'Special'
        },
        {
            name: 'Second Wind',
            uses: 1,
            recharge: 'SR',
            effect: 'Recover 1d10 + Fighter Level Hitpoints',
            activation: 'Bonus'
        },
        {
            name: 'Radiant Consumption',
            uses: 1,
            recharge: 'LR',
            effect: 'Once per turn deal P.B. extra Radiant on an Attack. At the end of your turn, targets within 10ft take another P.B. Radiant Damage.',
            activation: 'Bonus'
        },
        {
            name: 'Healing Hands',
            uses: 1,
            recharge: 'LR',
            effect: "Heal someone you touch for #PB d4's",
            activation: 'Action'
        },
        {
            name: 'Fighting Spirit',
            uses: 3,
            recharge: 'LR',
            effect: 'Give yourself Advantage on Attack Rolls this turn, and gain Temporary Hit Points.',
            activation: 'Bonus'
        },
        {
            name: 'Cunning Action',
            recharge: 'NA',
            effect: 'Dodge, Disengage or Dash',
            activation: 'Bonus'
        }
    ],
    effects: {
        advantage: [],
        disadvantage: [],
        immunities: [],
        resistances: ['Radiant','Necrotic'],
        vulnerabilities: []
    }
}
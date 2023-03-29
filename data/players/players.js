export var players = [
    {
        name: 'Badger',
        level: 7,
        proficiency: 3,
        image_path: 'images/players/Badger-headshot.png',
        colour: '#B2C6D2',
        race: 'Duergar',
        classes: ['Monk 6 (Mercy) / Cleric 1'],
        type: 'hybrid-caster',
        spellsave: 14,
        passive_perception: 13,
        speed: 45,
        initiative: {
            modifier: 4,
            current: 20
        },
        hp: {
            current: 54,
            current_max: 54,
            regular_max: 54,
            temp: 0
        },
        ac: {
            regular: 19,
            current: 19,
            note: 'Bracers of Defence'
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
            tools: ['Brewer\'s Supplies','Herbalism Kit','Poisoner\'s Kit'],
            languages: ['Giant', 'Undercommon'],
            saves: {
                str: 1,
                dex: 1,
                con: 0,
                int: 0,
                wis: 0,
                cha: 0
            },
            skills: {
                acrobatics: 1,
                animal_handling: 1,
                arcana: 0,
                athletics: 1,
                deception: 0,
                history: 0,
                insight: 1,
                intimidation: 0,
                investigation: 0,
                medicine: 1,
                nature: 0,
                perception: 0,
                performance: 0,
                persuasion: 1,
                religion: 1,
                sleight_of_hand: 0,
                stealth: 1,
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
                name: 'Mithril Claws',
                stat: 'dex',
                rarity: 'Uncommon',
                hit_bonus: 1,
                damage_die: 'd8',
                damage_bonus: 1
            }
        ],
        features: [
            {
                name: 'Ki Points',
                uses: 6,
                recharge: 'SR',
                activation: 'Special'
            },
            {
                name: 'Enlarge',
                uses: 1,
                recharge: 'LR',
                effect: 'Size doubles, Adv. on STR Checks & Saves, +1d4 extra damage.',
                activation: 'Action',
                concentration: true
            },
            {
                name: 'Invisibility',
                uses: 1,
                recharge: 'LR',
                effect: 'Turn invisible for up to an hour.',
                activation: 'Action',
                concentration: true
            }
        ],
        effects: {
            advantage: ['Poisoned'],
            disadvantage: [],
            immunities: [],
            resistances: ['Poison'],
            vulnerabilities: []
        },
        spells: {
            slots: {
                level1: {
                    total: 2,
                    used: 1
                }
            }
        }
    },
    {
        name: 'Fen',
        level: 7,
        proficiency: 3,
        image_path: 'images/players/Fen-headshot.png',
        colour: '#E9D554',
        race: 'Half Elf Aasimar',
        classes: ['Fighter 7 (Samurai)'],
        type: 'martial',
        spellsave: 13,
        passive_perception: 10,
        speed: 30,
        initiative: {
            modifier: 4,
            current: 20
        },
        hp: {
            current: 67,
            current_max: 67,
            regular_max: 67,
            temp: 0
        },
        ac: {
            regular: 20,
            current: 20,
            note: 'Mithril Plate & Shield'
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
                insight: 1,
                intimidation: 1,
                investigation: 0,
                medicine: 0,
                nature: 0,
                perception: 0,
                performance: 1,
                persuasion: 0,
                religion: 0,
                sleight_of_hand: 0,
                stealth: 0,
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
                name: 'Arming Sword',
                stat: 'dex',
                hit_bonus: 1,
                damage_die: 'd8',
                damage_bonus: 1
            }
        ],
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
            }
        ],
        effects: {
            advantage: [],
            disadvantage: [],
            immunities: [],
            resistances: ['Radiant','Necrotic'],
            vulnerabilities: []
        }
    },
    {
        name: 'Numwick',
        level: 7,
        proficiency: 3,
        image_path: 'images/players/Numwick-headshot.png',
        colour: '#3F7CF7',
        race: 'High Elf',
        classes: ['Wizard 7 (Evocation)'],
        type: 'caster',
        spellsave: 15,
        passive_perception: 13,
        speed: 30,
        initiative: {
            modifier: 3,
            current: 13
        },
        hp: {
            current: 46,
            current_max: 46,
            regular_max: 46,
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
            int: 4,
            wis: 0,
            cha: 1,
        },
        proficiencies: {
            armor: {
                light: 1,
                medium: 0,
                heavy: 0,
                shields: 0
            },
            tools: ['Alchemist\'s Supplies','Smith\'s Tools','Tinker\'s Tools','Cobbler\'s Tools','Instruments'],
            languages: ['Gnomish', 'Dwarvish', 'Elvish'],
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
                simple: 1,
                martial: 0,
                misc: ['Light Crossbow', 'Dagger', 'Quarterstaff']
            }
        },
        attacks: [
            {
                
            }
        ],
        features: [
            {
                name: 'Arcane Recovery',
                uses: 1,
                recharge: 'LR',
                effect: 'Recover spell slots equal to half your level, rounded up. Slot Max: 5.',
                activation: 'Special'
            },
            {
                name: 'Detect Magic',
                uses: 1,
                recharge: 'LR',
                effect: 'Cast Detect Magic without a slot.',
                activation: 'Action',
                concentration: true
            },
            {
                name: 'Misty Step',
                uses: 1,
                recharge: 'LR',
                effect: 'Cast Misty Step without a slot.',
                activation: 'Bonus'
            }
        ],
        effects: {
            advantage: ['Charmed'],
            disadvantage: [],
            immunities: ['Sleep'],
            resistances: [],
            vulnerabilities: []
        },
        spells: {
            slots: {
                level1: {
                    total: 4,
                    used: 0
                },
                level2: {
                    total: 3,
                    used: 1
                },
                level3: {
                    total: 3,
                    used: 2
                },
                level4: {
                    total: 1,
                    used: 0
                },
            }
        }
    },
    {
        name: 'Pico',
        level: 7,
        proficiency: 3,
        image_path: 'images/players/Pico-headshot.png',
        colour: '#096340',
        race: 'Human',
        classes: ['Ranger 7 (Gloom Stalker)'],
        type: 'hybrid-caster',
        spellsave: 14,
        passive_perception: 16,
        speed: 35,
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
            note: 'Mithril Halfplate'
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
        spells: {
            slots: {
                level1: {
                    total: 4,
                    used: 0
                },
                level2: {
                    total: 3,
                    used: 0
                }
            }
        }
    },
    {
        name: 'Quarth',
        level: 7,
        proficiency: 3,
        image_path: 'images/players/Quarth-headshot.png',
        colour: '#6f47b5',
        race: 'Half High-Elf',
        classes: ['Warlock 7 (Great Old One)'],
        type: 'caster',
        spellsave: 17,
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
                medium: 0,
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
                stat: 'cha',
                hit_bonus: 1,
                damage_die: 'd10',
                damage_bonus: 1
            }
        ],
        features: [
            {
                name: 'Darkness',
                uses: 1,
                recharge: 'LR',
                effect: 'Cast Darkness without a spellslot',
                activation: 'Action',
                concentration: true
            },
            {
                name: 'Pactkeeper Spell',
                uses: 1,
                recharge: 'LR',
                effect: 'Cast any Warlock spell without a spellslot',
                activation: 'Action',
                concentration: true
            },
            {
                name: 'Sacrificial Healing',
                uses: 35,
                recharge: 'LR',
                effect: 'A creature you touch regains hitpoints up to 5x your level, and you take half of the amount healed as Necrotic Damage.',
                activation: 'Action',
                concentration: true
            }
        ],
        effects: {
            advantage: ['Charmed'],
            disadvantage: [],
            immunities: ['Sleep'],
            resistances: [],
            vulnerabilities: []
        },
        spells: {
            slots: {
                level4: {
                    total: 2,
                    used: 0
                }
            }
        }
    }
];
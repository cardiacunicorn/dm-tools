export var players = [
    {
        name: 'Badger',
        level: 7,
        proficiency: 3,
        image_path: 'images/players/Badger-headshot.png',
        colour: '#B2C6D2',
        race: 'Duergar',
        classes: ['Monk 6 (Mercy) / Cleric 1'],
        speed: 45,
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
        firepower: {
            ki: {
                name: 'Ki Points',
                uses: 6,
                recharge: 'SR'
            }
        },
        features: {
            enlarge: {
                name: 'Enlarge',
                uses: 1,
                recharge: 'LR',
                description: 'Size doubles, Adv. on STR Checks & Saves, +1d4 extra damage.',
                activation: 'Action',
                concentration: true
            },
            invisibility: {
                name: 'Invisibility',
                uses: 1,
                recharge: 'LR',
                effect: 'Turn invisible for up to an hour.',
                activation: 'Action',
                concentration: true
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
        speed: 30,
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
        firepower: {
            ki: {
                name: 'Ki Points',
                uses: 6,
                recharge: 'SR'
            }
        },
        features: {
            enlarge: {
                name: 'Enlarge',
                uses: 1,
                recharge: 'LR',
                description: 'Size doubles, Adv. on STR Checks & Saves, +1d4 extra damage.',
                activation: 'Action',
                concentration: true
            },
            invisibility: {
                name: 'Invisibility',
                uses: 1,
                recharge: 'LR',
                effect: 'Turn invisible for up to an hour.',
                activation: 'Action',
                concentration: true
            }
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
        speed: 30,
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
        firepower: {
            ki: {
                name: 'Ki Points',
                uses: 6,
                recharge: 'SR'
            }
        },
        features: {
            enlarge: {
                name: 'Enlarge',
                uses: 1,
                recharge: 'LR',
                description: 'Size doubles, Adv. on STR Checks & Saves, +1d4 extra damage.',
                activation: 'Action',
                concentration: true
            },
            invisibility: {
                name: 'Invisibility',
                uses: 1,
                recharge: 'LR',
                effect: 'Turn invisible for up to an hour.',
                activation: 'Action',
                concentration: true
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
        firepower: {
            ki: {
                name: 'Ki Points',
                uses: 6,
                recharge: 'SR'
            }
        },
        features: {
            enlarge: {
                name: 'Enlarge',
                uses: 1,
                recharge: 'LR',
                description: 'Size doubles, Adv. on STR Checks & Saves, +1d4 extra damage.',
                activation: 'Action',
                concentration: true
            },
            invisibility: {
                name: 'Invisibility',
                uses: 1,
                recharge: 'LR',
                effect: 'Turn invisible for up to an hour.',
                activation: 'Action',
                concentration: true
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
        speed: 30,
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
        firepower: {
            ki: {
                name: 'Ki Points',
                uses: 6,
                recharge: 'SR'
            }
        },
        features: {
            enlarge: {
                name: 'Enlarge',
                uses: 1,
                recharge: 'LR',
                description: 'Size doubles, Adv. on STR Checks & Saves, +1d4 extra damage.',
                activation: 'Action',
                concentration: true
            },
            invisibility: {
                name: 'Invisibility',
                uses: 1,
                recharge: 'LR',
                effect: 'Turn invisible for up to an hour.',
                activation: 'Action',
                concentration: true
            }
        }
    }
];
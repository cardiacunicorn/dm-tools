export var players = [
    {
        name: 'Badger',
        level: 7,
        proficiency: 3,
        image_path: 'images/players/Badger-headshot.png',
        colour: '#B2C6D2',
        classes: ['Monk 6 (Mercy) / Cleric 1'],
        hp: {
            current: 54,
            current_max: 54,
            regular_max: 54,
            temp: 0
        },
        ac: {
            regular: 19,
            current: 19
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
            saves: ['str','dex'],
            skills: ['Acrobatics','Animal Handling','Athletics','Insight','Medicine','Persuasion','Religion','Stealth','Survival'],
            equipment: ['Light','Medium','Shields','Simple'],
            tools: ['Brewer\'s Supplies','Herbalism Kit','Poisoner\'s Kit'],
            languages: ['Giant', 'Undercommon']
        },
        expertise: {
            skills: [],
            tools: []
        }
    },
    {
        name: 'Fen',
        level: 7,
        proficiency: 3,
        image_path: 'images/players/Fen-headshot.png',
        colour: '#E9D554',
        classes: ['Fighter 7 (Samurai)'],
        hp: {
            current: 67,
            current_max: 67,
            regular_max: 67,
            temp: 0
        },
        ac: {
            regular: 20,
            current: 20
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
            saves: ['str','con'],
            skills: ['Athletics','Insight','Intimidation','Performance','Survival'],
            equipment: ['Light','Medium','Shields','Heavy','Simple','Martial'],
            tools: ['Thieves Tools','Land Vehicles','Playing Cards'],
            languages: ['Elvish', 'Celestial']
        },
        expertise: {
            skills: [],
            tools: []
        }
    },
    {
        name: 'Numwick',
        level: 7,
        proficiency: 3,
        image_path: 'images/players/Numwick-headshot.png',
        colour: '#3F7CF7',
        classes: ['Wizard 7 (Evocation)'],
        hp: {
            current: 46,
            current_max: 46,
            regular_max: 46,
            temp: 0
        },
        ac: {
            regular: 13,
            current: 16
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
            saves: ['int','wis'],
            skills: ['Arcana','Insight','Investigation','Perception','Persuasion'],
            equipment: ['Light Crossbow', 'Dagger', 'Quarterstaff'],
            tools: ['Alchemist\'s Supplies','Smith\'s Tools','Tinker\'s Tools','Cobbler\'s Tools','Instruments'],
            languages: ['Gnomish', 'Dwarvish', 'Elvish']
        },
        expertise: {
            skills: ['Persuasion'],
            tools: []
        }
    },
    {
        name: 'Pico',
        level: 7,
        proficiency: 3,
        image_path: 'images/players/Pico-headshot.png',
        colour: '#096340',
        classes: ['Ranger 7 (Gloom Stalker)'],
        hp: {
            current: 60,
            current_max: 60,
            regular_max: 60,
            temp: 0
        },
        ac: {
            regular: 17,
            current: 17
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
            saves: ['str','dex'],
            skills: ['Athletics','Insight','Investigation','Nature','Perception','Sleight of Hand','Stealth'],
            equipment: ['Light','Medium','Shields','Simple','Martial'],
            tools: ['Forgery Kit', 'Thieves Tools', 'Playing Cards'],
            languages: ['Elvish', 'Orc', 'Abyssal']
        },
        expertise: {
            skills: [],
            tools: ['Thieves Tools']
        }
    },
    {
        name: 'Quarth',
        level: 7,
        proficiency: 3,
        image_path: 'images/players/Quarth-headshot.png',
        colour: '#461A99',
        classes: ['Warlock 7 (Great Old One)'],
        hp: {
            current: 46,
            current_max: 46,
            regular_max: 46,
            temp: 0
        },
        ac: {
            regular: 14,
            current: 14
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
            saves: ['wis','cha'],
            skills: ['Deception','Intimidation','Perception','Performance','Persuasion','Sleight of Hand'],
            equipment: ['Light','Simple','Rapier'],
            tools: ['Forgery Kit', 'Disguise Kit'],
            languages: ['Elvish', 'Deep Speech']
        },
        expertise: {
            skills: ['Deception','Persuasion'],
            tools: []
        }
    }
];
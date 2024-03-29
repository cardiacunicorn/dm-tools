export interface Player {
    name: string,
    display: boolean,
    level: number,
    image_path: string,
    colour: string,
    race: string,
    classes: Class[],
    type: string,
    passive_perception: number,
    speed: number,
    initiative: Initiative,
    hp: Health,
    ac: Armor,
    attributes: Attributes,
    proficiencies?: Proficiencies,
    attacks: Attack[],
    spellcasting?: Spellcasting,
    features: Feature[],
    effects: Effects,
}

export interface Spellcasting {
    attribute: string,
    spellsave: number,
    slots?: SpellLevel[],
    spells?: any
}

export interface SpellLevel {
    level: number,
    total: number,
    used: number
}

export interface Class {
    name: string,
    levels: number,
    subclass?: string
}

export interface Initiative {
    modifier: number,
    current: number
}

export interface Health {
    current: number,
    regular_max: number,
    current_max?: number,
    temp?: number
}

export interface Armor {
    current: number,
    regular: number,
    note?: string
}

export interface Attributes {
    str: number,
    dex: number,
    con: number,
    int: number,
    wis: number,
    cha: number
}

export interface Proficiencies {
    armor: any,
    tools: string[],
    languages: string[],
    saves: Attributes,
    skills: Skills,
    weapons: Weapons
}

export interface Skills {
    acrobatics: number,
    animal_handling: number,
    arcana: number,
    athletics: number,
    deception: number,
    history: number,
    insight: number,
    intimidation: number,
    investigation: number,
    medicine: number,
    nature: number,
    perception: number,
    performance: number,
    persuasion: number,
    religion: number,
    sleight_of_hand: number,
    stealth: number,
    survival: number
}

export interface Weapons {
    simple: number,
    martial?: number,
    misc?: string[]
}

export interface Attack {
    name: string,
    activation?: string,
    attribute?: string,
    damage?: any,
    hit?: any,
    level?: number,
    notes?: any,
    range?: any,
    rarity?: string,
    type?: string,
    instances?: number,
    hit_bonus?: number,
    damage_die?: number,
    damage_die_quantity?: number,
    damage_bonus?: number,
    damage_type?: string,
    conditional_damage_bonus?: number
}

export interface Feature {
    name: string,
    activation?: string,
    attunement?: boolean,
    concentration?: boolean,
    effect: string,
    recharge?: string,
    rarity?: string,
    uses?: number
}

export interface Effects {
    advantage: string[],
    disadvantage: string[],
    immunities: string[],
    resistances: string[],
    vulnerabilities: string[]
}
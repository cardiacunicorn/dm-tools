interface PlayerProps {
    name: String,
    level: number,
    // proficiency: number,
    image_path: String,
    colour: String,
    race: String,
    // classes: ['Monk 6 (Mercy) / Cleric 1'],
    type: String,
    spellsave: number,
    passive_perception: number,
    speed: number,
}

export function NewPlayer({ ...props }: PlayerProps) {

    console.log(props);

    var proficiency = Math.round((props.level + 5) / 4);

    return (
        <div {...props}>
            <div>
                Name: {props.name}
            </div>
            <div>
                Level: {props.level}
            </div>
            <div>
                Proficiency Bonus: {proficiency}
            </div>
            <div>
                Image Path: {props.image_path}
            </div>
            <div>
                Colour: {props.colour}
            </div>
            <div>
                Race: {props.race}
            </div>
            <div>
                Type: {props.type}
            </div>
            <div>
                Spellsave DC: {props.spellsave}
            </div>
            <div>
                Passive Perception: {props.passive_perception}
            </div>
            <div>
                Speed: {props.speed}
            </div>
        </div>
    )
}
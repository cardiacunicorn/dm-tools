export default function About() {
    return (
        <div>
            <h1>About</h1>
            <p>This is a NextJS Website primarily to build my web development skills, and as such I want to emphasise front end aesthetics, flexibility, as well as JS functionality and JSON state-based processing.</p>
            <hr></hr>
            <h2>Features</h2>
            <h3>Player Blocks</h3>
            <ul>
                <li>Player ‘Blocks’ that can be built into a party view.</li>
                <li>Horizontal bars like my Photopea, or as simple as profile pic & AC for streaming display.</li>
            </ul>
            <h3>Premade Blocks</h3>
            <ul>
                <li>Streamer</li>
                <li>Martial</li>
                <li>Caster</li>
                <li>Half-Caster</li>
                <li>Multi-Class</li>
            </ul>
            <h3>Customised Blocks</h3>
            <ul>
                <li>All interesting fields populated on RHS from character’s JSON, then I want to drag and drop them onto a ‘Block’ layout</li>
                <li>Expandable mini-blocks i.e. should the character portrait be 1x1, 2x2, or removed for a name instead?</li>
            </ul>
            <h3>Settings</h3>
            <ul>
                <li>Pull from D&D Beyond, but in future could offer a sync if API doesn’t get limited</li>
                <li>Pull extra details on hover?</li>
                <li>Tap spell slot circles</li>
            </ul>
            <h3>Party View</h3>
            <ul>
                <li>DM’s see Player Blocks on one page</li>
                <li>Natural and Final rolls next to the player</li>
                <li>Big ‘Input’ field, so you could enter any pos/neg integer and click on players or creatures to manipulate their health or other scores</li>
            </ul>
            <h3>Party Inventory</h3>
            <ul>
                <li>DM’s can use tabs to navigate to ‘Inventory’ where they can see what everyone has</li>
                <li>Because writing back to D&D Beyond seems tricky, it would be great if as a DM I could prep a list of loot my players might find on the RHS, then as they find it, I could drag and drop it onto characters</li>
                <li>Then there could be a post-session screen that summarises the updates required in D&D Beyond to keep things in sync, with checkboxes, for the DM or players to do as needed</li>
            </ul>
            <h3>Analysis Tab</h3>
            <ul>
                <li>Crunch DPS as with A-Hero’s spreadsheet, but with my Include flexibility and damage dice</li>
                <li>Player Analysis: Add perceived strengths and weaknesses, in order to suggest Creatures that are easier or harder than usual for them</li>
            </ul>
            <h3>Proficiencies Tab</h3>
            <ul>
                <li>Saves, Armor, Tools, Languages, Skills, Custom Skills</li>
                <li>Best in party skill chart</li>
            </ul>
            <h3>Spells & Features Tab</h3>
            <ul>
                <li>At a glance see what spells your party has prepared, so you can read their descriptions</li>
                <li>Filter by utility or combat for example</li>
                <li>‘Favourite’ or ‘Star’ certain spells and features, so you’ve got a note of them on the Player’s Block view for quick reference</li>
                <li>Upcoming spells and features, for when they level up</li>
                <li>Maybe can even add a dropdown selector for what class level they plan on taking next</li>
            </ul>
            <h3>Map Tool</h3>
            <ul>
                <li>Just a simple upload an image, then add pins (with click labels) to it that work if you zoom in and out. Honestly all I use World Anvil for.</li>
            </ul>
            <h3>Articles</h3>
            <ul>
                <li>Explainer guide on setting up Notion DBs</li>
            </ul>
        </div>
    )
}
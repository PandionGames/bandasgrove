<script>
const Typer = {
        async type(selector, text, speed = 1) {
            const chunks = text.split(".");
            let characterCount = 0;
            for (const chunk of chunks) {
                const chunkText = chunk + ".";
                const characters = chunkText.split("");
                for (const character of characters) {
                    document.querySelector(selector).innerHTML += text.substr(characterCount,1);
                    characterCount++;
                    await wait(speed);
                }
            await wait(175);
            }
        },
    };

    async function spotcreature() {
        const response = await fetch('https://raw.githubusercontent.com/PandionGames/bandasgrove/main/bg_creatures.json');
        const creaturelist = await response.json();
        const rng = Math.floor(Math.random() * creaturelist.creatures.length-1);
        return creaturelist.creatures[rng];
    };

    const QuestionOracle = {
        isTyping: false,
        async ask() {
            if (this.isTyping) return;
            this.isTyping = true;
            
            // clean up the fields
            document.querySelector("#indexoutput").innerHTML = '<span style="font-weight:bold;">Index: </span>';
            document.querySelector("#nameoutput").innerHTML = '<span style="font-weight:bold;">Name: </span>';
            document.querySelector("#planeoutput").innerHTML = '<span style="font-weight:bold;">Plane: </span>';
            document.querySelector("#descriptionoutput").innerHTML  = '<span style="font-weight:bold;">Description: </span>';

            // call for a random creature, store the array.
            const spottedcreature = await spotcreature();

            // call the individual key:values of spottedcreature and send them to the typer, 
            // which writes the value in the text fields.
            await Typer.type("#indexoutput",spottedcreature["index"], 15);
            await Typer.type("#nameoutput", spottedcreature["name"], 15);
            await Typer.type("#planeoutput", spottedcreature["plane"], 15);
            await Typer.type("#descriptionoutput", spottedcreature["description"], 15);
            this.isTyping = false;
        },
    };

    async function wait(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }
</script>
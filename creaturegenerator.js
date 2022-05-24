<script>
    const Typer = {
        async type(selector, text, speed = 1) {
            document.querySelector(selector).innerText = "";
            const chunks = text.split(".");
            let characterCount = 0;
            for (const chunk of chunks) {
                const chunkText = chunk + ".";
                const characters = chunkText.split("");
                for (const character of characters) {
                    characterCount++;
                    document.querySelector(selector).innerText = text.substr(
                    0,
                    characterCount
                    );
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
            const spottedcreature = await spotcreature();
            await Typer.type("#indexoutput", spottedcreature["index"], 15);
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
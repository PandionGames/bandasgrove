// NOTE: This does not work currently. Do not try to run it.

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

async function loadCreatures() {
  const response = await fetch('https://raw.githubusercontent.com/PandionGames/bandasgrove/main/bg_creatures.json');
  const creaturelist = await response.json();
  console.log(response); 
};

const creaturelist = loadCreatures();


var creatures = JSON.parse(creaturelist, function (key, value) {
     return value;
  });

const QuestionOracle = {
    isTyping: false,
    async ask() {
        if (this.isTyping) return;
        this.isTyping = true;
        // const rng = Math.floor(Math.random() * creatureslist.length-1);
        // const index = rng.padstart(3,"0");
        let displaytext =  creatures.description;
        await Typer.type("#creaturegeneratortext", displaytext, 25);
        this.isTyping = false;
    },
};


async function wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
</script>
<script>
    async function pickaplane() {
        const response = await fetch('https://raw.githubusercontent.com/PandionGames/bandasgrove/main/bg_convergenceevents.json');
        const eventlist = await response.json();
        console.log(eventlist);
        const planepick = Math.floor(Math.random() * eventlist.planes.length-1);
        console.log(eventlist.planes[planepick]);
        const featurepick = Math.floor(Math.random() * eventlist.planes[planepick].length-1);
        console.log(eventlist.planes[planepick][featurepick])
        return eventlist.planes[rng];
    };

    const ConvergenceEvent = {
        isTyping: false,
        async ask() {
            if (this.isTyping) return;
            this.isTyping = true;
            
            // clean up the fields
            // document.querySelector("#indexoutput").innerHTML = '<span style="font-weight:bold;">Index: </span>';
            // document.querySelector("#nameoutput").innerHTML = '<span style="font-weight:bold;">Name: </span>';
            // document.querySelector("#planeoutput").innerHTML = '<span style="font-weight:bold;">Plane: </span>';
            // document.querySelector("#descriptionoutput").innerHTML  = '<span style="font-weight:bold;">Description: </span>';

            // call for a random creature, store the array.
            const plane = await pickaplane();

            // call the individual key:values of spottedcreature and send them to the typer, 
            // which writes the value in the text fields.
            await Typer.type("#planefragmentoutput",plane["feature"], 15);
            this.isTyping = false;
        },
    };

    async function wait(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }
</script>
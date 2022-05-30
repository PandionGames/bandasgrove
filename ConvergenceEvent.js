<script>
    async function pickaplane() {
        const response = await fetch('https://raw.githubusercontent.com/PandionGames/bandasgrove/main/bg_convergenceevents.json');
        const planelist = await response.json();
        const rng = Math.floor(Math.random() * planelist.planes.length);
        return planelist.planes[rng];
    };

    const ConvergenceEvent = {
        isTyping: false,
        async ask() {
            if (this.isTyping) return;
            this.isTyping = true;
            
            // clean up the fields
            document.querySelector("#planefragmentoutput").innerHTML = '<span style="font-weight:bold;">Plane Detected: </span>';
            document.querySelector("#fragmentfeatureoutput").innerHTML = '<span style="font-weight:bold;">Unique Feature: </span>';

            // call for a random plane and calculate number of features available
            const plane = await pickaplane();
            const featurepick = Math.floor(Math.random() * plane.features.length);
            console.log(featurepick);

            // call the individual key:values of spottedcreature and send them to the typer, 
            // which writes the value in the text fields.
            await Typer.type("#planefragmentoutput",plane.name, 15);
            await Typer.type("#fragmentfeatureoutput",plane.features[featurepick], 15);
            this.isTyping = false;
        },
    };
</script>
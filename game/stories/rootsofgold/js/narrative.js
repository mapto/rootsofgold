var storyname = "rootsofgold"; 

var narrators = ["narrator", "badend", "goodend", "robot"]

// This is fallback content if story.csv cannot be loaded. This would be the case when running locally
// Notice that event ids/keys are strings, not numbers
var events = {
    '0': {
        "text": "This is a dummy placeholder for when the CSV cannot be loaded. Try loading the <a href='http://gamej.am'>official version</a>.",
        "image": "badend",
        "left": {
            "text": "see how to run a local web server",
            "id": '0',
            "values": ""
        },
        "right": {
            "text": "nothing to do",
            "id": '0',
            "values": ""
        }
    }
}

var completions = {
    "20": "se",
    "40": "e",
    "50": "ne",
    "60": "nw",
    "70": "n",
    "80": "w",
    "140": "e",
    "150": "ne",
    "160": "nw",
    "170": "w",
    "180": "n",
};

function load_story() {
    // console.log("Load story")
    var story = document.querySelector("#story").value
    // console.log(story)
    Papa.parse(story, {
        download: true,
        complete: (results) => {
            events = {}
            // console.log(results)
            let header = true
            for (let row of results.data) {
                // ignore csv header
                if (header) {
                    header = false
                    continue
                }
                // ignore section titles
                if (row[1][0] === "#") {
                    continue
                }
                // TODO add logic that handles left or right, based on different types:
                // end event leads to 0, satellite event doesn't affect subsequent states
                events[row[0]] = {
                    "id": row[0],
                    "text": row[1],
                    "image": row[2], // derived from role
                    "type": row[3],
                    "left" : {
                        "text": row[4],
                        "id": row[5],
                        "values": row[6]
                    },
                    "right": {
                        "text": row[7],
                        "id": row[8],
                        "values": row[9]
                    }
                }
            }

        }
    })    
}

function load_audio(card) {
    // console.log(card);
    var audio = document.querySelector("#current_card_text");
    audio.src = "stories/rootsofgold/audio/blocks/" + card.id + ".mp3"; 
    audio.load();

    audio = document.querySelector("#current_swipe_left");
    audio.src = "stories/rootsofgold/audio/blocks/" + card.id + "l.mp3";  
    audio.load();

    audio = document.querySelector("#current_swipe_right");
    audio.src = "stories/rootsofgold/audio/blocks/" + card.id + "r.mp3";  
    audio.load();
    audio = document.querySelector("#right_card_text");
    audio.src = "stories/rootsofgold/audio/blocks/" + card.right.id + ".mp3";
    audio.load();

    audio = document.querySelector("#left_card_text");
    audio.src = "stories/rootsofgold/audio/blocks/" + card.left.id + ".mp3";    
    audio.load();

}

/**
 * @param {*} card_id
 */
 function load_card(card_id) {
    // TODO Add the possibility that a satellite event appears before the next kernel (story advancing) event
    // console.log("Load card")
    // console.log(events)    
    var card = events[card_id]
    // console.log(card)

    if (card_id in completions) {
        document.querySelector("#hole-" + completions[card_id]).style.display = "inherit";
    }

    if (card.text.length > 250) {
        document.querySelector("#narrative").style.fontSize = "inherit"    
    } else if (card.text.length > 150) {
        document.querySelector("#narrative").style.fontSize = "large"    
    } else {
        document.querySelector("#narrative").style.fontSize = "x-large"    
    }

    if (!narrators.includes(card.image)) {
        card.text = "<q>" + card.text + "</q>"
    }

    document.querySelector("#narrative").innerHTML = "<p>" + card.text + "</p>"

    var card_img = document.querySelector("#current_swipe .card img")
    card_img.src = "stories/" + storyname + "/img/card/" + card.image + ".png"
    card_img.alt = card.image
    card_img.title = card.image

    // TODO end and satellite events won't have sequel cards defined
    // Instead end card would always restart the game and satellite card would keep the sequel unchanged
    document.querySelector("#current_swipe .card .action.left").innerText = card.left.text
    document.querySelector("#current_swipe .card .action.right").innerText = card.right.text
    document.querySelector("#left_card").value = card.left.id
    document.querySelector("#right_card").value = card.right.id
    document.querySelector("#left_keywords").value = card.left.values
    document.querySelector("#right_keywords").value = card.right.values

    load_audio(card);
    document.querySelector("#current_card_text").play();

    if (document.location.href.endsWith("debug")) {
        if (card.left.values)
            document.querySelector("#current_swipe .card .action.left").innerText += " [" + card.left.values + "]"
        if (card.right.values)
            document.querySelector("#current_swipe .card .action.right").innerText += " [" + card.right.values + "]"
        document.querySelector("#current").value = card_id
    }
}

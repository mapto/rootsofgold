function set_score(score, percent) {
    let s = score;
    let eltFull = document.querySelector("#balance #" + s.id + " .empty")
    eltFull.src = "stories/" + storyname + "/img/balance/" + s.id + "-empty." + icon_format;
    eltFull.alt = s.positive[0] + " vs " + s.negative[0]
    eltFull.title = eltFull.alt

    // let elt = document.querySelector("#" + s.id)
    let eltEmpty = document.querySelector("#balance #" + s.id + " .full")
    eltEmpty.src = "stories/" + storyname + "/img/balance/" + s.id + "-full." + icon_format;
    eltEmpty.alt = s.positive[0] + " vs " + s.negative[0]
    eltEmpty.title = eltEmpty.alt
    console.log(eltEmpty.title)
    eltEmpty.style.clipPath = "inset(" + (100 - percent) + "% 0 0 0)";
}

function init_score() {
    let templ = document.querySelector("#balance-template");
    scores.forEach(s => {
        const clone = templ.content.cloneNode(true);
        let root = clone.querySelector(".score");
        root.id = s.id;
        document.querySelector("#balance").appendChild(root);
        set_score(s, 10);
    })
}

function update_score(keywords) {
    // console.log(keywords)
    var tokens = keywords.split(/[, ;]+/)
    // console.log(tokens)
    for (var s of scores) {
        let indicator = document.querySelector("#balance #" + s.id + " .full")
        let field = indicator.style.clipPath.split('%')[0].substr(6); // parse inset
        let value = 100 - Number(field)
        for (var t of tokens) {
            if (s.positive.includes(t)) {
                value += 10
            } else if (s.negative.includes(t)) {
                value -= 10
            }
            indicator.style.clipPath = "inset(" + (100 - value) + "% 0 0 0)";
            if (value >= 100) {
                load_card(s.full_card)
            } else if (value <= 0) {
                load_card(s.empty_card)
            }
            // console.log(s.id)
            // console.log(value)
        }    
    }
}
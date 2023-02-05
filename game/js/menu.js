// TODO will handle menus and credits here

function switch_sound() {
    var sound = document.querySelector("#music")
    var btn = document.querySelector("#sound_switch")
    if (sound.muted || sound.paused) {
        sound.muted = false
        sound.play()
    } else {
        sound.muted = true
        sound.pause()
    }
    // Button indicates future state upon click
    if (sound.muted || sound.paused) {
        btn.src = "img/btn/sound.png"
    } else {
        btn.src = "img/btn/mute.png"
    }
}

function init_sound() {
    var btn = document.querySelector("#sound_switch")
    btn.onclick = switch_sound
}

function init_game() {
    // TODO sound needs to be proposed in menu and enabled if chosen by player
    init_sound()
    init_score()

    let music = document.querySelector("#music")
    document.querySelector("#music").volume = 0.1;
    document.querySelector("#music").muted = true;
    // console.log("Init")
    load_story()
}

function start_game() {
    // console.log(events)
    // After the story is downloaded, card is overwritten
    // TODO: Add nice placeholder to show before that, maybe loader
    var current = document.querySelector("#current").value

    // TODO: load sounds dynamically
    load_card(current);
    document.querySelector("#splash").style.display = "none";
}

window.onload = init_game

document.querySelector("#splash").onclick = start_game

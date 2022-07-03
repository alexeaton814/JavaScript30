window.addEventListener("keydown", function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    //console.log(audio);
    if (!audio) return; //stop the function from running all together
    audio.currentTime = 0; //rewind to the start
    audio.play();

    const key = this.document.querySelector(`.key[data-key="${e.keyCode}"]`);
    key.classList.add("playing");
})

window.addEventListener("transitionend",function(e) {
    const keys = this.document.querySelectorAll(".key");
    keys.forEach((key) => {
        if (e.propertyName !== "Transform"){
            key.classList.remove("playing");
        }
    })
})

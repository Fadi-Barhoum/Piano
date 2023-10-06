const pianoKeys = document.querySelectorAll(".pinao-keys .key");
const volumeSlider = document.querySelector(".volume-slider input");
const keysCheckbox = document.querySelector(".keys-checkbox input");

let allkeys=[],
audio = new Audio('tunes/a.wav');

const playTune = (key) => {
    audio.src = `tunes/${key}.wav`
    audio.play();
    const clickKey = document.querySelector(`[data-key="${key}"]`);
    clickKey.classList.add("active");
    setTimeout(()=>{
        clickKey.classList.remove("active");
    },150)
}

pianoKeys.forEach(key => {
    allkeys.push(key.dataset.key);
    key.addEventListener("click", ()=> playTune(key.dataset.key));
});

const pressKey = (e) => {
    if(allkeys.includes(e.key)) playTune(e.key);
}

const hideShowKeys = () => {
    pianoKeys.forEach(key => key.classList.toggle("hide"));
}


const handleVolume = (e) => {
    audio.volume = e.target.value;
}

volumeSlider.addEventListener("input", handleVolume);
keysCheckbox.addEventListener("input", hideShowKeys);
document.addEventListener("keydown", pressKey);
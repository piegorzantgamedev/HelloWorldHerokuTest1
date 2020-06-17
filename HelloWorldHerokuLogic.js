const playMusicButton = document.getElementById('playAudio');
const audioFile = document.getElementById('audioFile');
const buttonMessage = document.getElementById('buttonMessage');
buttonMessage.innerHTML = 'Play Some Music';
let isMusicPlayed = false;
const resetButton = document.getElementById('resetAudio');
resetButton.style.display = 'none';

playMusicButton.addEventListener('click', function () {
    if (isMusicPlayed) {
        audioFile.pause();
        isMusicPlayed = false;
        buttonMessage.innerHTML = 'Continue';
    } else {
        audioFile.play();
        isMusicPlayed = true;
        buttonMessage.innerHTML = 'Pause';
        resetButton.style.display = 'block';
    }
});

resetButton.addEventListener('click', function () {
    audioFile.pause();
    audioFile.currentTime = 0;
    isMusicPlayed = false;
    buttonMessage.innerHTML = 'Play Some Music';
    resetButton.style.display = 'none';
});
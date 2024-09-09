// Mendapatkan elemen HTML
const audioFileInput = document.getElementById('audioFile');
const playButton = document.getElementById('playAudio');
const audioPlayer = document.getElementById('audioPlayer');

// Event listener untuk ketika file audio diunggah
audioFileInput.addEventListener('change', function() {
    const file = audioFileInput.files[0];
    if (file) {
        const fileURL = URL.createObjectURL(file);
        audioPlayer.src = fileURL;
        playButton.disabled = false;  // Mengaktifkan tombol putar audio
        audioPlayer.style.display = 'block';  // Menampilkan kontrol audio
    }
});

// Event listener untuk tombol putar audio
playButton.addEventListener('click', function() {
    audioPlayer.play();
});

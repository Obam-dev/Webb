document.getElementById('playAudio').addEventListener('click', function() {
    var audio = document.getElementById('audioPlayer');
    audio.play();  // Memainkan audio

    // Setelah audio selesai dimainkan, teks ditampilkan secara berurutan dengan delay
    setTimeout(function() {
        document.getElementById('text1').style.display = 'block';
    }, 1000); // Tampilkan teks 1 setelah 1 detik

    setTimeout(function() {
        document.getElementById('text2').style.display = 'block';
    }, 5000); // Tampilkan teks 2 setelah 5 detik

    setTimeout(function() {
        document.getElementById('text3').style.display = 'block';
    }, 10000); // Tampilkan teks 3 setelah 10 detik
});

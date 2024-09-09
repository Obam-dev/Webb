document.getElementById('playAudio').addEventListener('click', function() {
    var audio = document.getElementById('audioPlayer');
    
    // Pastikan audio dimuat sebelum diputar
    audio.load();  
    audio.play();  // Memainkan audio

    // Setelah audio mulai diputar, tampilkan teks secara berurutan dengan delay
    setTimeout(function() {
        document.getElementById('text1').style.display = 'block';
    }, 1000); // Tampilkan teks 1 setelah 1 detik

    setTimeout(function() {
        document.getElementById('text2').style.display = 'block';
    }, 20000); // Tampilkan teks 2 setelah 20 detik

    setTimeout(function() {
        document.getElementById('text3').style.display = 'block';
    }, 25000); // Tampilkan teks 3 setelah 25 detik
});

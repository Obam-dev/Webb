document.getElementById('dataDiriForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Ambil data dari form
    var nama = document.getElementById('nama').value;
    var kelas = document.getElementById('kelas').value;
    var umur = document.getElementById('umur').value;

    // Nomor WhatsApp tujuan
    var nomorWhatsApp = '6285757572590';

    // Pesan yang akan dikirim
    var pesan = `Halo, ini data diri saya:%0A%0ANama: ${nama}%0AKelas: ${kelas}%0AUmur: ${umur}`;

    // Buat URL WhatsApp
    var url = `https://api.whatsapp.com/send?phone=${nomorWhatsApp}&text=${pesan}`;

    // Redirect ke WhatsApp
    window.open(url, '_blank');
});

document.getElementById('whatsappForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Mencegah form reload halaman
    
    var phone = document.getElementById('phone').value;
    var message = document.getElementById('message').value;
    
    // Mengecek apakah nomor telepon dimulai dengan 62
    if (phone.startsWith('62')) {
        var whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');  // Membuka WhatsApp di tab baru
    } else {
        alert('Nomor WhatsApp harus dalam format internasional dan dimulai dengan 62.');
    }
});

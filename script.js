document.getElementById('whatsappForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Mencegah form reload halaman
    
    var phone = document.getElementById('phone').value.trim();
    var message = document.getElementById('message').value.trim();
    
    // Validasi nomor, cek apakah dimulai dengan 62 dan memiliki panjang minimal 10 karakter
    if (phone.startsWith('62') && phone.length >= 10) {
        // Buat URL WhatsApp
        var whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
        
        // Buka WhatsApp di tab baru
        window.open(whatsappUrl, '_blank');
    } else {
        alert('Nomor WhatsApp harus dalam format internasional dan dimulai dengan 62.');
    }
});

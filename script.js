document.getElementById('whatsappForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const phoneNumber = document.getElementById('phoneNumber').value;
    const message = document.getElementById('message').value;
    
    if (phoneNumber && message) {
        const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    } else {
        alert('Harap masukkan nomor WhatsApp dan pesan.');
    }
});
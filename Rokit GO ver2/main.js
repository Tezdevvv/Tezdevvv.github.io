// fungsi nav

function showDiv(divId, selectedButton) {
    // Ambil semua elemen dengan kelas "content"
    const allDivs = document.querySelectorAll('.contentNone');

    // Sembunyikan semua div
    allDivs.forEach(div => {
        div.classList.remove('contentActive'); // Hapus kelas "active"
    });

    // Tampilkan div yang sesuai tombol yang diklik
    const targetDiv = document.getElementById(divId);
    if (targetDiv) {
        targetDiv.classList.add('contentActive'); // Tambahkan kelas "active"
    }

    const allButtons = document.querySelectorAll('.btnNav');
    allButtons.forEach(button => {
        button.classList.remove('btnNavActive');
    });

    // Tambahkan kelas "btnActive" pada tombol yang dipilih
    selectedButton.classList.add('btnNavActive');
}

// fungsi education

function toggleCom(selectedButton, selectedImg, selectedTxt) {
    // Pilih semua tombol
    const buttons = document.querySelectorAll('.itemComposition');

    // Hapus kelas aktif dari semua tombol
    buttons.forEach(button => {
        button.classList.remove('icActive');
    });

    // Tambahkan kelas aktif hanya pada tombol yang diklik
    selectedButton.classList.add('icActive');

    const allImg = document.querySelectorAll('.imgNone');

    // Sembunyikan semua div
    allImg.forEach(img => {
        img.classList.remove('imgActive'); // Hapus kelas "active"
    });

    // Tampilkan div yang sesuai tombol yang diklik
    const targetImg = document.getElementById(selectedImg);
    const targetTxt = document.getElementById(selectedTxt);
    if (targetImg) {
        targetImg.classList.add('imgActive'); // Tambahkan kelas "active"
    }
    if (targetTxt) {
        targetTxt.classList.add('imgActive'); // Tambahkan kelas "active"
    }
}

function togglePage(showPageId, hidePageId) {
    // Dapatkan elemen halaman yang akan ditampilkan dan disembunyikan
    const showPage = document.getElementById(showPageId);
    const hidePage = document.getElementById(hidePageId);

    // Tampilkan halaman yang diminta
    if (showPage) {
        showPage.classList.add('active');
    }

    // Sembunyikan halaman lain
    if (hidePage) {
        hidePage.classList.remove('active');
    }
}

document.addEventListener('scroll', () => {
    const targetPixel = 150; // Pixel target scroll
    const scrollPosition = window.scrollY; // Posisi scroll saat ini
    const navbar = document.getElementById('navbar'); // Pastikan id elemen adalah 'navbar'
    const btnNav = document.querySelectorAll('btnNav');
    // const 

    if (scrollPosition >= targetPixel) {
        // Ubah warna background navbar
        if (navbar) navbar.style.backgroundColor = 'rgba(32,36,40,255)';
        if (btnNav) navbar.style.color = 'white';
    } else {
        // Kembalikan warna background menjadi transparan
        if (navbar) navbar.style.backgroundColor = 'transparent';
        if (btnNav) navbar.style.color = 'black';
    }
});


function sendToWhatsApp() {
    // Ambil nilai dari input form
    const name = document.getElementById('name').value.trim();
    const purpose = document.getElementById('purpose').value.trim();
    const contact = document.getElementById('itemContact').value;
    console.log("Selected contact:", contact); // Debugging untuk nilai dropdown
    // Periksa apakah semua field telah diisi
    if (!name) {
        alert("Mohon masukkan nama Anda.");
        return;
    }
    if (!purpose) {
        alert("Mohon masukkan keperluan Anda.");
        return;
    }
    if (!contact) {
        alert("Mohon pilih kontak tujuan.");
        return;
    }

    // Format pesan
    var message = `Hallo saya ${name}. ${purpose}`;

    // Buat URL WhatsApp
    const waURL = `https://wa.me/${contact}?text=${message}`;

    // Buka URL WhatsApp di tab baru
    window.open(waURL, '_blank');
}



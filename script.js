// Simulasi data pengguna
let users = [];

// Fungsi untuk beralih antar halaman
function showPage(pageId) {
    document.querySelectorAll('section').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(pageId).style.display = 'block';
}

// Menangani formulir login
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Simulasi pengecekan login
    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
        alert('Login berhasil');
        showPage('dashboard');
    } else {
        alert('Email atau Password salah');
    }
});

// Menangani formulir pendaftaran
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    // Simulasi pendaftaran pengguna
    users.push({ email, password });
    alert('Pendaftaran berhasil! Silakan login.');
    showPage('login');
});

// Tombol untuk berpindah antara halaman login dan daftar
document.getElementById('goToSignup').addEventListener('click', function() {
    showPage('signup');
});
document.getElementById('goToLogin').addEventListener('click', function() {
    showPage('login');
});

// Halaman dashboard
document.getElementById('goToMap').addEventListener('click', function() {
    showPage('mapSection');
});

// Halaman Profil
document.getElementById('goToProfile').addEventListener('click', function() {
    const email = document.getElementById('loginEmail').value;
    document.getElementById('profileEmail').textContent = `Email: ${email}`;
    showPage('profile');
});

// Logout
document.getElementById('logout').addEventListener('click', function() {
    showPage('login');
});

// Peta simulasi (misalnya Google Maps API, tapi disini kita hanya menampilkan gambar atau area kosong)
document.getElementById('map').innerHTML = "<p>Ini adalah peta simulasi.</p>";
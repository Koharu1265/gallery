function tampil(id) {
    document.getElementById("gallery").style.display =
        id === "gallery" ? "block" : "none";

    document.getElementById("pendaftaran").style.display =
        id === "pendaftaran" ? "block" : "none";

    window.scrollTo(0, 0);
}

document.getElementById("formDaftar").addEventListener("submit", function(event) {
    event.preventDefault();

    // Konfirmasi sebelum data ditampilkan
    if (confirm("Apakah Anda sudah yakin untuk menyimpan?")) {
        const data = new FormData(this);
        const hasil = document.getElementById("hasil");

        // Menampilkan hasil pendaftaran
        hasil.innerHTML = `
            <h2>Hasil Pendaftaran</h2>
            <p><b>NIK:</b> ${data.get("nik")}</p>
            <p><b>Nama Lengkap:</b> ${data.get("nama")}</p>
            <p><b>Jenis Kelamin:</b> ${data.get("gender")}</p>
            <p><b>Nomor HP:</b> ${data.get("hp")}</p>
            <p><b>Alamat:</b> ${data.get("alamat")}</p>
            <p><b>Bahasa Pemrograman:</b> ${data.get("bahasa")}</p>
        `;
    }
});
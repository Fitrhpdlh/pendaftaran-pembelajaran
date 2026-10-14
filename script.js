
const form = document.getElementById("formPendaftaran");
const hasil = document.getElementById("hasilPendaftaran");
const detail = document.getElementById("detailPendaftaran");
const btnEdit = document.getElementById("btnEdit");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const yakin = confirm(
        "Apakah Anda sudah yakin untuk menyimpan?"
    );

    if (yakin) {
        const data = new FormData(form);

        const daftarData = [
            ["NIK", data.get("nik")],
            ["Nama Lengkap", data.get("nama")],
            ["Jenis Kelamin", data.get("jenisKelamin")],
            ["Nomor HP", data.get("nohp")],
            ["Alamat", data.get("alamat")],
            ["Bahasa Pemrograman", data.get("bahasa")]
        ];

        detail.replaceChildren();

        daftarData.forEach(function (item) {
            const baris = document.createElement("div");
            baris.className = "detail-row";

            const label = document.createElement("span");
            label.className = "detail-label";
            label.textContent = item[0];

            const nilai = document.createElement("span");
            nilai.className = "detail-value";
            nilai.textContent = item[1];

            baris.appendChild(label);
            baris.appendChild(nilai);
            detail.appendChild(baris);
        });

        form.hidden = true;
        hasil.hidden = false;

        hasil.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
});

btnEdit.addEventListener("click", function () {
    hasil.hidden = true;
    form.hidden = false;

    form.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});
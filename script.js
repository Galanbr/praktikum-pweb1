let hasil= document.getElementById('hasil');
hasil.addEventListener('mouseover', tampil);
hasil.addEventListener('mouseout', hilang);

let tombol = document.getElementById('tombol');
tombol.addEventListener('click', ubahNilai);

function hitung (a, b, c) {
    return a + b - c;
}

function tampil() {
    let a = parseInt(document.getElementById('satu').innerHTML);
    let b = parseInt(document.getElementById('dua').innerHTML);
    let c = parseInt(document.getElementById('tiga').innerHTML);
    document.getElementById('hasil').innerHTML = hitung(a, b, c);
}

function hilang() {
    document.getElementById('hasil').innerHTML = " ";
}

function ubahNilai() {
    let perintah1 = prompt("Tambahkan nilai 'A'");
    document.getElementById('satu').innerHTML = perintah1;
    
    let perintah2 = prompt("Tambahkan nilai 'B'");
    document.getElementById('dua').innerHTML = perintah2;

    let perintah3 = prompt("Tambahkan nilai 'C'");
    document.getElementById('tiga').innerHTML = perintah3;

    document.getElementById('gambar').src = 
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png";
}

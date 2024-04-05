# Praktikum Pemrograman Web 1
## _Challenge JS_

Program ini merupakan aplikasi web sederhana yang menunjukkan operasi aritmatika dan pengubahan gambar dengan menggunakan :

- HTML
- CSS
- JavaScript

## Fitur
- Melakukan operasi aritmatika (penjumlahan dan pengurangan) pada tiga variabel (A, B, dan C) dan menampilkan hasil secara dinamis di halaman web.
- Pengguna dapat memasukkan nilai baru untuk variabel A, B, dan C dengan tombol Ubah Nilai. 
- Setelah mengubah nilai dengan tombol "Ubah Nilai", program menghitung kembali hasilnya dan memicu perubahan pada gambar yang ditampilkan.

## HTML (index.html)
Di dalam tag <div> dengan class container berisikan  Heading, tabel, gambar dan tombol
```sh
<div class="container">
    <h1> JavaScript Arithmetic</h1>
    <table cellpadding="10">
        <tr>
            <th>Variabel</th>
            <th>Nilai</th>
            <th rowspan="5"><img id="gambar" 
                src="https://www.techfor.id/wp-content/uploads/2019/12/html.png" alt=""></th>
        </tr>
        <tr>
            <td>a</td>
            <td id="satu">5</td>
        </tr>
        <tr>
            <td>b</td>
            <td id="dua">2</td>
        </tr>
        <tr>
            <td>c</td>
            <td id="tiga">1</td>
        </tr>
        <tr>
            <td >Hasil</td>
            <td id="hasil"></td>
        </tr>
    </table>
    <button id="tombol">Ubah nilai</button>
</div>
```
Tampilan output jika style.css masih kosong

![HTML](https://github.com/Galanbr/praktikum-pweb1/assets/113656343/e1f9825a-2091-4efd-a92a-0c04af30c3df)

## CSS (style.css)
Di dalam file style.css terdapat styling yang didefinisikan untuk membuat tampilan tabel dan elemen-elemen HTML lainnya.
```sh
 table, tr, th, td {
            border: solid 1px grey;
            border-collapse: collapse;
        } 

        th, td { 
            padding: 10px;
        }

        .container {
            font-family: Arial, Helvetica, sans-serif;
            align-items: center;
            justify-content: center;
            display: flex;
            flex-direction: column;
        }

        tr:nth-child(even),
        tr:first-child {
            background-color: rgba(128, 128, 128, 0.329);
        }

        tr:hover {
            background-color: rgba(128, 128, 128, 0.8);
        }

        button {
            margin-top: 30px;        
        }

        img {
            width: 200px;
            height: 150px;
        }
```
Tampilan Output setelah melakukan styling pada index.html di style.css

![CSS](https://github.com/Galanbr/praktikum-pweb1/assets/113656343/be888e90-0342-472c-a7a6-37a5257c7109)


## JavaScript (script.js)

Terdapat _onmouseover_ dan _onmouseleave_ yang memanggil fungsi _tampilHasil()_ dan _tampilKosong()_ saat pengguna mengarahkan kursor ke baris hasil atau mengarahkan kursor keluar dari baris hasil.
```sh
let hasil= document.getElementById('hasil');
hasil.addEventListener('mouseover', tampil);
hasil.addEventListener('mouseout', hilang);

let tombol = document.getElementById('tombol');
tombol.addEventListener('click', ubahNilai);
```
Fungsi ini memiliki parameter (a, b, c) yang akan mengembalikan hasil dari operasi aritmatika (a + b - c).
```sh
function hitung (a, b, c) {
    return a + b - c;
}
```
Fungsi ini digunakan untuk menampilkan hasil perhitungan aritmatika pada tabel ketika pengguna mengarahkan kursor ke baris hasil.
```sh
function tampil() {
    let a = parseInt(document.getElementById('satu').innerHTML);
    let b = parseInt(document.getElementById('dua').innerHTML);
    let c = parseInt(document.getElementById('tiga').innerHTML);
    document.getElementById('hasil').innerHTML = hitung(a, b, c);
}
```
Fungsi ini digunakan untuk menghapus hasil perhitungan dari tabel ketika pengguna mengarahkan kursor keluar dari baris hasil.
```sh
function hilang() {
    document.getElementById('hasil').innerHTML = " ";
}
```
Fungsi ini dipanggil saat tombol "Ubah Nilai" ditekan yang kemudian menampilkan popup prompt untuk menambahkan nilai a, b, dan c, lalu memperbarui tabel dengan nilai-nilai yang dimasukkan. Setelah nilai terkahir dimasukan gambar yang ditampilkan akan berubah. 
```sh
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
```
Tampilan output setelah file script.js ditambahkan

![JS](https://github.com/Galanbr/praktikum-pweb1/assets/113656343/3ab59bc0-fae1-47b9-af2a-9d93413b7b2a)

![JS1](https://github.com/Galanbr/praktikum-pweb1/assets/113656343/d361d984-018f-4ae2-a438-4109c26fdbfa)

![JS2](https://github.com/Galanbr/praktikum-pweb1/assets/113656343/03acbe0b-ccc8-49b7-9990-78ec7b2a1e82)



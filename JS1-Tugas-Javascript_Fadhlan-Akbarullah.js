
// IF
    var usiaAnda = prompt("usiaAnda", 0);

        if (usiaAnda < 20){
            console.log("Anda Masih muda yaa");
        }

// IF ELSE
        var email = prompt("Email");

        if (email == "fadhlanakbarullah@gmail.com"){
            console.log("Selamat datang mas Fad :)");
        } else{
            console.log("Sayangnya Anda Bukan Mas Fad :(");
        }

// IF NESTED
        var username = prompt("Username : ");
        var password = prompt("Password : ");

        if (username == "dilan123"){
            if(password == "dilandamusibah123"){
                console.log("Yo Halo Mas Dilan :)");
            } else {
                console.log("Anda salah memasukan password, coba ulang maseh/mbak'e :)");
            }
        }else{
            console.log ("TETOT!! username tidak terdaftar");
        }

// SWITCH CASE
        var jawab = prompt ("Silahkan masukan angka yang cocok dengan undian anda untuk mengetahui nama partner anda :) (Angka undian dari 1-5 yaa)");
        var nama = "";

        switch(jawab){
            case "1":
                nama = "Fadhlan Akbarullah";
                break;
            case "2":
                nama = "Satria Wijaya";
                break;
            case "3":
                nama = "Jani Alawi";
                break;
            case "4":
                nama = "Yuyun Yuni Kasih";
                break;  
            case "5":
                nama = "Kiki Putra Gumilang";
                break;
            default:
                console.log("TETOT!! tidak ada angka 6 dst kawan :(");
        }

        if(nama === ""){
            console.log("Coba ulang kembali inputan anda... angka 1 sampai 5 yaa ;)");
        } else {
            console.log("Yeay!! " + nama + " adalah partner anda mulai dari sekarang :)");
        }

// LOOP FOR STATEMENT
        var hewan = ["kucing", "Burung", "Ikan", "Kambing"];
        
        for(i in hewan){
            console.log(i +". "+ hewan [i]);
        }

// LOOP WHILE
        var ulangi = confirm("coba klik tombol ok dibawah");
        var counter = 0;

        while (ulangi){
        var jawab = confirm ("coba sekali lagi klik tombol ok di bawah")
        counter ++;
        if(jawab == false){
        ulangi = false;
        }
        }
        console.log("anda sudah mengklik tombol ok sebanyak " + counter +" kali");

// LOOP DO WHILE
        var ulangi = confirm("coba klik tombol ok dibawah");
         var counter = 0;

         do { counter ++;
             ulangi = confirm ("coba sekali lagi klik tombol ok di bawah")
             counter ++;
         }while (ulangi)

        console.log("anda sudah mengklik tombol ok sebanyak " + counter +" kali");

// FUNCTION
    <div class="button">
        <button type="submit"onclick="klik()">Klik disini kawan</button>
    </div>
        function klik() {
        var data= prompt("Seberapa banyak data yang ingin anda ulang??");

        console.log("Saya Ganteng!".repeat(data))
        }
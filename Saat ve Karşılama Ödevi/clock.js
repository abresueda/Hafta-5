// Kullanıcı ismini almak ve ekranda göstermek için bir fonksiyon
  //window.onload, sayfa tamamen yüklendiğinde çalıştırılacak bir işlev tanımlar.
  window.onload = function() {
    var name = prompt("Lütfen adınızı giriniz:");
    if(name) {
      document.getElementById("myName").textContent = name;
    } else {
      document.getElementById("myName").textContent = "Ziyaretçi";
    }
  }

// Saati ve günü göstermek için bir fonksiyon
function showTime() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  // Saat, dakika ve saniyeleri iki haneli göstermek için. Tek haneli ise başına bir 0 eklenir.
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  let time = hours + ':' + minutes + ':' + seconds;

  // Günü almak için
  let days = [ "Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
  let dayName = days[date.getDay()];

  // Saati ve günü göster
  document.getElementById('myClock').textContent = time + " " + dayName;

  // Her saniye saati güncelle
  setTimeout(showTime, 1000);
}

//Sayfa yüklendiğinde saati göstermeye başla
showTime();
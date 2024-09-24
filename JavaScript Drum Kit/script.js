const buttons = document.querySelectorAll(".drum");

// Her buton için döngü başlatılır.
buttons.forEach(button => {
    button.addEventListener("click", function() {
        const key = this.getAttribute("data-key");
        const soundFile = this.getAttribute("data-sound"); //Ses dosyasını alıyoruz.
        playSound(soundFile);
        buttonAnimation(this.getAttribute("data-key"));
    });
});

//Klayve tuşlarına basıldığında çalışacak olay
document.addEventListener("keydown", function(event) {
    const key = event.key.toUpperCase(); //Basılan tuşu büyük harfe çeviriyoruz.
    const button = document.querySelector(`button[data-key="${key}"]`); //Basılan tuşa karşılık gelen butonu seçer.

    if(button) {
        const soundFile = button.getAttribute("data-sound");
        playSound(soundFile);
        buttonAnimation(key);
    }
});

// Ses çalmak için tanımlanmış bir fonksiyon.
function playSound(soundFile) {
    const audio = new Audio(`sounds/` + soundFile); //Ses dosyasının yolunu belirtiyoruz.
    audio.play();
}

//Butona basıldığında animasyon ekleme fonksiyonu.
function buttonAnimation(key) {
    const button = document.querySelector(`button[data-key="${key}"]`);

    if(button) {
        button.classList.add("pressed");
        setTimeout(() => {
            button.classList.remove("pressed");
        }, 100);
    }
}
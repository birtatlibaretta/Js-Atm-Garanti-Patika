// Bakiye değişkenini başlat
let bakiye = 0;

// Mevcut bakiyeyi gösteren fonksiyon
function displayBalance() {
    console.log("Bakiye: $" + bakiye.toFixed(2));
}

// Para yatırma işlemlerini yöneten fonksiyon
function deposit(miktar) {
    if (!isNaN(miktar) && miktar > 0) {
        bakiye += miktar;
        displayBalance();
    } else {
        console.log("Lütfen geçerli ve pozitif bir miktar girin.");
    }
}

// Para çekme işlemlerini yöneten fonksiyon
function withdraw(miktar) {
    if (!isNaN(miktar) && miktar > 0) {
        if (miktar <= bakiye) {
            bakiye -= miktar;
            displayBalance();
        } else {
            console.log("Yetersiz bakiye. Lütfen daha küçük bir miktar girin.");
        }
    } else {
        console.log("Lütfen geçerli ve pozitif bir miktar girin.");
    }
}

// Başlangıçta bakiyeyi göster
displayBalance();
deposit(100); // Örnek olarak 100 birim para yatırıyoruz
withdraw(50); // Örnek olarak 50 birim para çekiyoruz

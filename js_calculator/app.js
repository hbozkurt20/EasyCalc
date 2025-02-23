const display = document.getElementById("display");

function appendToDisplay(input) {

    display.value += input;
    if(display.value.toString().length >= 15) { // Karşılaştırma için === kullanmalısın
        let strNum = display.value.toString().slice(0,15) // ilk beş basamağı al
        display.value = strNum;
        showAlert("Hatalı Hamle!!");
    }
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value)
    } catch (error) {
        
    }
    if(display.value.toString().length >= 15) { // Karşılaştırma için === kullanmalısın
       showAlert("Hatalı Hamle!!")
        let strNum = display.value.toString().slice(0,15) // ilk beş basamağı al
        console.log(strNum);
        display.value = strNum;
    }

    
}
function onlyClearDisplay() {
    display.value = display.value.slice(0, -1);
}

function showAlert(text) {
    const popup = document.createElement("div");
    popup.textContent = text; // Metni buraya ekliyoruz
    popup.classList.add("popup"); // Popup için stil sınıfını ekliyoruz
    popup.style.display="block"
    let body = document.getElementsByTagName("body")[0]; // body elementini alıyoruz

    

    body.appendChild(popup); // Popup'ı body'ye ekliyoruz

    setTimeout(() => {
        popup.remove(); // Popup'ı sil
    }, 3000); // 3000 milisaniye = 3 saniye

}

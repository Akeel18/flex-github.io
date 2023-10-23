// script.js

// Function to generate a QR code
function generateQRCode(text) {
    var qrcode = new QRCode(document.getElementById("qrcode"), {
        text: text,
        width: 128,
        height: 128
    });
}


// Usage example
function g(){
var txtuser= document.getElementById("name").value;
var txtemail = document.getElementById("email").value;
var selectElement = document.getElementById("mySelect");
var selectedValue = selectElement.value;
var selectedText = selectElement.options[selectElement.selectedIndex].text;
var textToEncode =`The user name and email are ${txtuser} + " "+${txtemail}+" "+${selectedText}`;

generateQRCode(textToEncode);

}

// script.js

// ... (QR code generation and other code)

// Function to capture the card as an image and trigger download
document.getElementById("downloadButton").addEventListener("click", function () {
    html2canvas(document.querySelector(".qrcode-card")).then(function(canvas) {
        var link = document.createElement("a");
        link.href = canvas.toDataURL("image/png");
        link.download = "qrcode_card.png";
        link.click();
    });
});


function updatePrice() {
    let s = document.getElementsByName("prodType");
    let select = s[0];
    let price = 0;
    let prices = getPrices();
    let priceIndex = parseInt(select.value) - 1;
    if (priceIndex >= 0) {
        price = prices.prodTypes[priceIndex];
    }

    let radioDiv = document.getElementById("radios");
    radioDiv.style.display = (select.value == "2" ? "block" : "none");

    let radios = document.getElementsByName("prodOptions");
    radios.forEach(function(radio) {
        if (radio.checked) {
            let optionPrice = prices.prodOptions[radio.value];
            if (optionPrice !== undefined) {
                price += optionPrice;
            }
        }
    });

    let checkDiv = document.getElementById("checkboxes");
    checkDiv.style.display = (select.value == "3" ? "block" : "none");

    let checkboxes = document.querySelectorAll("#checkboxes input");
    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            let propPrice = prices.prodProperties[checkbox.name];
            if (propPrice !== undefined) {
                price += propPrice;
            }
        }
    });

    let number = Number(document.getElementById("Toys_Count").value);
    let num = document.getElementById("Toys_Count");
    num.addEventListener('input',function (){updatePrice();});
    let prodPrice = document.getElementById("cost");
    prodPrice.innerHTML = price * number + " рублей";
}

function getPrices() {
    return {
        prodTypes: [300, 150, 250],
        prodOptions: {
            var1: 20,
            var2: 10,
            var3: 30,
        },
        prodProperties: {
            chb1: 150,
            chb2: 100,
        }
    };
}

window.addEventListener('DOMContentLoaded', function (event) {
    let radioDiv = document.getElementById("radios");
    radioDiv.style.display = "none";

    let s = document.getElementsByName("prodType");
    let select = s[0];
    select.addEventListener("input", function(event) {
        let target = event.target;
        console.log(target.value);
        updatePrice();
    });

    let radios = document.getElementsByName("prodOptions");
    radios.forEach(function(radio) {
        radio.addEventListener("change", function(event) {
            let r = event.target;
            console.log(r.value);
            updatePrice();
        });
    });

    let checkboxes = document.querySelectorAll("#checkboxes input");
    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener("change", function(event) {
            let c = event.target;
            console.log(c.name);
            console.log(c.value);
            updatePrice();
        });
    });

    updatePrice();
});

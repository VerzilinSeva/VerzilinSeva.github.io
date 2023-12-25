/*global document*/
/*global window*/

document.addEventListener('DOMContentLoaded', function (event) {
    let calculateButton = document.getElementById('calculateButton');
    calculateButton.addEventListener('click', function (event) {
        event.preventDefault();
        let quantityInput = document.getElementById('quantity');
        let productSelect = document.getElementById('product');
        let result = document.getElementById('result');

        let str1 = quantityInput.value;
        let str2 = productSelect.value;
        if (str1.match(/^\d+$/) === null || str2.match(/^\d+$/) === null) {
            result.innerHTML = "Введите, пожалуйста, количество товара!";
        } else {
            let ans = parseInt(quantityInput.value) * parseInt(productSelect.value); 
            result.innerHTML = "Стоимость заказа: ₽" + ans;
        }
    });
});

window.addEventListener("DOMContentLoaded", function () {
     let radioButtonsDiv = document.getElementsByClassName("opt-group");
     radioButtonsDiv[0].style.display = "none";
    
     let checkBoxesDiv = document.getElementsByClassName("check-group");
     checkBoxesDiv[0].style.display = "none";

     let typeInput = document.getElementsByName("product2");
     let s = typeInput[0];
     s.addEventListener("change", function () {
         updateResults();
     });

     let quantityInput = document.getElementById("quantity2");
     quantityInput.addEventListener("input", function () {
         updateResults();
     });

     let radioButtons = document.getElementsByName("productOptions");
     radioButtons.forEach(function (radio) {
         radio.addEventListener("change", function () {
             updateResults();
         });
     });

     let checkBoxes = document.querySelectorAll(".check-group input");
     checkBoxes.forEach(function (check) {
         check.addEventListener("change", function () {
             updateResults();
         });
     });

     updateResults();
 });

 function updateResults() {
     let typeInput = document.getElementById("product2");
     let prices = getPrices();
     let ans = 0;
     ans += prices.productTypes[parseInt(typeInput.value) - 1];

     let radioButtonsDiv = document.getElementsByClassName("opt-group");
     let checkBoxesDiv = document.getElementsByClassName("check-group");
     if (typeInput.value === "2") {
         radioButtonsDiv[0].style.display = "block";
     } 
     else {
         radioButtonsDiv[0].style.display = "none";
     }

     if (typeInput.value === "3") {
         checkBoxesDiv[0].style.display = "block";
     } 
     else {
         checkBoxesDiv[0].style.display = "none";
     }
     
   let radioButtons = document.getElementsByName("productOptions");
     radioButtons.forEach(function (radios) {
         if (radios.checked && typeInput.value === "2") {
             let addedPrice = prices.productOptions[radios.value];
             if (addedPrice !== undefined) {
                 ans += addedPrice;
             }
         }
     });

     let checkBoxes = document.querySelectorAll(".check-group input");
     checkBoxes.forEach(function (check) {
         if (check.checked && typeInput.value === "3") {
             ans += prices.productProperties[check.value];
         }
     });

     let quantityInput = document.getElementById("quantity2");
     ans *= quantityInput.value;

     let str = ans.toString();
     let resultDiv = document.getElementById("result2");
     if (str.match(/^\d+$/) !== null) {
         resultDiv.innerHTML = "Итоговая стоимость: " + ans + "₽";
     } 
     else {
         resultDiv.innerHTML = "Ошибка!";
     }
 }

 function getPrices() {
     return {
         productOptions: {
             option1: 19,
             option2: 49,
             option3: 99
         },
         productProperties: {
             property1: 14,
             property2: 29
         },
         productTypes: [99, 149, 249]
     };
 }

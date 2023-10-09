window.addEventListener("DOMContentLoaded", function (event){});

function calculate() {
    let number = Number(document.getElementById("Toys_Count").value);
    let price = Number(document.getElementById("Toys_Price").value);


    let exp = new RegExp(/^[0-9]+$/i);
    if (
        !(
            exp.test(number) && exp.test(price)
        )
    ) {
        alert("You should input positive integers");
    } else if (number == "") {
        alert("You are not input number of toys");
    } else if (price == "") {
        alert("You are not input price of toys");
    } else {
        const cost = number * price;
        document.getElementById("cost").innerHTML = "Final price: " + cost;
    }
}

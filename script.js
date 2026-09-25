// Function called when the Calculate button is clicked
function calculate() {

    // Get the values entered by the user
    const price = parseFloat(document.getElementById("price").value);
    const quantity = parseFloat(document.getElementById("quantity").value);

    // Check if the user entered valid numbers
    if (isNaN(price) || isNaN(quantity)) {
        alert("Please enter a valid unit price and quantity.");
        return;
    } 

    if (price <= 0 || quantity <=0){
        alert("Please enter a value greater than zero.");
        return;
    }

    // Calculate the subtotal
    const subtotal = price * quantity;

    // Calculate tax (5%)
    const tax = subtotal * 0.05;

    // Calculate the total amount payable
    const total = subtotal + tax;

    // Display the subtotal
    document.querySelector("#subtotal span:last-child").textContent =
        "Ksh " + subtotal.toFixed(2);

    // Display the tax
    document.querySelector("#tax span:last-child").textContent =
        "Ksh " + tax.toFixed(2);

    // Display the total
    document.querySelector("#total span:last-child").textContent =
        "Ksh " + total.toFixed(2);
}s
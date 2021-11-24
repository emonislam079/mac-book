// default price par
function defaultcost(Button, input) {
    document.getElementById(Button).addEventListener('click', function () {
        const Cost = document.getElementById(input);
        Cost.innerText = 00;
    });

};

// Default Price calling

defaultcost('8Gb-btn', 'extra-memory');
defaultcost('256Gb-btn', 'extra-storage');
defaultcost('free-delivery-btn', 'delivery-cost');

// extraCost & Delivery field 

function extraCost(Button, inputfield, price) {

    document.getElementById(Button).addEventListener('click', function () {

        const memoryCost = document.getElementById(inputfield);
        memoryCost.innerText = price;
    });
};
extraCost('16Gb-btn', 'extra-memory', 180);
extraCost('512Gb-btn', 'extra-storage', 100);
extraCost('1Tb-btn', 'extra-storage', 180);
extraCost('cost-delivery-btn', 'delivery-cost', 20);

// Total Price part 

document.getElementById('Buttons').addEventListener('click', function (event) {
    const bestPriceInput = document.getElementById('fixed');
    const bestPriceText = bestPriceInput.innerText;
    const bestPrice = parseInt(bestPriceText);

    const memoryCostInput = document.getElementById('extra-memory');
    const memoryCost = parseInt(memoryCostInput.innerText);


    const storageCostInput = document.getElementById('extra-storage');
    const storageCost = parseInt(storageCostInput.innerText);

    const deliveryCostInput = document.getElementById('delivery-cost');
    const deliveryCost = parseInt(deliveryCostInput.innerText);


    const grandTotal = bestPrice + memoryCost + storageCost + deliveryCost;

    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = grandTotal;


    let finalTotal = document.getElementById('final');
    finalTotal.innerText = grandTotal;
})
// Memory cost update function
function updateMemoryCost(memoryGb) {
    if (memoryGb == true) {
        const firstMemoryCost = 0;
        document.getElementById('extra-momory-cost').innerText = firstMemoryCost;
    }
    else if (memoryGb == false) {
        const secondMemoryCost = 180;
        document.getElementById('extra-momory-cost').innerText = secondMemoryCost;
    }
    calculateTotalPrice();
}
document.getElementById('8gb').addEventListener('click', function () {
    updateMemoryCost(true);
});
document.getElementById('16gb').addEventListener('click', function () {
    updateMemoryCost(false);
});

// Storage Cost Update Function
function updateStorageCost(storageCount) {
    if (storageCount == '256') {
        const firstStorageCost = 0;
        document.getElementById('extra-storage-cost').innerText = firstStorageCost;
    }
    else if (storageCount == '512') {
        const secondStorageCost = 100;
        document.getElementById('extra-storage-cost').innerText = secondStorageCost;
    }
    else if (storageCount == '1') {
        const thirdStorageCost = 180;
        document.getElementById('extra-storage-cost').innerText = thirdStorageCost;
    }
    calculateTotalPrice();
}
document.getElementById('256gb').addEventListener('click', function () {
    updateStorageCost('256');
});
document.getElementById('512gb').addEventListener('click', function () {
    updateStorageCost('512');
});
document.getElementById('1tb').addEventListener('click', function () {
    updateStorageCost('1');
});

// Delivery Charge Update Function
function updateDeliveryCharge(deliveryCharge) {
    if (deliveryCharge == false) {
        const freeDelivery = 0;
        document.getElementById('delivery-charge').innerText = freeDelivery;
    }
    else if (deliveryCharge == true) {
        const delivryCharge = 20;
        document.getElementById('delivery-charge').innerText = delivryCharge;
    }
    calculateTotalPrice();
}
document.getElementById('free-delivery').addEventListener('click', function () {
    updateDeliveryCharge(false);
});
document.getElementById('add-delivery-charge').addEventListener('click', function () {
    updateDeliveryCharge(true);
});

// Calulate total price without promo code function
function calculateTotalPrice() {
    const bestPrice = parseInt(document.getElementById('best-price').innerText);
    const memoryCost = parseInt(document.getElementById('extra-momory-cost').innerText);
    const storageCost = parseInt(document.getElementById('extra-storage-cost').innerText);
    const deliveryCost = parseInt(document.getElementById('delivery-charge').innerText);
    const total = bestPrice + memoryCost + storageCost + deliveryCost;
    document.getElementById('total-price').innerText = total;
    document.getElementById('total').innerText = total;
    updateTotal();

}
// Calulate total price without promo code function
function updateTotal() {
    const promoCode = document.getElementById('promo-code').value;

    if (promoCode == 'stevekaku') {

        document.getElementById('apply-button').addEventListener('click', function () {
            const totalPrice = parseInt(document.getElementById('total-price').innerText);
            const finalPrice = totalPrice * .80;
            document.getElementById('total').innerText = finalPrice;

        });
    }
}


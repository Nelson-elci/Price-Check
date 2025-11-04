


function sumTotal(){
    let price = materialChecker();
    const getBoxOneValue = document.getElementById("num1").value;
    const getBoxTwoValue = document.getElementById("num2").value;
    const getQtyyValue = document.getElementById("quantity-el").value;
    const displayAnswer = document.getElementById("TotalDisplay");
    const sizeDisplayHeight = document.getElementById("height-display");
    const sizeDisplayWeight = document.getElementById("weight-display");

    sizeDisplayHeight.textContent = getBoxOneValue;
    sizeDisplayWeight.textContent = getBoxTwoValue;

    /*checking empty inputs*/
    if (!getBoxOneValue || !getBoxTwoValue || !getQtyyValue){
        alert ("Please fill in the fields before calculation")
    }
    if (getQtyyValue < 1){
        alert ("Quantity must be at least 1")
        return
    }
   
    /*setting discoount for agent*/
    const clientType = document.getElementById("agent");
    let discount = 0;
    if (clientType.checked){
        discount = 0.4;
    }
    else{
        discount = 0
    }


    /*calculating final price*/
    const sum = Number(getBoxOneValue) * Number(getBoxTwoValue) / 144 * Number(price) * Number(getQtyyValue);
    const finalPrice = sum - (sum * discount);
    const roundedSum = Number(finalPrice.toFixed(2))
    displayAnswer.textContent = roundedSum.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    })
}

function materialChecker(){
    const stickerMat = document.getElementById("sticker_Radio");
    const bannerMat = document.getElementById("banner_Radio");
    const onewayVisionMat = document.getElementById("OneWay_Radio");

    let price = 0

if (stickerMat.checked){
        price = 7.0
    }
    else if (bannerMat.checked){
        price = 8.4
    }

    else if (onewayVisionMat.checked) {
        price = 16.0
    }

    return price;
}







function sumTotal(){
    let price = materialChecker();
    const getBoxOneValue = document.getElementById("num1").value;
    const getBoxTwoValue = document.getElementById("num2").value;
    const getQtyyValue = document.getElementById("quantity-el").value;
    const displayAnswer = document.getElementById("TotalDisplay");

    /*checking empty inputs*/
    if (!getBoxOneValue || !getBoxTwoValue || !getQtyyValue){
        alert ("Please fill in the fields before calculation")
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



    const sum = Number(getBoxOneValue) * Number(getBoxTwoValue) / 144 * Number(price) * Number(getQtyyValue);
    const finalPrice = sum - (sum * discount);
    const roundedSum = Number(finalPrice.toFixed(2))
    displayAnswer.textContent = roundedSum;
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




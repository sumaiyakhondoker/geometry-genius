function calculateEllipseArea(){
    const a = getInputValueById('ellipse-a');
    const b = getInputValueById('ellipse-b');
    // console.log(a,b)
    const area = 3.1416 * a * b;
    setInnerTextById('ellipse-area',area);
}

function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}

function setInnerTextById(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}
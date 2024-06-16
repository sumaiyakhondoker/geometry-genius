function calculatePentagonArea(){
    // get the value of p
    const pInput = document.getElementById('pentagon-p');
    const pText = pInput.value;
    const p = parseFloat(pText);
    console.log(p)

    // get the value of b
    const bInput = document.getElementById('pentagon-b');
    const bText = bInput.value;
    const b = parseFloat(bText);
    console.log(b)

    // area of pentagon
    const area = 0.5 * p * b;
    console.log("Area of pentagon is:", area)

    // display the area of pentagon
    const pentagonAreaSpan = document.getElementById('pentagon-area')
    pentagonAreaSpan.innerText = area;
}
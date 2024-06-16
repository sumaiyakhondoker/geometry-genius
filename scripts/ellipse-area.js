function calculateEllipseArea(){
    // get ellipse a value
    const ellipseAInput = document.getElementById('ellipse-a');
    const ellipseAText = ellipseAInput.value;
    const a = parseFloat(ellipseAText);
    console.log(a)

    // get ellipse b value
    const ellipseBInput = document.getElementById('ellipse-b');
    const ellipseBText = ellipseBInput.value;
    const b = parseFloat(ellipseBText);
    console.log(b)

    // calculate the ellipse area
    const area = 3.1416 * a * b;
    console.log('Area of the ellipse is : ', area);

    // display triangle area
    const ellipseAreaSpan = document.getElementById('ellipse-area');
    ellipseAreaSpan.innerText = area;
}
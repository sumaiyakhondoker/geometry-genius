document.getElementById('rhombus').addEventListener('mouseover', function(){
    const rhombus = document.getElementById('rhombus');
    rhombus.style.backgroundColor = 'skyblue';
    rhombus.addEventListener('mouseout', function(){
        rhombus.style.backgroundColor = 'white';
        
    })
})



function calculateRhombusArea(){
    // get the value of d1
    const d1Input = document.getElementById('rhombus-d1');
    const d1Text = d1Input.value;
    const d1 = parseFloat(d1Text);
    console.log(d1)

    // get the value of d2
    const d2Input = document.getElementById('rhombus-d2');
    const d2Text = d2Input.value;
    const d2 = parseFloat(d2Text);
    console.log(d2)

    // calculate the area of rhombus
    const area = 0.5 * d1 * d2;
    console.log("Area of the rhombus is:", area);

    // display the area in the span
    const rhombusAreaSpan = document.getElementById('rhombus-area');
    rhombusAreaSpan.innerText = area;
}
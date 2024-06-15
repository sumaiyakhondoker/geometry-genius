function calculateParallelogramArea(){
    
    // get base of the Parallelogram
    const baseInput = document.getElementById('parallelogram-base');
    const baseText = baseInput.value;
    const base = parseFloat(baseText);
    console.log(base)

    // get height of the parallelogram
    const heightInput = document.getElementById('parallelogram-height');
    const heightText = heightInput.value;
    const height = parseFloat(heightText);
    console.log(height);

    // area of the parallelogram
    const area = base * height;
    console.log('Area of the parallelogram is:', area)

    // display the area
    const parallelogramAreaSpan = document.getElementById('parallelogram-area');
    parallelogramAreaSpan.innerText = area;
}
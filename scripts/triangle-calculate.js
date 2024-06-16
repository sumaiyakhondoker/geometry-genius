/**
 * objective : get base, height of a triangle. Calculate the area by using the provided formula. and then display the area.
 * step-1: get the base value of the triangle.
 * step-2:added an id in the base input field.
 * step-3: use getElementById to access the input field.
 * step-4: get value from the input field. (value is string now)
 * step-5: convert the to a number. use parseFloat
 */

document.getElementById('triangle').addEventListener('mouseover', function(){
    const triangle = document.getElementById('triangle');
    triangle.style.backgroundColor = 'pink';
    triangle.addEventListener('mouseout', function(){
        triangle.style.backgroundColor = 'white';
    })
})
function calculateTriangleArea(){
    // get triangle base value
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseText);
    console.log(base)

    // get triangle height
    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightText = triangleHeightInput.value;
    const height = parseFloat(triangleHeightText);
    console.log(height)

    // calculate the triangle area
    const area = 0.5 * base * height;
    console.log('Area of the triangle is : ', area);

    // display triangle area
    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = area;

}
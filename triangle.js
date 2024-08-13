function triangleAreaCalculate(){
    // base value
    const triangleBaseValue = document.getElementById('triangle-base').value;
    const triangleBase = parseFloat(triangleBaseValue);

    // height value
    const triangleHeightValue = document.getElementById('triangle-height').value;
    const triangleHeight = parseFloat(triangleHeightValue);

    // Area calculation
    const Area = 0.5 * triangleBase * triangleHeight;
    console.log(Area);

    // Display Result


}

function rhombusAreaCalculate(){
    const q1 = getRhombusValue('rhombus-q1');
    const q2 = getRhombusValue('rhombus-q2');

    const area = 0.5 * q1 * q2;
    setResultById('result', area);

}

function getRhombusValue(getById){
    const rhombusData = document.getElementById(getById).value;
    const rhombusValue = parseFloat(rhombusData);
    return rhombusValue;
}
function setResultById(id, area){
    const result = document.getElementById(id);
    result.innerText = area;
}
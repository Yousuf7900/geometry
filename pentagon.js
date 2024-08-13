function pentagonAreaCalculate(){
    const a = getRhombusValue('pentagon-a');
    const b = getRhombusValue('pentagon-b');

    const area = 0.5 * a * b;
    setResultById('result', area);
}
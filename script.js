function bmi() {
    let height = document.getElementById('height').value
    let weight = document.getElementById('weight').value
    let resultText = document.getElementById('result')
    let mark = document.getElementById('mark')

    let result = weight / ((height / 100) * (height / 100))
    resultText.textContent = 'Result: ' + result.toFixed(1)

    if (result <= 18.4) {
        mark.style.color = '#01ABF1'
        mark.textContent = 'Underweight'
    }
    if (result >= 18.5 && result <= 24.9) {
        mark.style.color = '#05A651'
        mark.textContent = 'Normal'
    }

    if (result >= 25 && result <= 29.9) {
        mark.style.color = '#F4D441'
        mark.textContent = 'Overweight'
    }

    if (result >= 30) {
        mark.style.color = '#BD1C2D'
        mark.textContent = 'Obese'
    }
}
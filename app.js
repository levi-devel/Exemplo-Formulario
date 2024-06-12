function capturarValores(){
    let numero1 = document.getElementById('num1').value;
    let numero2 = document.getElementById('num2').value;
    let soma = parseInt(numero1)+parseInt(numero2);

    document.getElementById('mostraSoma').innerHTML = `<div id='mostraSoma'><span>A soma é: ${soma}.</span></div>`
    document.getElementById('num1').value = "";
    document.getElementById('num2').value = "";
}
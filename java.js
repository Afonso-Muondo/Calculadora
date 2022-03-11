var resul 

function insert(num) {
    var numero = document.getElementById('result').innerHTML
    document.getElementById('result').innerHTML = numero + num
}

function clean() {
    document.querySelector('#result').innerHTML=''
}

function igual() {
    var result = document.querySelector('#result').innerHTML
    if(result)
    document.querySelector('#result').innerHTML = eval(result)
}
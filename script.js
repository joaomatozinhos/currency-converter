var buttonConverter = document.getElementById('button')
buttonConverter.addEventListener('click', converter)

function converter() {
  let real = document.getElementById('real').value
  let dolar = (real / 5.26).toFixed(2)
  let euro = (real / 6.18).toFixed(2)
  let bitcoin = (real / 252350.79).toFixed(8)
  let ethereum = (real / 18975.33).toFixed(6)

  document.getElementById('dolar').value = dolar
  document.getElementById('euro').value = euro
  document.getElementById('bitcoin').value = bitcoin
  document.getElementById('ethereum').value = ethereum
}

document.getElementById(
  'atualizacao'
).innerHTML = `Valores atualizados em Thu Sep 16 2021 14:19:46`
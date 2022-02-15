const urlAPI =
  'https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,ETH-BRL'
let real, dolar, euro, bitcoin, ethereum, date

fetch(urlAPI)
  .then(response => response.json())
  .then(data => {
    getData(data)
  })

function getData(data) {
  dolar = data.USDBRL.ask
  euro = data.EURBRL.ask
  bitcoin = data.BTCBRL.ask
  ethereum = data.ETHBRL.ask
  date = data.USDBRL.create_date

  let dolarPrice = document.getElementById('dolarPrice')
  let euroPrice = document.getElementById('euroPrice')
  let bitcoinPrice = document.getElementById('bitcoinPrice')
  let ethereumPrice = document.getElementById('ethereumPrice')

  dolarPrice.innerHTML = `US$ 1 = R$ ${dolar}`
  euroPrice.innerHTML = `1 € = R$ ${euro}`
  bitcoinPrice.innerHTML = `1 BTC = R$ ${bitcoin}`
  ethereumPrice.innerHTML = `1 ETH = R$ ${ethereum}`
}

var buttonConvert = document.getElementById('button')
buttonConvert.addEventListener('click', convert)

function convert() {
  real = document.getElementById('real').value
  let USDBRL = (real / dolar).toFixed(2)
  let EURBRL = (real / euro).toFixed(2)
  let BTCBRL = (real / bitcoin).toFixed(8)
  let ETHBRL = (real / ethereum).toFixed(6)

  document.getElementById('dolar').value = USDBRL
  document.getElementById('euro').value = EURBRL
  document.getElementById('bitcoin').value = BTCBRL
  document.getElementById('ethereum').value = ETHBRL
}

setTimeout(() => {
  document.getElementById(
    'atualizacao'
  ).innerHTML = `Valores atualizados em ${date}`
}, 1000)

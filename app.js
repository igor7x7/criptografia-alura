const cripto = document.getElementById('cripto')
const buttonCript = document.getElementById('criptografar')

buttonCript.addEventListener('click', () => {
    const texto = cripto.value
    console.log(texto[5])
    texto.forEach(function substituir() {
        if (texto[i] == 'e') {
            texto[i] = 'enter'
        }
        if (texto[i] == 'i') {
            texto[i] = 'imes'
        }
        if (texto[i] == 'a') {
            texto[i] = 'ai'
        }
        if (texto[i] == 'o') {
            texto[i] = 'ober'
        }
        if (texto[i] == 'u') {
            texto[i] = 'ufat'
        }
    })
    cripto.value = ''
    console.log(texto)
})



let texto = cripto.innerText

console.log(texto)

/*
*********modelo para testar**********

const texto = "eu estou com saudades"
let cript = texto.split('')
let i = 0

for(let i = 0; i<= texto.length; i++){
  if(cript[i] == 'a'){
    cript[i] = 'atr'
  }
  if(cript[i] == 'e'){
    cript[i] = 'eqb'
  }
  if(cript[i] == 'i'){
    cript[i] = 'ihr'
  }
  if(cript[i] == 'o'){
    cript[i] = 'opbr'
  }
  if(cript[i] == 'u'){
    cript[i] = 'udyt'
  }
}

let textoCript = cript.toString()
let reform = textoCript.replace(/,/g,"")

console.log(cript)
console.log(textoCript)
console.log(reform) */

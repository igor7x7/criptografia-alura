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
const cripto = document.getElementById('cripto')
const buttonCript = document.getElementById('criptografar')
const textoCriptografado = document.getElementById('text-result')
const buttonCopiar = document.getElementById('copiar')
const buttonDescript = document.getElementById('descriptografar')
const descripto = document.getElementById('descripto')


buttonCript.addEventListener('click', () => {
    const texto = cripto.value
    let cript = texto.split('')

    for (let i = 0; i <= texto.length; i++) {
        if (cript[i] == 'a') {
            cript[i] = 'atr'
        }
        if (cript[i] == 'e') {
            cript[i] = 'eqb'
        }
        if (cript[i] == 'i') {
            cript[i] = 'ihr'
        }
        if (cript[i] == 'o') {
            cript[i] = 'opbr'
        }
        if (cript[i] == 'u') {
            cript[i] = 'udyt'
        }
    }

    let textoCript = cript.toString()
    let reform = textoCript.replace(/,/g, "")

    textoCriptografado.value = reform
    cripto.value = ''
})


buttonCopiar.addEventListener('click', () => {
    navigator.clipboard.writeText(textoCriptografado.value)
    textoCriptografado.value = ''
})

buttonDescript.addEventListener('click', () => {
    const texto = descripto.value

    let part1 = texto.replaceAll('atr', 'a')
    let part2 = part1.replaceAll('eqb', 'e')
    let part3 = part2.replaceAll('ihr', 'i')
    let part4 = part3.replaceAll('opbr', 'o')
    let part5 = part4.replaceAll('udyt', 'u')

    descripto.value = part5

})



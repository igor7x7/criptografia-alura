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
            cript[i] = 'ai'
        }
        if (cript[i] == 'e') {
            cript[i] = 'enter'
        }
        if (cript[i] == 'i') {
            cript[i] = 'imes'
        }
        if (cript[i] == 'o') {
            cript[i] = 'ober'
        }
        if (cript[i] == 'u') {
            cript[i] = 'ufat'
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

    let part1 = texto.replaceAll('ai', 'a')
    let part2 = part1.replaceAll('enter', 'e')
    let part3 = part2.replaceAll('imes', 'i')
    let part4 = part3.replaceAll('ober', 'o')
    let part5 = part4.replaceAll('ufat', 'u')

    descripto.value = part5

})



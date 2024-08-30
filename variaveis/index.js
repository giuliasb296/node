function testeVar(){
    if(true){
        var X = 10
        console.log(`Valor de X dentro do bloco é: ${X}`)
    }
    console.log(`Valor de X fora do bloco é: ${X}`)
}

function testeLet(){
    if(true){
        let Y = 10
        console.log(`Valor de Y dentro do bloco é: ${Y}`)
    }
    //console.log(`Valor de Y fora do bloco é: ${Y}`)
        //"ReferenceError: Y is not defined", ou seja, não recebe o valor fora do bloco.
}

testeVar()
testeLet()
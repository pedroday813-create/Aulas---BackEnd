/***************************************************
 * Objetivo: Arquivo responssavel pelas funcoes de calculos para este projeto
 * Autor: Pedro Rodrigues
 * Data: 11/02/26
 * versao: 1.0
 ****************************************************/

function calcularJurosCompostos(valorCompra, taxaJuros, tempoPago){
    //recebe os argumetos da funcao em variaveis locais
    //As variaveis (valor, taxa e tempo sao numericas por conta da conversao)
    //Mas os argumentos (valorCompra, taxaJuros e tempoPago) sao do tipo string por conta da entrada de dados
    let valor = Number(valorCompra)
    let taxa = Number(taxaJuros)
    let tempo = Number(tempoPago)

    //vaçidacoa para entradas vaizas ou de caracteres invalidos
    if (valor <= 0 || isNaN(valorCompra) || tempoPago == '' || isNaN(tempoPago)){
        console.log('ERRO: Valor da compra ou tempo de pagamento invalidos');
        return false //nao pode processar
    }else{
        console.log('ERRO: Taxa de juros invalida');
        return false //nao pode processar

    let percentual = calcularpercentual(taxa)

    //validacao apara erro do percemtual na funcao calcularpercentual
    if (percentual){
        let montante = valor * ((1 + Number(percentual)) ** tempo)
        return Number(montante.toFixed(2))
    }else{
        return false //nao pode processar
    }
    }

}

//calcular percentual de um numero
function calcularpercentual(numero){
    let numeropercentual = Number(numero)
    

    //velidacao para verificar se o numero e valido para o calculo do percentual
    if (numero == '0' || numero <= 0 || isNaN(numero)){
        return false //nao pode processar
    
    }else{
        //processamento do calculo do percentual
        let percentual = numeropercentual / 100
        return percentual.toFixed(2)
    }
}

//tornando as duas funceos publicas para este projeto
module.exports = {
    calcularJurosCompostos,
    calcularpercentual
}
/*************************************************************************************************
 * Objetivo: Criar um sistema que permite o calculo de juros utilizando boas praticas com funcaoes
 * Data: 11/02/26
 * Autor: Pedro 
 * versao: 1.0
 *************************************************************************************************/

//Importe da biblioteca para entrada de dados
const readline = require('readline')

//Criacao de um objeto para receber os dados do terminal
const entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDados.question('Digite o nome do cliente:', function (nome) {
    let cliente = nome

    entradaDados.question('digite o nome do produto:', function (produto) {
        let nomeProduto = produto

        entradaDados.question('Digite o valor do produto:', function (capital) {
            let valorProduto = capital
        
            entradaDados.question('Digite a taxa de juros a ser aplicada na compra:', function (taxa) {
                let taxaJuros = taxa

                entradaDados.question('Digite o tempo de pagamento:', function (tempo) {
                    let tempoPagamento = tempo

                    //biblioteca de calculos
                    let calculos = require('./modulo/calculos.js')

                    let montante = calculos.calcularJurosCompostos(valorProduto, taxaJuros, tempoPagamento)

                    //let percentual = Number(taxaJuros) / 100
                    //let montante = Number(valorProduto) * ((1 + Number(percentual)) ** Number(tempoPagamento))
                    if(montante){
                    console.log('O montante final e: ' + montante.toFixed(2));
                    }else{
                        entradaDados.close()
                    }
                    
                })
            })
        })
    })
})

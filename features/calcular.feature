Feature: Calcular o resultado com base em 2 numeros de 0 a 9

    Scenario: Somar Dois numeros
        Given que a calculadora está aberta
        When clico no botao "4"
        And clico no botao Somar
        And clico no botao "6"
        And clico no botao igual
        Then exibe o resultado como "10"
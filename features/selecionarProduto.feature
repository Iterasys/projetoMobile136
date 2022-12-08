Feature: Selecionar um produto em MyDemoApp
    MyDemo App é um aplicativo de demonstração criado pela Saucelabs
    Ele server para treinar automação de teste

    Scenario: Realizo a compra de um produto
        Given que acesso a tela inicial do App
        When clico em "Sauce Lab Back Packs"
        Then aparece a tela do produto "Sauce Lab Back Packs" e o preco "$ 29.99"
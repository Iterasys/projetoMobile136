const { Given, When, Then } = require("@wdio/cucumber-framework");

Given(/^que acesso a tela inicial do App$/, async () => {
    // Uma vez que a tela inicial irá abrir sozinha
    // Vamos esperar o carregamento antes de prosseguir com a execução
    const productsTitle = '//android.widget.FrameLayout[@content-desc="Container for fragments"]/android.view.ViewGroup/android.widget.TextView';
    await $(productsTitle).waitForDisplayed();
})

When(/^clico em "([^"]*)?"$/, async (nomeProduto) => {
    const produto = `//android.widget.ImageView[@content-desc="${nomeProduto}"]`;
    await $(produto).click();
})

Then(/^aparece a tela do produto "([^"]*)?" e o preco "([^"]*)?"$/, async (nomeProduto, preco) => {
    // validar o titulo do produto
    const produtoTitulo = '//android.widget.FrameLayout[@content-desc="Container for fragments"]/android.widget.ScrollView/android.view.ViewGroup/android.widget.TextView';
    expect(await $(produtoTitulo).getText()).toEqual(nomeProduto)

    // arrasta para cima
    await driver.touchAction([
        {action: 'press', x: 350, y: 1100},
        {action: 'moveTo', x: 350, y: 350},
        'release'
      ])

    // validar o preco do produto
    const produtoPreco = '//android.widget.FrameLayout[@content-desc="Container for fragments"]/android.widget.ScrollView/android.view.ViewGroup/android.widget.LinearLayout[1]/android.widget.TextView';
    expect(await $(produtoPreco).getText()).toEqual(preco);

})
const {After, Before, Given, Then} = require('@cucumber/cucumber')
const {expect} = require('chai')
const webdriver = require('selenium-webdriver');
//const chrome = require('selenium-webdriver/chrome');
//const firefox = require('selenium-webdriver/firefox');

let driver = new webdriver.Builder()
  .forBrowser(webdriver.Browser.CHROME)
  .build();

Before(function () {
  console.log('******* Inicio');
});

After(function () {
  console.log('******* Fim');
});

Given('que acesso o sistema', async () => {
  await driver.get('https://testmtp.thiagobenites.repl.co/');
});
       
Given('que digito o tipo de solo {string} nivel de umidade {string}', async (strSoilType, strHumidityLevel) => {
  //expect(strSoilType).equal('argila')
  console.log(strSoilType);
});
       
Given('efetuo o click no botao Calcular', async () => {
  //return 'pending';
});
         
Then('recebo {string} como sugestao de acao', async (strSuggestion) => {
  //return 'pending';
});
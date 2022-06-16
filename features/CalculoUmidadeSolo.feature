# language: pt
# Author: Thiago Benites
Funcionalidade: Calculo da Umidade do Solo
  Eu como usuario
  Quero digitar o tipo de solo
  E o nivel de umidade
  Entao receber a sugestao de acao

  Contexto: 
    Dado que acesso o sistema

  Cenario: CT01-Tipo de solo e umidade validos
    Dado que digito o tipo de solo "Argila" nivel de umidade "100"
    E efetuo o click no botao Calcular
    Entao recebo "Irrigação não necessária" como sugestao de acao
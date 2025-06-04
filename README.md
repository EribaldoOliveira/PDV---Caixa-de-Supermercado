# 🛒 PDV - Sistema de Vendas (Caixa de Supermercado)

Este é um sistema simples de Ponto de Venda (PDV) desenvolvido com HTML, CSS e JavaScript puro, ideal para uso em pequenos comércios como supermercados, mercearias e lojas de bairro.

## ✨ Funcionalidades

- Adicionar produtos com nome, quantidade e preço
- Cálculo automático do total e total com desconto
- Informações do cliente (Nome, CPF e CNPJ)
- Escolha da forma de pagamento: Dinheiro, Cartão ou PIX
- Geração de Nota Fiscal ou Recibo térmico
- Impressão personalizada com estilo específico para recibo

## 🖼️ Interface

A interface é dividida em:

- **Entrada de produtos**
- **Lista dos produtos adicionados**
- **Dados do cliente**
- **Campo de desconto**
- **Seleção da forma de pagamento**
- **Totais e botões de impressão**

## 📁 Estrutura do Projeto
```
pdv/
├── index.html
├── css/
│ └── style.css
├── js/
│ └── script.js
└── README.md
```

## 🚀 Como usar

1. **Clone o repositório** ou copie os arquivos para seu ambiente local.
2. Abra o `index.html` em um navegador moderno.
3. Preencha os campos dos produtos e clique em **Adicionar**.
4. Insira as informações do cliente, desconto e escolha a forma de pagamento.
5. Clique em **Nota Fiscal** ou **Recibo** para gerar a impressão.

## 🧾 Impressão

Durante a impressão:
- A tela principal é ocultada.
- Um recibo em formato simplificado é exibido com todos os dados da venda.
- Há duas opções de estilo: `Nota Fiscal` e `Recibo Térmico`.

## 🛠️ Tecnologias Utilizadas

- HTML5
- CSS3 (com `@media print` para estilo de impressão)
- JavaScript Vanilla (sem bibliotecas externas)

## 📌 Recursos Extras

- Validação simples de campos obrigatórios
- Atualização dinâmica de lista de itens e totais
- Estilização limpa e responsiva com `grid` layout

## 📷 Demonstração (Opcional)
![image](https://github.com/user-attachments/assets/c8756330-6997-4ea5-b2c0-05b1015339d1)

```
📄 Licença
Este projeto é livre para uso e modificação. Sinta-se à vontade para adaptar conforme suas necessidades.
```

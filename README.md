# AV1 - USABILIDADE INTERFACE HOMEM MÁQUINA

## PROJETO - CARDÁPIO DIGITAL INTERATIVO

### APRESENTAÇÃO DO PROJETO

Este projeto visa a criação de um sistema de cardápio digital interativo para um restaurante fast food, utilizando as tecnologias HTML, CSS e JavaScript. O objetivo é proporcionar uma experiência prática e intuitiva aos clientes, permitindo-lhes selecionar itens do cardápio, gerenciar suas escolhas e concluir suas compras de maneira eficiente.

O desenvolvimento do sistema foi estruturado em três etapas principais. Primeiramente, a **apresentação do cardápio** é organizada em categorias como "Hambúrgueres", "Salgados" e "Bebidas", com cada item sendo exibido com nome, descrição e preço, possibilitando a seleção por meio de checkboxes. Em seguida, o **gerenciamento do pedido** permite ao cliente ajustar as quantidades dos itens selecionados, visualizar um carrinho de compras com o total do pedido e optar por adicionar mais itens ou finalizar a compra. Por fim, na **finalização do pedido**, o cliente insere seus dados pessoais e escolhe a forma de pagamento, sendo então direcionado a uma página de resumo, onde pode revisar, corrigir ou concluir a compra.

O sistema foi projetado com foco na usabilidade, aderindo a boas práticas de design e acessibilidade. A interface clara e objetiva orienta o cliente por todas as etapas do processo de compra, garantindo uma experiência de uso simples e eficaz.

### **CÓDIGOS DO PROJETO**

**HTML - ESTRUTURA DA PÁGINA**

```html
<!DOCTYPE html>
<html lang="pt-BR">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Cardápio Digital - Fast Food</title>
        <link rel="stylesheet" href="styles.css">
    </head>

    <body>
        <header>
            <h1>Cardápio Digital - Fast Food</h1>
        </header>

        <main>
            <section id="menu">
                <h2>Cardápio</h2>

                <!-- Sanduíches -->
                <h3>Sanduíches</h3>
                <article>
                    <input type="checkbox" id="item1" data-name="Hambúrguer Clássico" data-price="15">
                    <label for="item1">Hambúrguer Clássico - R$15,00</label>
                    <p>Descrição: Pão, carne bovina, queijo, alface, tomate e maionese.</p>
                </article>
                <article>
                    <input type="checkbox" id="item2" data-name="Cheeseburguer" data-price="17">
                    <label for="item2">Cheeseburguer - R$17,00</label>
                    <p>Descrição: Pão, carne bovina, queijo cheddar, alface e tomate.</p>
                </article>
                <article>
                    <input type="checkbox" id="item3" data-name="Hambúrguer Vegano" data-price="18">
                    <label for="item3">Hambúrguer Vegano - R$18,00</label>
                    <p>Descrição: Pão integral, hambúrguer vegetal, alface, tomate e maionese vegana.</p>
                </article>

                <!-- Salgados -->
                <h3>Salgados</h3>
                <article>
                    <input type="checkbox" id="item4" data-name="Coxinha" data-price="5">
                    <label for="item4">Coxinha - R$5,00</label>
                    <p>Descrição: Coxinha de frango com catupiry.</p>
                </article>
                <article>
                    <input type="checkbox" id="item5" data-name="Empada" data-price="6">
                    <label for="item5">Empada - R$6,00</label>
                    <p>Descrição: Empada de frango com requeijão.</p>
                </article>
                <article>
                    <input type="checkbox" id="item6" data-name="Kibe" data-price="7">
                    <label for="item6">Kibe - R$7,00</label>
                    <p>Descrição: Kibe assado com recheio de carne moída.</p>
                </article>

                <!-- Saladas -->
                <h3>Saladas</h3>
                <article>
                    <input type="checkbox" id="item7" data-name="Salada Caesar" data-price="12">
                    <label for="item7">Salada Caesar - R$12,00</label>
                    <p>Descrição: Alface, frango grelhado, croutons e molho Caesar.</p>
                </article>
                <article>
                    <input type="checkbox" id="item8" data-name="Salada de Frutas" data-price="10">
                    <label for="item8">Salada de Frutas - R$10,00</label>
                    <p>Descrição: Mix de frutas frescas da estação.</p>
                </article>
                <article>
                    <input type="checkbox" id="item9" data-name="Salada Grega" data-price="14">
                    <label for="item9">Salada Grega - R$14,00</label>
                    <p>Descrição: Tomate, pepino, azeitonas, queijo feta e orégano.</p>
                </article>

                <!-- Bebidas -->
                <h3>Bebidas</h3>
                <article>
                    <input type="checkbox" id="item10" data-name="Refrigerante" data-price="4">
                    <label for="item10">Refrigerante - R$4,00</label>
                    <p>Descrição: Lata de refrigerante 350ml.</p>
                </article>
                <article>
                    <input type="checkbox" id="item11" data-name="Suco Natural" data-price="6">
                    <label for="item11">Suco Natural - R$6,00</label>
                    <p>Descrição: Suco natural de laranja ou maçã.</p>
                </article>
                <article>
                    <input type="checkbox" id="item12" data-name="Água Mineral" data-price="3">
                    <label for="item12">Água Mineral - R$3,00</label>
                    <p>Descrição: Garrafa de água mineral 500ml.</p>
                </article>

                <!-- Doces -->
                <h3>Doces</h3>
                <article>
                    <input type="checkbox" id="item13" data-name="Brownie" data-price="8">
                    <label for="item13">Brownie - R$8,00</label>
                    <p>Descrição: Brownie de chocolate com nozes.</p>
                </article>
                <article>
                    <input type="checkbox" id="item14" data-name="Tiramisu" data-price="9">
                    <label for="item14">Tiramisu - R$9,00</label>
                    <p>Descrição: Sobremesa italiana com café e mascarpone.</p>
                </article>
                <article>
                    <input type="checkbox" id="item15" data-name="Cheesecake" data-price="10">
                    <label for="item15">Cheesecake - R$10,00</label>
                    <p>Descrição: Cheesecake de frutas vermelhas.</p>
                </article>

                <!-- Sorvetes -->
                <h3>Sorvetes</h3>
                <article>
                    <input type="checkbox" id="item16" data-name="Sorvete de Chocolate" data-price="7">
                    <label for="item16">Sorvete de Chocolate - R$7,00</label>
                    <p>Descrição: Sorvete cremoso de chocolate.</p>
                </article>
                <article>
                    <input type="checkbox" id="item17" data-name="Sorvete de Baunilha" data-price="7">
                    <label for="item17">Sorvete de Baunilha - R$7,00</label>
                    <p>Descrição: Sorvete clássico de baunilha.</p>
                </article>
                <article>
                    <input type="checkbox" id="item18" data-name="Sorvete de Morango" data-price="8">
                    <label for="item18">Sorvete de Morango - R$8,00</label>
                    <p>Descrição: Sorvete de morango com pedaços de fruta.</p>
                </article>

            </section>

            <section id="cart">
                <h2>Carrinho de Compras</h2>
                <ul id="cart-items"></ul>
                <p>Total: R$<span id="total">0,00</span></p>
            </section>

            <section id="order">
                <h2>Dados para Entrega</h2>
                <form id="order-form">
                    <label for="name">Nome:</label>
                    <input type="text" id="name" required>

                    <label for="address">Endereço:</label>
                    <input type="text" id="address" required>

                    <label for="payment">Forma de Pagamento:</label>
                    <select id="payment" required>
                        <option value="cartão">Cartão</option>
                        <option value="dinheiro">Dinheiro</option>
                        <option value="pix">PIX</option>
                    </select>
                </form>
                <button id="confirm-order">Confirmar Pedido</button>
            </section>
        </main>

        <script src="scripts.js"></script>
    </body>

</html>
```

**CSS - ESTILOS DA PÁGINA**

```css
/* styles.css */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f4f4f4;
}

header {
  background-color: #ff6600;
  color: white;
  text-align: center;
  padding: 15px 0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

section {
  width: 80%;
  max-width: 800px;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

h2 {
  border-bottom: 2px solid #ff6600;
  padding-bottom: 5px;
  margin-bottom: 15px;
  color: #333;
}

h3 {
  color: #ff6600;
  border-bottom: 2px solid #ff6600;
  padding-bottom: 5px;
  margin-bottom: 10px;
  font-size: 22px;
}

article {
  margin-bottom: 20px;
  padding: 15px;
  border-radius: 8px;
  background-color: #fafafa;
  border: 1px solid #ddd;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

article:hover {
  border-color: #ff6600;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

label {
  font-size: 18px;
  font-weight: bold;
  color: #333;
  display: block;
  margin: 10px 0 5px;
}

input[type="text"],
select {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border-radius: 5px;
  border: 1px solid #ddd;
  font-size: 16px;
}

button {
  background-color: #ff6600;
  color: white;
  border: none;
  padding: 12px 20px;
  cursor: pointer;
  font-size: 16px;
  border-radius: 5px;
  transition: background-color 0.3s, box-shadow 0.3s;
  width: 100%;
  margin-top: 20px;
}

button:hover {
  background-color: #e65c00;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

ul#cart-items {
  list-style-type: none;
  padding: 0;
  margin-bottom: 15px;
}

ul#cart-items li {
  margin-bottom: 10px;
  color: #333;
}

span#total {
  font-weight: bold;
  color: #ff6600;
  font-size: 18px;
}

/* Estilos adicionais para categorias */
section#menu {
  background-color: #ffffff;
  border: 1px solid #ddd;
  padding: 20px;
}

section#cart,
section#order {
  background-color: #fff;
  border: 1px solid #ddd;
  padding: 20px;
}

section#cart {
  border-color: #4CAF50;
}

section#order {
  border-color: #2196F3;
}

```

**JAVASCRIPT - INTERAÇÕES DA PAGINA**

```jsx
// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const cartItems = [];

    document.querySelectorAll('#menu input[type="checkbox"]').forEach(item => {
        item.addEventListener('change', () => {
            const itemName = item.getAttribute('data-name');
            const itemPrice = parseFloat(item.getAttribute('data-price'));
            if (item.checked) {
                cartItems.push({ name: itemName, price: itemPrice });
            } else {
                const index = cartItems.findIndex(cartItem => cartItem.name === itemName);
                if (index > -1) cartItems.splice(index, 1);
            }
            updateCart();
        });
    });

    function updateCart() {
        const cartList = document.getElementById('cart-items');
        cartList.innerHTML = '';
        let total = 0;
        cartItems.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = `${item.name} - R$${item.price.toFixed(2)}`;
            cartList.appendChild(listItem);
            total += item.price;
        });
        document.getElementById('total').textContent = total.toFixed(2);
    }

    document.getElementById('confirm-order').addEventListener('click', () => {
        const name = document.getElementById('name').value;
        const address = document.getElementById('address').value;
        const payment = document.getElementById('payment').value;

        if (name && address && payment && cartItems.length > 0) {
            let summary = `Resumo do Pedido:\n\n`;
            cartItems.forEach(item => {
                summary += `${item.name} - R$${item.price.toFixed(2)}\n`;
            });
            summary += `\nTotal: R$${document.getElementById('total').textContent}\n\n`;
            summary += `Nome: ${name}\nEndereço: ${address}\nForma de Pagamento: ${payment}`;

            if (confirm(`${summary}\n\nClique em OK para finalizar a compra.`)) {
                alert('Obrigado pela sua compra! Sua entrega será feita em instantes.');
                window.location.reload(); // Recarrega a página para limpar o carrinho e o formulário
            }
        } else {
            alert('Por favor, preencha todos os campos e adicione itens ao carrinho.');
        }
    });
});

```

### **DESCRIÇÃO DO CÓDIGO DO PROJETO**

**Visão Geral:**

O projeto consiste em um sistema de cardápio digital interativo para um restaurante fast food, onde os clientes podem escolher produtos, visualizar o resumo do pedido e fornecer dados para entrega de forma intuitiva. O código e a página ativa podem ser acessados pelo repositório no GitHub ([https://github.com/AdiulesonArlen/CardapioDigital-Projeto-Web-FrontEnd](https://github.com/AdiulesonArlen/CardapioDigital-Projeto-Web-FrontEnd)) e pela página ativa na web ([https://adiulesonarlen.github.io/CardapioDigital-Projeto-Web-FrontEnd/](https://adiulesonarlen.github.io/CardapioDigital-Projeto-Web-FrontEnd/)).

**Estrutura da Página (HTML):**

O HTML define a estrutura da página:

- **Cabeçalho:** Exibe o nome "Cardápio Digital - Fast Food".
- **Menu:** Dividido em categorias como "Sanduíches" e "Bebidas", com checkboxes para seleção e exibição do nome, preço e descrição de cada item.
- **Carrinho de Compras:** Atualizado automaticamente com a lista de itens selecionados e o valor total.
- **Dados para Entrega:** Formulário para nome, endereço e forma de pagamento.
- **Botão de Confirmação:** Verifica a presença de itens no carrinho e dados preenchidos antes de mostrar o resumo do pedido.

**Estilos da Página (CSS):**

O CSS define o design:

- **Corpo da Página:** Estilo limpo, com fundo claro.
- **Cabeçalho:** Fundo laranja com texto branco.
- **Seções:** Áreas delimitadas com bordas suaves.
- **Artigos:** Blocos de itens do menu destacados ao passar o cursor.
- **Botão:** "Confirmar Pedido" muda de cor ao ser pressionado, proporcionando feedback visual.

**Interações da Página (JavaScript):**

O JavaScript adiciona interatividade:

- **Gerenciamento do Carrinho:** Atualiza automaticamente a lista de itens e o valor total.
- **Confirmação do Pedido:** Verifica o formulário e itens no carrinho antes de exibir o resumo do pedido. Em caso de confirmação, exibe uma mensagem de agradecimento e reinicia o processo.

### RESUMO

Este sistema de cardápio digital facilita a realização de pedidos em um restaurante fast food, proporcionando uma experiência simples e acessível para todos os usuários.
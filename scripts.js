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

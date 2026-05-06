/**
 * DecoHomz — Checkout Page Logic
 */

let deliveryFee = 0;

document.addEventListener('DOMContentLoaded', () => {
    renderCheckoutSummary();
    
    const placeOrderBtn = document.querySelector('.btn-place');
    if (placeOrderBtn) {
        placeOrderBtn.addEventListener('click', (e) => {
            if (!validateForm('checkout-form')) {
                e.preventDefault();
                return;
            }
            const cart = DH_STORAGE.get('dh_cart') || [];
            
            // If cart is empty, we use dummy data for the order so the prototype flow works
            const orderItems = cart.length > 0 ? cart : [
                { id: 'luna-sofa', name: 'Luna 3-Seater Sofa', price: 12999, quantity: 1, variant: 'Walnut' },
                { id: 'elio-table', name: 'Elio Coffee Table', price: 4999, quantity: 1, variant: 'Natural' }
            ];

            // Save order to history
            const orders = DH_STORAGE.get('dh_orders') || [];
            const newOrder = {
                id: 'DH' + Math.floor(Math.random() * 100000),
                date: new Date().toLocaleDateString(),
                status: 'Processing',
                items: orderItems,
                total: calculateTotal(orderItems) + deliveryFee
            };
            orders.push(newOrder);
            DH_STORAGE.set('dh_orders', orders);
            
            // Clear cart
            DH_STORAGE.set('dh_cart', []);
            
            // Redirect
            location.href = 'order-confirmation.html';
        });
    }
});

function renderCheckoutSummary() {
    const cart = DH_STORAGE.get('dh_cart') || [];
    const container = document.getElementById('checkout-summary-items');
    const subtotalEl = document.querySelector('.sum-row .v');
    const totalEl = document.querySelector('.sum-total span:last-child');

    if (!container) return;

    if (cart.length === 0) {
        return; // Preserve static summary items
    }

    let subtotal = 0;
    container.innerHTML = cart.map(item => {
        const product = PRODUCTS.find(p => p.id === item.id) || {};
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;
        return `
            <div class="sum-item">
                <div class="sum-thumb">
                    ${product.svg || ''}
                    <div class="qty-badge">${item.quantity}</div>
                </div>
                <div class="sum-item-info">
                    <div class="sum-item-name">${item.name}</div>
                    <div class="sum-item-meta">${item.color || 'Standard'} · ${item.size || 'Regular'}</div>
                </div>
                <div class="sum-item-price">EGP ${itemTotal.toLocaleString()}</div>
            </div>
        `;
    }).join('');

    subtotalEl.textContent = `EGP ${subtotal.toLocaleString()}`;
    updateFinalTotal();
}

function calculateTotal(cart) {
    return cart.reduce((total, item) => total + ((parseFloat(item.price) || 0) * (parseInt(item.quantity) || 0)), 0);
}

window.selectDelivery = function(el) {
    document.querySelectorAll('.delivery-opt').forEach(opt => opt.classList.remove('selected'));
    el.classList.add('selected');
    el.querySelector('input').checked = true;
    
    const priceText = el.querySelector('.opt-price').textContent;
    if (priceText.toLowerCase() === 'free') {
        deliveryFee = 0;
    } else {
        deliveryFee = parseInt(priceText.replace('EGP ', '').replace(',', ''));
    }
    
    const deliveryEl = document.querySelector('.sum-row:nth-last-child(2) .v');
    if (deliveryEl) {
        deliveryEl.textContent = deliveryFee === 0 ? 'Free' : `EGP ${deliveryFee}`;
        deliveryEl.className = deliveryFee === 0 ? 'v free' : 'v';
    }
    
    updateFinalTotal();
};

function updateFinalTotal() {
    const cart = DH_STORAGE.get('dh_cart') || [];
    const subtotal = calculateTotal(cart);
    const totalEl = document.querySelector('.sum-total span:last-child');
    if (totalEl) {
        totalEl.textContent = `EGP ${(subtotal + deliveryFee).toLocaleString()}`;
    }
}

window.switchPay = function(method, el) {
    document.querySelectorAll('.pay-tab').forEach(tab => tab.classList.remove('active'));
    el.classList.add('active');
    
    document.getElementById('pay-card').style.display = method === 'card' ? 'block' : 'none';
    document.getElementById('pay-fawry').style.display = method === 'fawry' ? 'block' : 'none';
    document.getElementById('pay-cod').style.display = method === 'cod' ? 'block' : 'none';
};
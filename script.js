// تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    const preloader = document.querySelector('.preloader');
    setTimeout(() => {
        preloader.style.opacity = '0';
        setTimeout(() => preloader.style.display = 'none', 500);
    }, 1000);
});

// القائمة الجانبية للسلة
const cartBtn = document.querySelector('.menu-btn');
const cartSidebar = document.querySelector('.cart-sidebar');

cartBtn.addEventListener('click', () => {
    cartSidebar.classList.toggle('active');
});

// إضافة الأصناف إلى السلة
document.querySelectorAll('.add-to-cart').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const item = e.target.closest('.item');
        const name = item.querySelector('h3').textContent;
        const price = item.querySelector('.price').textContent;
        
        addToCart(name, price);
        showToast(`تمت إضافة ${name} إلى السلة`);
    });
});

function addToCart(name, price) {
    const cartItems = document.querySelector('.cart-items');
    const total = document.querySelector('.total-price');
    
    const item = document.createElement('div');
    item.className = 'cart-item';
    item.innerHTML = `
        <span>${name}</span>
        <span>${price}</span>
        <button class="remove-item">حذف</button>
    `;
    
    cartItems.appendChild(item);
    updateTotal();
}

function updateTotal() {
    const items = document.querySelectorAll('.cart-item');
    let total = 0;
    
    items.forEach(item => {
        const price = parseFloat(item.querySelector('span:nth-child(2)').textContent);
        total += price;
    });
    
    document.querySelector('.total-price').textContent = `${total} ريال`;
}

function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'slideIn 0.5s ease reverse';
        setTimeout(() => toast.remove(), 500);
    }, 2000);
}

// إتمام الطلب
document.querySelector('.checkout').addEventListener('click', () => {
    const items = document.querySelectorAll('.cart-item');
    if (items.length === 0) {
        showToast('السلة فارغة!请选择 بعض الأصناف');
        return;
    }
    
    // هنا يمكنك إضافة منطق إتمام الطلب
    showToast('تم إرسال طلبك بنجاح!');
    document.querySelector('.cart-items').innerHTML = '';
    updateTotal();
});
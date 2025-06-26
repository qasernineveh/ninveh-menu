// حركة الخلفية مع تحريك الماوس (parallax)
const futuristicBg = document.querySelector('.futuristic-bg');
window.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    futuristicBg.style.backgroundPosition = `
      calc(65% + ${x * 30}px) calc(72% + ${y * 30}px),
      calc(30% + ${x * 20}px) calc(20% + ${y * 20}px),
      110deg
    `;
});

// تأثير 3D على البطاقة مع تحريك الماوس داخلها
document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left; 
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * 10;
        const rotateY = ((x - centerX) / centerX) * 10;

        card.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'rotateX(0) rotateY(0) scale(1)';
    });
});

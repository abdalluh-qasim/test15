// الحصول على عناصر HTML
const themeButton = document.getElementById('themeButton');
const body = document.body;

// التبديل بين الوضع النهاري والليلي
themeButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // تغيير الأيقونة حسب الوضع
    if (body.classList.contains('dark-mode')) {
        themeButton.textContent = '☀️'; // أيقونة النهار
    } else {
        themeButton.textContent = '🌙'; // أيقونة الليل
    }
});

const fs = require('fs');

// Список прикольных крипто-цитат
const quotes = [
    "«Бычий рынок близок, главное — не сливать свои щиткоины.» — Анонимный хомяк",
    "«Крипта — это единственное место, где можно стать миллионером и бомжом за один день.»",
    "«Если код работает, лучше его не трогать. Особенно в смарт-контрактах.»",
    "«В Web3 мы доверяем коду, а не людям. Но код пишут люди, так что мы снова в тупике.»",
    "«DYOR (Делай собственное исследование) — главное правило, которое все игнорируют.»",
    "«Опять фиксить баги, которые я сам же и создал вчера...»",
    "«Заскамить скамера — это не преступление, это децентрализованное правосудие.»",
    "«Пока ты спишь, где-то создается новый блок в сети Ethereum.»"
];

function updateProfile() {
    // Выбираем случайную цитату
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    const timestamp = new Date().toLocaleDateString('ru-RU');

    // Формируем красивый блок
    const newContent = `
### 💬 Web3 Мысль Дня
> ${randomQuote}  
> _Обновлено: ${timestamp}_
`;

    // Читаем файл профиля
    let readme = fs.readFileSync('README.md', 'utf8');
    
    // Заменяем текст между тегами
    const regex = /<!-- QUOTE_START -->[\s\S]*<!-- QUOTE_END -->/;
    readme = readme.replace(regex, `<!-- QUOTE_START -->\n${newContent}\n<!-- QUOTE_END -->`);
    
    // Записываем обратно
    fs.writeFileSync('README.md', readme);
    console.log('Готово! Цитата обновлена.');
}

updateProfile();

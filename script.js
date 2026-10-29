// Впиши сюда свой Telegram-юзернейм без символа @
const TELEGRAM_USERNAME = "@aaquath";

document.addEventListener("DOMContentLoaded", () => {
    // 1. Автоматически проставляем прямую ссылку на Telegram во все кнопки
    const tgLinks = document.querySelectorAll(".tg-link");

    tgLinks.forEach((link) => {
        const service = link.getAttribute("data-service") || "Обсуждение проекта";
        const message = Здравствуйте, команда UPNEX!\nИнтересует: ${service}.\nРасскажите подробнее по срокам и деталям.;
        const encodedText = encodeURIComponent(message);

        link.setAttribute("href", https://t.me/${TELEGRAM_USERNAME}?text=${encodedText});
    });

    // 2. Spotlight-подсветка карточек при движении мыши
    const spotlightCards = document.querySelectorAll(".spotlight-card");

    document.addEventListener("mousemove", (e) => {
        spotlightCards.forEach((card) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            card.style.setProperty("--mouse-x", ${x}px);
            card.style.setProperty("--mouse-y", ${y}px);
        });
    });
});
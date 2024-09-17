const cardAnimation = (cursorId, cardId) => {
    const cursor = document.getElementById(cursorId);
    const container = document.getElementById(cardId);
    const cursorWidth = cursor.offsetWidth;
    const cursorHeight = cursor.offsetHeight;
    cursor.style.visibility = "hidden";

    container.addEventListener("mouseenter", () => {
        cursor.style.visibility = "visible";
    });

    container.addEventListener("mousemove", (e) => {
        const { left, top, width, height } = container.getBoundingClientRect();
        const offsetX = e.clientX - left - cursorWidth / 2;
        const offsetY = e.clientY - top - cursorHeight / 2;
        cursor.style.transition = "transform .05s ease-in-out";
        cursor.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    });

    container.addEventListener("mouseleave", (e) => {
        cursor.style.visibility = "hidden";
    });
};

document.addEventListener("DOMContentLoaded", function () {
    for (let i = 1; i < 12; i++) {
        let cursorId = `cursor${i}`;
        let cardId = `card${i}`;
        cardAnimation(cursorId, cardId);
    }
});
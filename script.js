const emojiGallery = document.getElementById('emoji-gallery');

const emojis = [
    "&#x1F600;", "&#x1F601;", "&#x1F602;", "&#x1F603;",
    "&#x1F604;", "&#x1F605;", "&#x1F606;", "&#x1F607;",
    "&#x1F608;", "&#x1F609;", "&#x1F60A;", "&#x1F60B;"
];

emojis.forEach(emoji => {
    const emojiItem = document.createElement('div');
    emojiItem.classList.add('emoji-item');
    emojiItem.innerHTML = '${emoji} ${emoji.codePointAt(0).toString(16).toUpperCase()}';
    emojiGallery.appendChild(emojiItem);
});

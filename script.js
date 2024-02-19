const emojis = [
  { emoji: "&#x1F600;", code: "128512" },
  { emoji: "&#x1F60D;", code: "128525" },
  { emoji: "&#x1F618;", code: "128536" },
  { emoji: "&#x1F92D;", code: "129333" },
  { emoji: "&#x1F605;", code: "128517" },
  { emoji: "&#x1F609;", code: "128521" },
  { emoji: "&#x1F60B;", code: "128523" },
  { emoji: "&#x1F602;", code: "128514" },
  { emoji: "&#x1F622;", code: "128546" },
  { emoji: "&#x1F914;", code: "129300" },
  { emoji: "&#x1F60E;", code: "128526" },
  { emoji: "&#x1F609;", code: "128521" },
  { emoji: "&#x1F604;", code: "128516" },
  { emoji: "&#x1F60A;", code: "128522" },
  { emoji: "&#x1F62D;", code: "128557" },
  { emoji: "&#x1F44D;", code: "128077" },
  { emoji: "&#x1F44C;", code: "128076" },
  { emoji: "&#x1F525;", code: "128293" },
  { emoji: "&#x1F60C;", code: "128524" },
  { emoji: "&#x1F634;", code: "128564" },
];

const emojiGallery = document.getElementById("emoji-gallery");

emojis.forEach((emoji) => {
  const emojiItem = document.createElement("div");
  emojiItem.classList.add("emoji-item");
  emojiItem.innerHTML = `
    <p style="font-size: 2rem;">${emoji.emoji}</p>
    <code>${emoji.code}</code>
  `;
  emojiGallery.appendChild(emojiItem);
});

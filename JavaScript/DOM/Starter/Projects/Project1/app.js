const emojis = [
  "😆",
  "😅",
  "🤣",
  "😂",
  "😀",
  "🤑",
  "🤨",
  "🙂",
  "😊",
  "😗",
  "😛",
  "😏",
  "🤥",
  "😴",
  "🥺",
  "😧",
  "😇",
  "😳",
  "🙃",
  "🥴",
  "🧐",
  "🤨",
  "😒",
  "🤔",
  "🤭",
  "🥰",
  "🤐",
  "😄",
  "🤔",
  "🤪",
  "🥲",
  "😃",
  "😁",
  "😬",
];


const btn = document.querySelector("#emoji");


btn.addEventListener("mouseover",()=>{
    btn.innerHTML = emojis[Math.floor(Math.random()*emojis.length)];
});

numbers

numbers
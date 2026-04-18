function stringToColor(str) {
  let hash = 0;

  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }

  let r = (hash >> 0) & 255;
  let g = (hash >> 8) & 255;
  let b = (hash >> 16) & 255;

  return { r, g, b };
}

function getLuminance(r, g, b) {
  return (0.299 * r + 0.587 * g + 0.114 * b);
}

// récupère le prénom depuis l’URL
const path = window.location.pathname;
const parts = window.location.pathname.split("/").filter(Boolean);
const name = parts[parts.length - 1] || "default";

const { r, g, b } = stringToColor(name);
const color = `rgb(${r}, ${g}, ${b})`;

document.body.style.background = color;

// texte noir ou blanc selon contraste
const luminance = getLuminance(r, g, b);
const textColor = luminance > 140 ? "black" : "white";

document.getElementById("text").innerText = `#${name}`;
document.getElementById("text").style.color = textColor;

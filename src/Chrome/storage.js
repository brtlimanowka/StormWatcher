const iframe = document.getElementById("gsft_main").contentWindow.document;
const dur = iframe.getElementsByTagName("p");
for (let i = 0; i < dur.length; i++) { dur[i].style.backgroundColor = "#ff00ff" };

const hur = document.getElementsByTagName("p");
for (let i = 0; i < hur.length; i++) { hur[i].style.backgroundColor = "#f17104" };
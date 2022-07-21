const main = document.querySelector("main");
//creation d'element HTML avec javaScript
const img = document.createElement("img");
img.id = "monImage";
img.src = "https://static.miraheze.org/bluearchivewiki/thumb/a/a9/Hoshino.png/266px-Hoshino.png"
img.alt = "Takanashi Hoshino";
//j'utilise un parent (main) et la fonction
//prepend pour ajouter mon élément img
//en debut de parent
main.prepend(img);

const divRose = document.createElement("div");
divRose.id = "maDivRose"
divRose.style.width = "100px";
divRose.style.height = "100px";
divRose.style.backgroundColor = "pink";
main.append(divRose);
let caixaTenis = document.getElementById("caixaTenis");
let imagemFrente = document.getElementById("imagemFrente");
let imagemTras = document.getElementById("imagemTras");

function rodarDireita() {
    caixaTenis.style.transform = "rotateY(180deg)";
    imagemFrente.style.left = "650px";
    imagemTras.style.left = "20px";
    imagemFrente.style.transform = "rotate(-30deg)"
    imagemTras.style.transform = "rotate(0deg)"
}

function rodarEsquerda() {
    caixaTenis.style.transform = "rotateY(0deg)";
    imagemFrente.style.left = "20px";
    imagemTras.style.left = "-650px";
    imagemFrente.style.transform = "rotate(0deg)"
    imagemTras.style.transform = "rotate(-30deg)"
}
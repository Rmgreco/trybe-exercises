let a = "dsv";
a = a.toLowerCase();
console.log(a);
switch (a) {
    case "rei":
        console.log("todas as direçoes");
        break;
    case "rainha":
        console.log("todas as direçoes sem limites");
        break;
    case "bisbo":
        console.log("diagonal");
        break;
    case "cavalo":
        console.log("Em L");
        break;
    case "torre":
        console.log("Vertical ou horizontal");
        break;
    case "peao":
        console.log("Pra frente");
        break;
    default:
        console.log("peça inválida");
}

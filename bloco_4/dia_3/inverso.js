let n = 5;
let txt = "";
for (let linha = 1; linha <= n; linha += 1) {
    let txt = "";
    for (let coluna = 1; coluna <= n; coluna += 1) {
        if (coluna <= n - linha) {
            txt = txt + " ";
        }
        else {
            txt = txt + "*";
        }
    }
    console.log(txt);
}
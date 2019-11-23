"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function encriptar(frase) {
    var cadenaOriginal = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", ".", "{", "}", "[", "]", '`', ",", "_", "\\", ":"];
    var cadenaEncriptado = ["0z1", "0w1", "0x1", "0y1", "0f1", "0t1", "0g1", "0u1", "0d1", "0v1", "0b1", "0c1", "0s1", "0q1", "0e1", "0i1", "0p1", "0o1", "0n1", "0m1", "0a1", "0h1", "0l1", "0k1", "0r1", "0j1", "0z1", "0w1", "0x1", "0y1", "0f1", "0t1", "0g1", "0u1", "0d1", "0v1", "0b1", "0c1", "0s1", "0q1", "0e1", "0i1", "0p1", "0o1", "0n1", "0m1", "0a1", "0h1", "0l1", "0k1", "0r1", "0j1", "ert", "qws", "asd", "sdf", "dfg", "bhg", "njh", "rtg", "loi", "mki", "poi", "ytr", "jyy", "tyu", "erf", "gyu", "lpu", "mjk", "sgk", "plw"];
    var encriptado = "";
    for (var i = 0; i < frase.length; i++) {
        encriptado = encriptado + cadenaEncriptado[cadenaOriginal.indexOf(frase[i])];
    }
    return encriptado;
}
exports.encriptar = encriptar;
function desencriptar(frase) {
    var cadenaOriginal = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", ".", "{", "}", "[", "]", '`', ",", "_", "\\", ":"];
    var cadenaEncriptado = ["0z1", "0w1", "0x1", "0y1", "0f1", "0t1", "0g1", "0u1", "0d1", "0v1", "0b1", "0c1", "0s1", "0q1", "0e1", "0i1", "0p1", "0o1", "0n1", "0m1", "0a1", "0h1", "0l1", "0k1", "0r1", "0j1", "0z1", "0w1", "0x1", "0y1", "0f1", "0t1", "0g1", "0u1", "0d1", "0v1", "0b1", "0c1", "0s1", "0q1", "0e1", "0i1", "0p1", "0o1", "0n1", "0m1", "0a1", "0h1", "0l1", "0k1", "0r1", "0j1", "ert", "qws", "asd", "sdf", "dfg", "bhg", "njh", "rtg", "loi", "mki", "poi", "ytr", "jyy", "tyu", "erf", "gyu", "lpu", "mjk", "sgk", "plw"];
    var encriptado = "";
    for (var i = 0; i < frase.length; i = i + 3) {
        encriptado = encriptado + cadenaOriginal[cadenaEncriptado.indexOf(frase[i] + frase[i + 1] + frase[i + 2])];
    }
    return encriptado;
}
exports.desencriptar = desencriptar;
function encriptarclave(clave) {
    var cadenaOriginal = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefrgihklmnopqstuvwxyz1234567890 .j";
    var cadenaEncriptado = "|°!#$%&/()=?><}~ÇüéâäàåçêëèïîìÄÅÉæÆôöòÿÖÜø£×ƒáíóúñÑª¿®¦ÁÂÀ©+ãÃ.j";
    var charPassword = clave.split('');
    var encriptado = "";
    for (var i = 0; i < charPassword.length; i++) {
        encriptado = encriptado + cadenaEncriptado[cadenaOriginal.indexOf(charPassword[i])];
    }
    return encriptado;
}
exports.encriptarclave = encriptarclave;
function desencriptarclave(clave) {
    var cadenaOriginal = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefrgihklmnopqstuvwxyz1234567890 .j";
    var cadenaEncriptado = "|°!#$%&/()=?><}~ÇüéâäàåçêëèïîìÄÅÉæÆôöòÿÖÜø£×ƒáíóúñÑª¿®¦ÁÂÀ©+ãÃ.j";
    var charPassword = clave.split('');
    var encriptado = "";
    for (var i = 0; i < charPassword.length; i++) {
        encriptado = encriptado + cadenaOriginal[cadenaEncriptado.indexOf(charPassword[i])];
    }
    return encriptado;
}
exports.desencriptarclave = desencriptarclave;

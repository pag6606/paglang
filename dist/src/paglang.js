'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = nuevoLenguaje;
function nuevoLenguaje(str) {
    var translation = str;
    //si la palabra termina en ar se le quitan dos utimos aracteres
    if (str.toLowerCase().endsWith("ar")) {
        translation = str.slice(0, -2);
    }
    //si la palabra inicia con z se le añade p al final
    if (str.toLowerCase().startsWith('z')) {
        translation = str + 'pe';
    }
    // si la palabra tiene 10 o mas letras vva guion al medio
    if (translation.length >= 10) {
        var mitad1 = translation.slice(0, Math.round(translation.length / 2));
        var mitad2 = translation.slice(Math.round(translation.length / 2));
        translation = mitad1 + '-' + mitad2;
    }
    // si es palindromo  se intercala mayusuculas y minusculas 
    var reverse = function reverse(str) {
        return str.split('').reverse().join('');
    };
    function minMay(str) {
        var length = str.length;
        var translation = '';
        var capitalize = true;
        for (var i = 0; i < length; i++) {
            var char = str.charAt(i);
            translation += capitalize ? char.toUpperCase() : char.toLowerCase();
            capitalize = !capitalize;
        }
        return translation;
    }
    if (str == reverse(str)) {
        return minMay(str);
    }
    return translation;
}
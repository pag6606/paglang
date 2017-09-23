export default function paglang(str) {
    let translation = str;
    //si la palabra termina en ar se le quitan dos utimos aracteres
    if(str.toLowerCase().endsWith("ar")){
        translation = str.slice(0,-2);
    }
    //si la palabra inicia con z se le añade p al final
    if (str.toLowerCase().startsWith('z')){
        translation = str + 'pe'
    }
    // si la palabra tiene 10 o mas letras vva guion al medio
    if (translation.length >=10){
        const mitad1 = translation.slice(0, Math.round(translation.length/2))
        const mitad2 = translation.slice(Math.round(translation.length/2))
        translation =  `${mitad1}-${mitad2}`
    }
    // si es palindromo  se intercala mayusuculas y minusculas 
    const reverse = (str) => str.split('').reverse().join('');
    function minMay(str){
        const length = str.length;
        let translation =''
        let capitalize = true
        for(let i=0; i< length;i++){
            const char  = str.charAt(i);
            translation += capitalize  ? char.toUpperCase(): char.toLowerCase()
            capitalize = !capitalize
        }
        return translation
    }
    if (str == reverse(str)){
       return  minMay(str)
    }
    return translation
}

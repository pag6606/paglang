
const expect = require('chai').expect
const nuevolenguaje = require('..').default
describe('#nuevolenguaje', function(){
    it('si la palabra termina en ar se le quitan dos utimos caracteres', function(){
        const translation= nuevolenguaje("Programar")
        expect(translation).to.equal("Program")
    })
    it('si la palabra inicia con z se le añade p al final', function(){
        const translation= nuevolenguaje("Zorro")
        expect(translation).to.equal("Zorrope")
    })
    it('si la palabra tiene 10 o mas letras vva guion al medio', function(){
        const translation= nuevolenguaje("Zorro")
        expect(translation).to.equal("Zorrope")
    })
    it('si es palindromo  se intercala mayusuculas y minusculas', function(){
        const translation= nuevolenguaje("sometemos")
        expect(translation).to.equal("SoMeTeMoS")      
    })
    it('Si la palabra traducida tiene 10 o mas se divide en dos con un guión', function(){
        const translation= nuevolenguaje("abecedario")
        expect(translation).to.equal("abece-dario")      
    })
})
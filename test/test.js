
const expect = require('chai').expect
const paglang = require('..').default
describe('#paglang', function(){
    it('si la palabra termina en ar se le quitan dos utimos caracteres', function(){
        const translation= paglang("Programar")
        expect(translation).to.equal("Program")
    })
    it('si la palabra inicia con z se le añade p al final', function(){
        const translation= paglang("Zorro")
        expect(translation).to.equal("Zorrope")
    })
    it('si la palabra tiene 10 o mas letras vva guion al medio', function(){
        const translation= paglang("Zorro")
        expect(translation).to.equal("Zorrope")
    })
    it('si es palindromo  se intercala mayusuculas y minusculas', function(){
        const translation= paglang("sometemos")
        expect(translation).to.equal("SoMeTeMoS")      
    })
    it('Si la palabra traducida tiene 10 o mas se divide en dos con un guión', function(){
        const translation= paglang("abecedario")
        expect(translation).to.equal("abece-dario")      
    })
})
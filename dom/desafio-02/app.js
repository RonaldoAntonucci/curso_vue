new Vue({
    el: '#desafio',
    data: {
        valor: '',
    },
    methods: {
        exibirAlerta(){
            alert('Estou te alertando!');
        },
        changeValue(v){
            this.valor = v;
        }
    }
})
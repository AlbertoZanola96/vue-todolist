Vue.config.devtools = true;
var app = new Vue ({
    el: '#root',
    data: {
        newToDo: '',
        toDos: [
            {
                do: 'fare i compiti',
                checked: false,
            },
            {
                do: 'fare la spesa',
                checked: true,
            },
            {
                do: 'fare il bucato',
                checked: false,
            },
        ],
    },
    methods: {
        addToDo() {
            if(this.newToDo != '') {
                this.toDos.push(this.newToDo);
                this.newToDo = "";
            }
        },
        deleteToDo(index) {
            this.toDos.splice(index, 1); // splice per rimuovere un elemento 
        }
    }
})
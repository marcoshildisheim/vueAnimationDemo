const app = Vue.createApp({
    data() {
        return {
            newWord: '',
            words: [
                'Circle',
                'Square',
                'Lines',
                'Ripples',
                'Triangles'
            ]
        }
    },

    methods: {
        addWord() {
            this.words.push(this.newWord)
            this.newWord = ''
        }
    }
})

app.component('individual-word', {
    template:
    `<li>{{ wordpost }}</li>`,
    props: ['wordpost']
})
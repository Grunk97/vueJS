const app = Vue.createApp({
    data() {
        return {
            drum1: 'images/tom1.png',
            drum2: 'images/tom2.png',
            drum3: 'images/tom3.png',
            drum4: 'images/tom4.png',
            drum5: 'images/crash.png',
            drum6: 'images/kick.png',
            drum7: 'images/snare.png',
            name:''
        }
    },

    methods: {
        playSound (sound) {
            if(sound) {
                var audio = new Audio(sound);
                audio.play();
            }
        }
    },

    computed: {

    },
})


app.mount('#app')


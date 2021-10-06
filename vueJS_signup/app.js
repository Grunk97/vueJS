const app = Vue.createApp({
    data() {
        return {
            navn: '', 
            email: '',
            password: '',
            repassword: '',
            telefon: '',
            adresse: '',
            postnummer: '',

            navnError: '',
            emailError: '',
            passwordError: '',
            repasswordError: '',
            telefonError: '',
            adresseError: '',
            postnummerError: '',
            

        }
    },

    methods: {
        accSubmit(){
            this.navnError = this.navn.length > 1 ?
             '' : 'Navnet skal være længere end et bogstav'

            this.passwordError = this.password.length > 5 ?
             '' : 'Password skal minimum være 6 karaktere lang'

            if(this.repassword != this.password) {
                this.repasswordError = 'Password er ikke ens'
            } else {
                this.repasswordError = ''
            }

            this.telefonError = this.telefon >= 10000000 && this.telefon <= 99999999 ?
             '' : 'Telefon nummeret skal indeholde 8 tal'

            this.adresseError = this.adresse.length > 5 ?
             '' : 'Adressen skal indehold vejnavn og vejnummer'

            this.postnummerError = this.postnummer.length == 4 ?
             '' : 'Postnummeret skal indeholde 4 tal'

            if(!this.passwordError) {
                console.log('navn:', this.navn)
                console.log('email:', this.email)
                console.log('password:', this.password)
                console.log('repassword:', this.repassword)
                console.log('telefon:', this.telefon)
                console.log('adresse:', this.adresse)
                console.log('postnummer:', this.postnummer)
            }
        }
    },

    computed: {

    },
})


app.mount('#app')
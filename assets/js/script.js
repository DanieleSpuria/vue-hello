const {createApp} = Vue;

createApp({
  data() {
    return{
      messaggio: 'Hello Vue!!',
      immagine: 'assets/img/vue.png'
    }
  }
}).mount('#app');
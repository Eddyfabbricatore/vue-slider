const {createApp} = Vue;

createApp({
  data(){
    return{
      imgsInfo: [
        {
          title: 'Marvel\'s Spiderman Miles Morale',
          text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.'
        },
        {
          title: 'Ratchet & Clank: Rift Apart',
          text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.'
        }, 
        {
            title: 'Fortnite',
            text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos."
        }, 
        {
            title: 'Stray',
            text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city'
        }, 
        {
            title: "Marvel's Avengers",
            text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.'
        }
      ],
      imgsLink: [
        'img/01.webp',
        'img/02.webp',
        'img/03.webp',
        'img/04.webp',
        'img/05.webp',
      ],
      counter: 0,
      timer: null
    }
  },
  methods:{
    prevNext(isNext){
      isNext ? this.counter++ : this.counter--;

      this.overLimit();      
    },
    overLimit(){
      if(this.counter === this.imgsLink.length)  this.counter = 0;

      if(this.counter < 0)  this.counter = this.imgsLink.length - 1;
    },
    startSlider(){
      this.timer = setInterval( () => {
        this.counter++;
  
        this.overLimit();
      }, 3000);
    },
    stopSlider(){
      clearInterval(this.timer);
    }
  },
  mounted(){
    this.startSlider();
  }
}).mount('#app');
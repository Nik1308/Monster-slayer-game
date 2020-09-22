const app =  Vue.createApp({
  data(){
    return {
      playerHealth: 100,
      monsterHealth: 100
    };
  },
  computed:{
    monsterBarStyles(){
      return {width: this.monsterHealth + '%'}
    },
    playerBarStyles(){
      return {width: this.playerHealth + '%'}
    },
  },
  methods: {
    attackMonster(){
      console.log("attackMonster",this);
      const attackValue = getAttackValue(5,12);
      this.monsterHealth -= attackValue;
      this.attackPlayer();
    },
    attackPlayer(){
      console.log("attackPlayer",this);
      const attackValue = getAttackValue(8,15);
      this.playerHealth -= attackValue;
    }
  }
});

function getAttackValue(min,max){
  return Math.floor(Math.random() * (max - min)) + min;
}

app.mount('#game');
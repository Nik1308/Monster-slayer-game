const app =  Vue.createApp({
  data(){
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound:0
    };
  },
  computed:{
    monsterBarStyles(){
      if(this.monsterHealth <= 0){
        return {width: '0%'}
      }
      return {width: this.monsterHealth + '%'}
    },
    playerBarStyles(){
      if(this.playerHealth <= 0){
        return {width: '0%'}
      }
      return {width: this.playerHealth + '%'}
    },
    mayUseSpecialAttack(){
      return this.currentRound % 3 !== 0
    }
  },
  watch:{
    playerHealth(value){
      if(value<=0 && this.monsterHealth <=0){
        alert("Game Over!\n It'a draw!")
        this.playerHealth =  100,
        this.monsterHealth = 100,
        this.currentRound = 0
      }else if(value <= 0){
        alert("Game Over!\n You lost")
        this.playerHealth =  100,
        this.monsterHealth = 100,
        this.currentRound = 0
      }
    },
    monsterHealth(value){
      if(value<=0 && this.playerHealth <=0){
        alert("Game Over!\n It'a draw!")
      }else if(value <= 0){
        alert("Game Over!\n You won")
        this.playerHealth =  100,
        this.monsterHealth = 100,
        this.currentRound = 0
      }
    }
  },
  methods: {
    attackMonster(){
      this.currentRound += 1;
      const attackValue = getAttackValue(5,12);
      this.monsterHealth -= attackValue;
      this.attackPlayer();
    },
    attackPlayer(){
      const attackValue = getAttackValue(8,15);
      this.playerHealth -= attackValue;
      
    },
    specialAttackMonster(){
      this.currentRound += 1;
      const attackValue = getAttackValue(10,25);
      this.monsterHealth -= attackValue;
      this.attackPlayer();
    },
    healPlayer(){
      this.currentRound++;
      const healValue = getAttackValue(8,20);
      if(this.playerHealth + healValue > 100){
        this.playerHealth = 100;
      }else{
        this.playerHealth += healValue;
      } 
      this.attackPlayer(); 
    },
    surrender(){
      alert("Game Over!\n You lost")
      this.playerHealth =  100,
      this.monsterHealth = 100,
      this.currentRound = 0
    }
  }
});

function getAttackValue(min,max){
  return Math.floor(Math.random() * (max - min)) + min;
}

app.mount('#game');
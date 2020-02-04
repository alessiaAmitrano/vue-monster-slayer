new Vue({
  el: '#app',
  data: {
    pHealth: 100,
    mHealth: 100,
    isGameOn: false,
    turns: []
  },
  methods: {
    startGame: function() {
      this.isGameOn = true;
      this.pHealth = 100;
      this.mHealth = 100;
      this.turns = [];
    },

    attack: function() {
      var damage = this.calcDamage(3, 10);
      this.mHealth -= damage;
      this.turns.unshift({
        isPlayer: true,
        text: 'Player hits monster for ' + damage + 'pts!'
      });
      if (this.checkWin()) {
        return;
      }
      this.monsterAttacks();
    },

    spAttack: function() {
      var damage = this.calcDamage(10, 20);
      this.mHealth -= damage;
      this.turns.unshift({
        isPlayer: true,
        text: 'Player hits monster HARD for ' + damage + 'pts!'
      });
      if (this.checkWin()) {
        return;
      }
      this.monsterAttacks();
    },

    heal: function() {
      if (this.pHealth <= 90) {
        this.pHealth += 10;
      } else {
        this.pHealth = 100;
      }
      this.turns.unshift({
        isPlayer: true,
        text: 'Player healed!'
      });
      this.monsterAttacks();
    },

    giveUp: function() {
      this.isGameOn = false;
    },

    monsterAttacks: function() {
      var damage = this.calcDamage(5, 12);
      this.pHealth -= damage;
      this.turns.unshift({
        isPlayer: false,
        text: 'Monster hits player for ' + damage + 'pts!'
      });
      this.checkWin();
    },

    calcDamage: function(min, max) {
      return Math.max(Math.floor(Math.random() * max) + 1, min);
    },

    checkWin: function() {
      if (this.mHealth <= 0) {
        if (confirm('you Won! New Game?')) {
          this.startGame();
        } else {
          this.isGameOn = false;
        }
        return;
      } else if (this.pHealth <= 0) {
        if (confirm('you Lost! New Game?')) {
          this.startGame();
        } else {
          this.isGameOn = false;
        }
        return true;
      }
    }
  }
});

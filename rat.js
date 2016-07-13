var Rat = function(name){
  this.name = name;
}

Rat.prototype = {
  health: 20,
  touchFood: function(food){
    food.poison()
  }, 

  attack: function(hero){
    return hero.hit();
  }, 

  hit: function(damage){
    this.health -= (10 + damage)
   if (this.health <= 0){
      return ('Rat dead!');
    }
  }

  // dead: function(){
  //   if (this.health <= 0){
  //     return ('Rat dead!')
  //   }
  // }
}

module.exports = Rat;
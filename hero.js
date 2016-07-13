var Hero = function(name, favouriteFood ) {
  this.name = name;
  this.favouriteFood = favouriteFood;
}

Hero.prototype = {
  health: 100,
  armour: {name: "cloth", protect: 5},
  weapon: {name: "dagger", damage: 0},
  talk: function(){
    return ('My name is ' + this.name);
  },

  eat: function(food){
    if (food.name === this.favouriteFood){
      this.health += food.value * 1.5
    }
    else{
      this.health += food.value
    }
  },

  fixFood: function(food){
    food.fix();
  },

  attack: function(enemy){
    return enemy.hit(this.weapon.damage);
  },

  hit: function(){
    this.health -= (10- this.armour.protect);
    if (this.health <= 0){
      return ("You died!")
    }
  }, 

  equip: function(weapon){
    this.weapon = weapon;
  },

  wear: function(armour){
    this.armour = armour;
  }


}


module.exports = Hero;



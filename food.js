var Food = function(name, value){
  this.name = name;
  this.value = value;
  this.poisoned = false;
}

Food.prototype = {
  poison: function(){
    this.poisoned = true;
    this.value = -this.value;
  },

  fix: function(){
    if (this.poisoned){
    this.poisoned = false;
    this.value = -this.value;
    }
  }  
}

module.exports = Food;
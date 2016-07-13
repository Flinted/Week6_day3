var assert = require('chai').assert;
var Hero = require('../hero.js');
var Food = require('../food.js');
var Rat = require('../rat.js');
var Weapon = require('../weapon.js');
var Armour = require('../armour.js');

describe('Hero', function(){
  beforeEach(function(){
    hero = new Hero('Conan', 'Poptarts');
    food1 = new Food('Poptarts', 10);
    food2 = new Food('Pasta', 25);
    rat1 = new Rat('Roland');
    weapon1 = new Weapon('Sword', 5);
    weapon2 = new Weapon('Axe', 10);
    armour1= new Armour('Leather', 6);
  })

  it('Should have a name', function(){
    assert.equal('Conan', hero.name)
  })

  it('Should have 100 health', function(){
    assert.equal(100, hero.health)
  })

  it('Should have favourite food', function(){
    assert.equal("Poptarts", hero.favouriteFood)
  })

  it('Should talk', function(){
    assert.equal('My name is Conan', hero.talk())
  })

  it('Should increase health from food', function(){
    hero.eat(food2)
    assert.equal(125, hero.health)
  })

  it('Should increase health from favourite food', function(){
    hero.eat(food1)
    assert.equal(115, hero.health)
  })

  it('Should lose health from poisoned food', function(){
    rat1.touchFood(food1)
    hero.eat(food1)
    assert.equal(85, hero.health)
  })

  it('Should fix poisoned food', function(){
    rat1.touchFood(food1);
    hero.fixFood(food1);
    assert.equal(10, food1.value);
    assert.equal(false, food1.poisoned);
  })

  it('Should hurt rat', function(){
    hero.attack(rat1);
    assert.equal(10, rat1.health)
  })

  it('Should kill rat', function(){
    hero.attack(rat1);
    assert.equal("Rat dead!", hero.attack(rat1) )
  })

  it('Should equip weapon', function(){
    hero.equip(weapon1);
    assert.equal("Sword", hero.weapon.name )
  })

  it('Should do extra damage with weapon', function(){
    hero.equip(weapon1);
    hero.attack(rat1);
    assert.equal(5, rat1.health)
  })

  it('Should equip armour', function(){
    hero.wear(armour1);
    assert.equal("Leather", hero.armour.name )
  })

  it('Should take less damage with armour', function(){
    hero.wear(armour1);
    rat1.attack(hero);
    assert.equal(96, hero.health)
  })
})



describe('Food', function(){
  beforeEach(function(){
    food1 = new Food('Poptarts', 5)
    food2 = new Food('Pasta', 25)
  })

  it('Should have a name', function(){
    assert.equal('Poptarts', food1.name)
  })

  it('Should have a value', function(){
    assert.equal(25, food2.value)
  })

  it('Should start unpoisoned', function(){
    assert.equal(false, food1.poisoned)
  })
})



describe('Rat', function(){
  beforeEach(function(){
    rat1 = new Rat('Roland')
    food = new Food('Cheese', 15)
    hero = new Hero('Conan', 'Poptarts');
  })

  it('Should have a name', function(){
    assert.equal('Roland', rat1.name)
  })

  it('Should have health', function(){
    assert.equal(20, rat1.health)
  })

  it('Should poison food', function(){
    rat1.touchFood(food)
    assert.equal(true, food.poisoned)
    assert.equal(-15, food.value)  
  })

  it('Should hurt hero', function(){
    rat1.attack(hero);
    assert.equal(95, hero.health)
  })

  it('Should kill hero', function(){
    hero.health = 5
    assert.equal("You died!", rat1.attack(hero))
  })
})












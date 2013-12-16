Simple_rpg_2_0
==============
This project uses the jQuery library to create a dynamic content HTML document for a simple text based RPG game.

The game includes the following features:

- Character has two different attack actions, a heal skill, a guard skill, and a set of healing potions
- Character has common attributes in RPG games (strength, intelligence, agility, etc) that are used in calculations 
  for the different actions that can be performed during a battle, for example, the str attribute determines the damage
  of an attack, int attribute determines the HP regained when performing a heal, agil determines if an attack lands or
  misses the enemy, etc.
- The game contains three dungeons, each with 3 unique enemies and a Boss
- Current enemy is chosen at random from the 3 dungeon enemies
- Boss fight occurs after defeating 5 enemies in a row in the current Dungeon
- Defeating an enemy results in experience points gained on the character attributes
- Enemies have a similar structure to the game character, capable of performing two different attacks and a heal
- Tougher enemies require you to defeat enough enemies to boost up the character attributes in order to be able to 
  defeat them.

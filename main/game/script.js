new Vue({
  el: '#app',
  data: {
    beginning: false,
    userAttacking: false,
    userAttackName: '',
    enemyAttacking: false,
    enemyAttackName: '',
    userHeal: false,
    userWait: false,
    selected: {
      player: {
        name: '',
        image: ''
      },
      monster: {
        name: '',
        image: '',
        types: [],
        attacks: [],
        hp: 300
      }
    },
    opponent: {
      player: {
        name: '',
        image: ''
      },
      monster: {
        name: '',
        image: '',
        types: [],
        attacks: [],
        hp: 300
      }
    },
    players: [
      {
        name: 'Youngster',
        image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/724333/player.png',
      },
      {
        name: 'Lass',
        image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/724333/player-1.png'
      }
    ],
    monsters: [
      {
        name: 'Bulbasaur',
        image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/724333/bullbasaur.png',
        types: ['grass', 'poison',],
        attacks: [
          {
            name: 'Tackle',
            moveType: 'normal',
            category: 'normal',
            power: 40,
            accuracy: 100
          },
          {
            name: 'Vine Whip',
            moveType: 'grass',
            category: 'special',
            power: 45,
            accuracy: 100
          },
          {
            name: 'Razor Leaf',
            moveType: 'grass',
            category: 'special',
            power: 55,
            accuracy: 95
          },
          {
            name: 'Solar Beam',
            moveType: 'grass',
            category: 'special',
            power: 120,
            accuracy: 100
          }
        ]
      },
      {
        name: 'Charmander',
        image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/724333/charmander.png',
        types: ['fire'],
        attacks: [
          {
            name: 'Scratch',
            moveType: 'normal',
            category: 'normal',
            power: 40,
            accuracy: 100
          },
          {
            name: 'Ember',
            moveType: 'fire',
            category: 'special',
            power: 40,
            accuracy: 100
          },
          {
            name: 'Slash',
            moveType: 'normal',
            category: 'normal',
            power: 70,
            accuracy: 100
          },
          {
            name: 'Flamethrower',
            moveType: 'fire',
            category: 'special',
            power: 90,
            accuracy: 100
          }
        ]
      },
      {
        name: 'Squirtle',
        image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/724333/squirtle.png',
        types: ['water'],
        attacks: [
          {
            name: 'Tackle',
            moveType: 'normal',
            category: 'normal',
            power: 40,
            accuracy: 100
          },
          {
            name: 'Bubble',
            moveType: 'water',
            category: 'special',
            power: 40,
            accuracy: 100
          },
          {
            name: 'Bite',
            moveType: 'dark',
            category: 'special',
            power: 60,
            accuracy: 100
          },
          {
            name: 'Hydro Pump',
            moveType: 'water',
            category: 'special',
            power: 110,
            accuracy: 80
          }
        ]
      },
      {
        name: 'Caterpie',
        image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/724333/caterpie.png',
        types: ['bug'],
        attacks: [
          {
            name: 'Tackle',
            moveType: 'normal',
            category: 'normal',
            power: 40,
            accuracy: 100
          }
        ]
      },
      {
        name: 'Weedle',
        image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/724333/weedle.png',
        types: ['bug', 'poison'],
        attacks: [
          {
            name: 'Poison Sting',
            moveType: 'normal',
            category: 'normal',
            power: 15,
            accuracy: 100
          }
        ]
      },
      {
        name: 'Pidgey',
        image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/724333/pidgey.png',
        types: ['normal', 'flying'],
        attacks: [
          {
            name: 'Gust',
            moveType: 'flying',
            category: 'normal',
            power: 40,
            accuracy: 100
          },
          {
            name: 'Quick Attack',
            moveType: 'normal',
            category: 'normal',
            power: 40,
            accuracy: 100
          },
          {
            name: 'Wing Attack',
            moveType: 'flying',
            category: 'normal',
            power: 60,
            accuracy: 100
          }
        ]
      },
      {
        name: 'Rattata',
        image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/724333/rattata.png',
        types: ['normal'],
        attacks: [
          {
            name: 'Tackle',
            moveType: 'normal',
            category: 'normal',
            power: 40,
            accuracy: 100
          },
          {
            name: 'Quick Attack',
            moveType: 'normal',
            category: 'normal',
            power: 40,
            accuracy: 100
          },
          {
            name: 'Hyper Fang',
            moveType: 'normal',
            category: 'normal',
            power: 80,
            accuracy: 90
          }
        ]
      },
      {
        name: 'Pikachu',
        image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/724333/pikachu-2.png',
        types: ['electric'],
        attacks: [
          {
            name: 'Thunder Shock',
            moveType: 'electric',
            category: 'special',
            power: 40,
            accuracy: 100
          },
          {
            name: 'Quick Attack',
            moveType: 'normal',
            category: 'normal',
            power: 40,
            accuracy: 100
          },
          {
            name: 'Swift',
            moveType: 'normal',
            category: 'normal',
            power: 60,
            accuracy: 100
          },
          {
            name: 'Thunder',
            moveType: 'electric',
            category: 'special',
            power: 110,
            accuracy: 70
          }
        ]
      },
      {
        name: 'Jigglypuff',
        image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/724333/jigglypuff.png',
        types: ['normal', 'fairy'],
        attacks: [
          {
            name: 'Pound',
            moveType: 'normal',
            category: 'normal',
            power: 40,
            accuracy: 100
          },
          {
            name: 'Double Slap',
            moveType: 'normal',
            category: 'normal',
            power: 15,
            accuracy: 85
          },
          {
            name: 'Body Slam',
            moveType: 'normal',
            category: 'normal',
            power: 85,
            accuracy: 100
          },
          {
            name: 'Double-Edge',
            moveType: 'normal',
            category: 'normal',
            power: 120,
            accuracy: 100
          }
        ]
      },
      {
        name: 'Zubat',
        image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/724333/zubat.png',
        types: ['poison', 'flying'],
        attacks: [
          {
            name: 'Leech Life',
            moveType: 'bug',
            category: 'normal',
            power: 20,
            accuracy: 100
          },
          {
            name: 'Bite',
            moveType: 'dark',
            category: 'special',
            power: 60,
            accuracy: 100
          },
          {
            name: 'Wing Attack',
            moveType: 'flying',
            category: 'normal',
            power: 60,
            accuracy: 100
          }
        ]
      },
      {
        name: 'Venonat',
        image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/724333/venonat.png',
        types: ['bug', 'poison'],
        attacks: [
          {
            name: 'Tackle',
            moveType: 'normal',
            category: 'normal',
            power: 40,
            accuracy: 100
          },
          {
            name: 'Leech Life',
            moveType: 'bug',
            category: 'normal',
            power: 20,
            accuracy: 100
          },
          {
            name: 'Psybeam',
            moveType: 'psychic',
            category: 'special',
            power: 65,
            accuracy: 100
          },
          {
            name: 'Psychic',
            moveType: 'psychic',
            category: 'special',
            power: 90,
            accuracy: 100
          }
        ]
      },
      {
        name: 'Meowth',
        image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/724333/meowth.png',
        types: ['normal'],
        attacks: [
          {
            name: 'Scratch',
            moveType: 'normal',
            category: 'normal',
            power: 40,
            accuracy: 100
          },
          {
            name: 'Bite',
            moveType: 'normal',
            category: 'normal',
            power: 60,
            accuracy: 100
          },
          {
            name: 'Payday',
            moveType: 'normal',
            category: 'normal',
            power: 40,
            accuracy: 100
          },
          {
            name: 'Slash',
            moveType: 'normal',
            category: 'normal',
            power: 70,
            accuracy: 100
          }
        ]
      },
      {
        name: 'Psyduck',
        image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/724333/psyduck.png',
        types: ['water'],
        attacks: [
          {
            name: 'Scratch',
            moveType: 'normal',
            category: 'normal',
            power: 40,
            accuracy: 100
          },
          {
            name: 'Confusion',
            moveType: 'psychic',
            category: 'special',
            power: 50,
            accuracy: 100
          },
          {
            name: 'Fury Swipes',
            moveType: 'normal',
            category: 'normal',
            power: 18,
            accuracy: 80
          },
          {
            name: 'Hydro Pump',
            moveType: 'water',
            category: 'special',
            power: 110,
            accuracy: 80
          }
        ]
      },
      {
        name: 'Mankey',
        image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/724333/mankey.png',
        types: ['fighting'],
        attacks: [
          {
            name: 'Scratch',
            moveType: 'normal',
            category: 'normal',
            power: 40,
            accuracy: 100
          },
          {
            name: 'Karate Chop',
            moveType: 'fighting',
            category: 'normal',
            power: 50,
            accuracy: 100
          },
          {
            name: 'Fury Swipes',
            moveType: 'normal',
            category: 'normal',
            power: 18,
            accuracy: 80
          },
          {
            name: 'Thrash',
            moveType: 'normal',
            category: 'normal',
            power: 120,
            accuracy: 100
          }
        ]
      },
      {
        name: 'Bellsprout',
        image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/724333/bellsprout.png',
        types: ['grass', 'poison'],
        attacks: [
          {
            name: 'Vine Whip',
            moveType: 'grass',
            category: 'special',
            power: 45,
            accuracy: 100
          },
          {
            name: 'Acid',
            moveType: 'poison',
            category: 'normal',
            power: 40,
            accuracy: 100
          },
          {
            name: 'RazorLeaf',
            moveType: 'grass',
            category: 'special',
            power: 55,
            accuracy: 95
          },
          {
            name: 'Slam',
            moveType: 'normal',
            category: 'normal',
            power: 80,
            accuracy: 75
          }
        ]
      },
      {
        name: 'Eevee',
        image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/724333/eevee.png',
        types: ['normal'],
        attacks: [
          {
            name: 'Tackle',
            moveType: 'normal',
            category: 'normal',
            power: 40,
            accuracy: 100
          },
          {
            name: 'Quick Attack',
            moveType: 'normal',
            category: 'normal',
            power: 40,
            accuracy: 100
          },
          {
            name: 'Bite',
            moveType: 'normal',
            category: 'normal',
            power: 60,
            accuracy: 100
          },
          {
            name: 'Take Down',
            moveType: 'normal',
            category: 'normal',
            power: 90,
            accuracy: 85
          }
        ]
      },
      {
        name: 'Snorlax',
        image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/724333/snorlax.png',
        types: ['normal'],
        attacks: [
          {
            name: 'Headbutt',
            moveType: 'normal',
            category: 'normal',
            power: 70,
            accuracy: 100
          },
          {
            name: 'Body Slam',
            moveType: 'normal',
            category: 'normal',
            power: 85,
            accuracy: 100
          },
          {
            name: 'Double-Edge',
            moveType: 'normal',
            category: 'normal',
            power: 120,
            accuracy: 100
          },
          {
            name: 'Hyper Beam',
            moveType: 'normal',
            category: 'normal',
            power: 150,
            accuracy: 90
          }
        ]
      },
      {
        name: 'Dratini',
        image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/724333/dratini.png',
        types: ['dragon'],
        attacks: [
          {
            name: 'Wrap',
            moveType: 'normal',
            category: 'normal',
            power: 15,
            accuracy: 100
          },
          {
            name: 'Slam',
            moveType: 'normal',
            category: 'normal',
            power: 80,
            accuracy: 75
          },
          {
            name: 'Hyper Beam',
            moveType: 'normal',
            category: 'normal',
            power: 150,
            accuracy: 90
          }
        ]
      },
    ]
  },
  computed: {
    opponentName: function () {
      var vm = this;
      var opponentIndex = parseInt(Math.random() * (vm.monsters.length - 1));
      vm.opponent.monster.name = vm.monsters[opponentIndex].name;
      vm.opponent.monster.image = vm.monsters[opponentIndex].image;
      vm.opponent.monster.types = vm.monsters[opponentIndex].types;
      vm.opponent.monster.attacks = vm.monsters[opponentIndex].attacks;
      if (vm.selected.player.name == 'Lass') {
        vm.opponent.player.name = vm.players[0].name;
        vm.opponent.player.image = vm.players[0].image;
        vm.beginning = true;
        setTimeout(function () {
          vm.beginning = false;
        }, 2000);
        return vm.opponent.player.name;
      }
      if (vm.selected.player.name == 'Youngster') {
        vm.opponent.player.name = vm.players[1].name;
        vm.opponent.player.image = vm.players[1].image;
        vm.beginning = true;
        setTimeout(function () {
          vm.beginning = false;
        }, 2000);
        return vm.opponent.player.name;
      }
    },
    hpWidthPlayer: function () {
      var vm = this;
      if (vm.selected.monster.hp <= 0) {
        if (confirm(vm.selected.monster.name + ' fainted!\n' + vm.opponent.player.name + ' won the battle. Do you want to play again?')) {
          window.location.reload(true);
        } else {
          return {width: 0}
        }
      } else {
        return {
          width: parseInt(100 * (vm.selected.monster.hp / 300)) + '%'
        }
      }
    },
    hpWidthOpponent: function () {
      var vm = this;
      if (vm.opponent.monster.hp <= 0) {
        if (confirm('Enemy ' + vm.opponent.monster.name + ' fainted!\n' + 'You won the battle. Do you want to play again?')) {
          window.location.reload(true);
        } else {
          return {width: 0}
        }
      } else {
        return {
          width: parseInt(100 * (vm.opponent.monster.hp / 300)) + '%'
        }
      }
    }
  },
  methods: {
    selectedPlayer: function(event) {
      var vm = this;
      event.currentTarget.classList.add('selected');
      vm.selected.player.name = event.currentTarget.id;
      for (var player in vm.players) {
        if (vm.players[player].name == vm.selected.player.name) {
          vm.selected.player.image = vm.players[player].image;
        }
      }
    },
    selectedMonster: function (event) {
      var vm = this;
      event.currentTarget.classList.add('selected');
      vm.selected.monster.name = event.currentTarget.id;
      for (var monster in vm.monsters) {
        if (vm.monsters[monster].name == vm.selected.monster.name) {
          vm.selected.monster.image = vm.monsters[monster].image;
          vm.selected.monster.types = vm.monsters[monster].types;
          vm.selected.monster.attacks = vm.monsters[monster].attacks;
        }
      }
    },
    attackMove: function (event) {
      var vm = this;
      var attackName = event.currentTarget.id;
      vm.userAttackName = attackName;
      vm.userAttacking = true;
      var userMonster = document.getElementById('player-monster-image');
      var attackDamage;
      for (var attack in vm.selected.monster.attacks) {
        if (vm.selected.monster.attacks[attack].name == attackName) {
          attackDamage = vm.selected.monster.attacks[attack].power;
        }
      }
      userMonster.classList.add('animation-target');
      var opponentMonster = document.getElementById('opponent-monster-image');
      var opponentAttackIndex = parseInt(Math.random() * (vm.opponent.monster.attacks.length - 1));
      var opponentAttackName = vm.opponent.monster.attacks[opponentAttackIndex].name;
      var opponentAttackPower = vm.opponent.monster.attacks[opponentAttackIndex].power;
      vm.enemyAttackName = opponentAttackName;
      setTimeout(function() {
        userMonster.classList.remove('animation-target');
        vm.opponent.monster.hp -= attackDamage;
        vm.userAttacking = false;
      }, 1500);
      setTimeout(function() {
        opponentMonster.classList.add('animation-reverse-target');
        vm.enemyAttacking = true;
      }, 2500);
      setTimeout(function() {
        opponentMonster.classList.remove('animation-reverse-target');
        vm.selected.monster.hp -= opponentAttackPower;
        vm.enemyAttacking = false;
      }, 4000);
    },
    healMove: function (event) {
      var vm = this;
      var attackName = event.currentTarget.id;
      var userMonster = document.getElementById('player-monster-image');
      userMonster.classList.add('healing-glow');
      var opponentMonster = document.getElementById('opponent-monster-image');
      var opponentAttackIndex = parseInt(Math.random() * (vm.opponent.monster.attacks.length - 1));
      var opponentAttackName = vm.opponent.monster.attacks[opponentAttackIndex].name;
      var opponentAttackPower = vm.opponent.monster.attacks[opponentAttackIndex].power;
      vm.enemyAttackName = opponentAttackName;
      vm.userHeal = true;
      setTimeout(function() {
        userMonster.classList.remove('healing-glow');
        vm.selected.monster.hp += 50;
        vm.userHeal = false;
      }, 1500);
      setTimeout(function() {
        opponentMonster.classList.add('animation-reverse-target');
        vm.enemyAttacking = true;
      }, 2500);
      setTimeout(function() {
        opponentMonster.classList.remove('animation-reverse-target');
        vm.selected.monster.hp -= opponentAttackPower;
        vm.enemyAttacking = false;
      }, 4000);
    },
    passMove: function (event) {
      var vm = this;
      var opponentMonster = document.getElementById('opponent-monster-image');
      var opponentAttackIndex = parseInt(Math.random() * (vm.opponent.monster.attacks.length - 1));
      var opponentAttackName = vm.opponent.monster.attacks[opponentAttackIndex].name;
      var opponentAttackPower = vm.opponent.monster.attacks[opponentAttackIndex].power;
      vm.enemyAttackName = opponentAttackName;
      vm.userWait = true;
      setTimeout(function() {
        vm.userWait = false;
      }, 1500);
      setTimeout(function() {
        opponentMonster.classList.add('animation-reverse-target');
        vm.enemyAttacking = true;
      }, 2500);
      setTimeout(function() {
        opponentMonster.classList.remove('animation-reverse-target');
        vm.selected.monster.hp -= opponentAttackPower;
        vm.enemyAttacking = false;
      }, 4000);
    }
  }
});
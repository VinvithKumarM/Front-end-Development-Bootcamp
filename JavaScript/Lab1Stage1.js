
/* Lab1 - Javascript
// var a = confirm("Do you want to play?");
// //console.log("grant wins1");
// if(a === true)
// {
// //  console.log("grant wins2");
//   var user=40;
// var grant=10;
// var d = 1;
// //var w = 3;
// //console.log("grant wins3");
//   var b = prompt("Enter your name");
//   if(b!==null)
//   {
//     while(d<4 && user<=40 && grant<=10)
//     {
//     // var x = user--;
//      user -= Math.floor(Math.random()*2) + 1;
//       console.log( "user has " +user+" health left");
//     //var y = grant--;
//     grant -= Math.floor(Math.random() *2)+1;
//       console.log("grant the mighty chicken has " +grant+" health left ");
//       while(grant<0)
//       {
//       var z =  d++;
//
//         console.log("defeat no "+ z);
//         if(z===3){break;}
//         grant = 10;
//       }
//       while(user<0){
//         user = 40;
//       }
//     }
//       if(z===3)
//       {
//         console.log("Grant is defeated "+ z+ " times. So, user wins");
//       }
//       else{
//         console.log("grant wins");
//       }
//
//   }
//   else{
//   console.log("see you later");
// }
// }
// else{
//   console.log("see you later");
// }

/////////////////////////////////////////////////////////////

/* Lab2 - Apply functions to the above code */
// var user=15;
// var grant=15;
// var d = 1;    // d means number of defeats
//
// function startGame()
// {
//   var a = confirm("Do you want to play?");
//  if(a === true)
//   {
//    var b = prompt("Enter your name");
//            startCombat(b);
//   }
//   else
//   {
//        console.log("See you later");
//    }
// }
//
// function startCombat(b)
// {
//   while(d<4 && user > 0)
//   {
//    var x = prompt("Do you want to 'attack' or 'quit'?? ");
//   if(x.toLowerCase() === 'quit')
//  {
//    console.log("see you later");
//  }
//  if(x.toLowerCase() === 'attack')
//   {
//   user -= getDamage();
//   console.log(b +" has " +user + ' as his health');
//   grant -= getDamage();
//   console.log('grant has ' + grant + ' health');
//   if(grant <= 0)
//   {
//     d++;
//     grant = 15;
//     console.log(` Defeated ${d} times `);
//   }
//   if(user< 0)
//   {
//     user = 15;
//   }
//   if(d === 3)
//   {
//     console.log(b +" wins");
//     break;
//   }
//   if(d< 3 && (user < grant) && user>0 && grant >0)
//   {
//     console.log("grant wins");
//   }
//
//
// }
// else{
//      console.log("Must choose between 'attack' or 'quit'");
//      return;
//     }
// }
// }
//
// function getDamage()
// {
//   return Math.floor(Math.random() *5 ) + 1;
// }
//
// startGame();

//////////////////////////////////////////////////

/* Lab3 - Classes and Methods  */





var a = confirm("Do you want to play?");
if(a === true)
{
 var name = prompt("Enter your name");
 alert("Welcome"+ name);

 var c = prompt("attack, heal or quit??");

 else
 {
      console.log("See you later");
  }

class User
{

  constructor()
  {healRemaining = 2;

     this.name = name;
     this.health = health;
     this.healRemaining = healRemaining;
     this.wins = wins;
   }
      var wins = 0;
  heal()
  {
     this.healRemaining-= 1;
    this.health += Math.floor(Math.random() *10 ) + 1;
  }

  generateAttackDamage()
  {
   return Math.floor(Math.random() *3 ) + 1;
  }
}



class grant extends user
{
  constructor(name, health)
  {
        super(name, health);
        this.name = "John";
        this.health = 10;
  }
  generateAttackDamage()
  {
  return  Math.floor(Math.random() *5 ) + 1;
  }

}

var x = new User();
var y = new grant();

if(c === "attack")
{
  y.health -= x.generateAttackDamage();
  console.log(x.name+" health is"+ y.health+" and wins "+x.wins+" points");
  x.health -= y.generateAttackDamage();
}
else if(c === "heal")
{
  x.heal();
}
else
{
  alert("See you later");
  break;
}

if(y.health === 0)
{
  x.wins++;
  y.health = 10;
}
if (this.healRemaining === 0 )
{
  return ;
}
if(x.wins === 5)
{
  alert(x.name +" wins and " +y.name+" looses game" );
  console.log(x.name +" wins and " +y.name+" looses game");
}

if(x.health === 0 )
{
    console.log(y.name +" wins and " +x.name+" looses game");
}

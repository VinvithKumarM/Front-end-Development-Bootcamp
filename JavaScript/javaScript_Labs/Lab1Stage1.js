var a = confirm("Do you want to play?");
//console.log("grant wins1");
if(a === true)
{
//  console.log("grant wins2");
  var user=40;
var grant=10;
var d = 1;
//var w = 3;
//console.log("grant wins3");
  var b = prompt("Enter your name");
  if(b!==null)
  {
    while(d<4 && user<=40 && grant<=10)
    {
    // var x = user--;
     user -= Math.floor(Math.random()*2) + 1;
      console.log( "user has " +user+" health left");
    //var y = grant--;
    grant -= Math.floor(Math.random() *2)+1;
      console.log("grant the mighty chicken has " +grant+" health left ");
      while(grant<0)
      {
      var z =  d++;

        console.log("defeat no "+ z);
        if(z===3){break;}
        grant = 10;
      }
      while(user<0){
        user = 40;
      }
    }
      if(z===3)
      {
        console.log("Grant is defeated "+ z+ " times. So, user wins");
      }
      else{
        console.log("grant wins");
      }

  }
  else{
  console.log("see you later");
}
}
else{
  console.log("see you later");
}

function calculate(s){

	return ((s*(s+1)) / 2);
    
}
function Prompting(){
	var a = confirm("Do you want to play?");
	if(a == true)
	{
 do{
    var empty = '';
    var b = prompt("Enter a word");
     var c = empty.concat(b);
    var d = confirm("Do you want to play again?");
    if(d == true)
    {
    	for(var i=0; d == true; i++)
    	{
    
   			var e = prompt("Enter a word");
   			var c = c.concat(e);

   			var f = confirm("Do you want to play again?");

   			if(f == false)
    		{
    		document.write(c);
    		break;
    		}

    	}
		break;
	}
  
 }while(a == true)
 }
 	alert("See you later");
 
}


function printname(){
	var a = prompt("would you like to print your name?");

	while(a.length !== 0)
	{
		var a1 = 'Hello.My name is '.concat(a);
		document.write(a1);
		
		var c = confirm("would you like to print your name again?");
		if (c == true)
		{
			for(var i=0; c == true; i++)
			{
			var a1 = a1.concat('!');
			document.write(a1);
			}
		}
		else{
			document.write(a1);
		}
	}
	if(a == null)
	{
		alert("See you later");
	}
}

function Suggestfood(){
var e = document.getElementById("foodid");
 var x = e.options[e.selectedIndex].text;

 if(x == "Morning")
	{alert("Since it is morning, you should be eating breakfast. We suggest egg and toast");}
 else if(x == "Noon")
	{alert("Since it is noon, you should be eating lunch. We suggest a salad");}
 else if(x == "Evening")
	{alert("Since it is evening, you should be eating dinner. We suggest chicken and rice");}
 else
	{ alert("Please select time of day");}
}





























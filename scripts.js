var st="";

function clear()
{
	document.querySelector(".hello").innerHTML="";	
}

oneside_triangle = ()=>
{
	st = "";
	console.log("OGT it");	
	function printn(num) {

		if(num == 0)
			return;

		st+="* ";

		printn(num - 1);
	}


	function pattern(n , i) {
		if (n == 0)
			return;
		printn(i);
		st+="<br/>";

		pattern(n - 1, i + 1);
	}

		var n = window.prompt("Enter N's value : ");
		pattern(n, 1);
		document.querySelector(".hello").innerHTML=st;			
}
	



function reverse ()
{
	st = "";

	function print_space( space)
	{
	
		if (space == 0)
			return;
		st +="&nbsp;&nbsp;";
	
	
		print_space(space - 1);
	}
	
	
	function print_asterisk(asterisk)
	{
	
		if (asterisk == 0)
			return;
		st += " * ";
		print_asterisk(asterisk - 1);
	}
	

	function pattern( n, num)
	{
	
		if (n == 0)
			return;
		print_space(n - 1);
		print_asterisk(num - n + 1);
		st+="<br/>";
		st+="&nbsp;";
	
	
		pattern(n - 1, num);
	}
	
		let n=8;
		//let n = window.prompt("Enter N's value : ");
		pattern(n, n);

	console.log(st);
	document.querySelector(".hello").innerHTML=st;	

}


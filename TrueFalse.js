
function checkPrime (number){
	for (i=2; i<number; i++){
		

if (number % i == 0)
	{return false;}


document.write("<br/>");
}

return true;
}

document.write(checkPrime(13))
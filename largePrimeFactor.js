var number = 600851475143;

for(var i = 2; number >= i; i++)
{
	while(number % i === 0)
	{
		number = number / i;
	}
}
console.log(i-1)
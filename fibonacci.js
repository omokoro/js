var t1 = 0;
var t2 = 1;
var fibNum = 0;
var sum = 0;

while(fibNum <= 4000000)
{
    fibNum = t1+t2;
	t1 = t2;
	t2 = fibNum;
	
    if(fibNum % 2===0)
    {
        sum+=fibNum;
    }
}
console.log(sum);
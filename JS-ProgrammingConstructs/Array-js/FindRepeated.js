var array=new Array();
for(var i=0;i<100;i++)
{
    //Split the number
    var splittedval=i.toString().split("");
    //Check whether both characters are same
    if(splittedval[0]==splittedval[1])
    {
        array.push(i);
    }
}
array.forEach(element => {
    console.log(element);
}); 
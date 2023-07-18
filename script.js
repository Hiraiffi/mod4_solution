var names=new Array();
names[0]="Yakoov";
names[0]="John";
names[0]="Jen";
names[0]="jason";
names[0]="paul";
names[0]="frank";
names[0]="larry";
names[0]="paula";
names[0]="laura";
names[0]="jim";

for(var i=0;i<names.length;i++)
{
       if(names[i].charAt(0)==='J' || names[i].charAt(0)==='j'){
     console.log("Goodbye" +names[i])
   }
   else {
    console.log("Hello" + names[i])
   }

}
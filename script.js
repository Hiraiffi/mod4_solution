(function () {

   var names=[ "Paul", "Hit", "Brand", "Jason", "Miley", "Cave", "Yakoov", "Jen" , "John", "Jim"];

for(var i=0;i<names.length;i++)
{
   var firstletter=names[i].charAt(0).tolowerCase();
   if(firstletter=='j') {
     byeSpeaker.speak(names[i]);
   }
   else {
     helloSpeaker.speak(names[i]);
   }
}

}) ();
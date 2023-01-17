var Hr = 0;
var Min = 0;
var Sec = 0;
var Count = 0;

var timer = false;

function start(){
    timer = true;
    MainStopwatch();


}

function stop(){
    timer = false;

}

function reset(){
    timer = false;

    Hr=0;
    Min=0;
    Sec=0;
    Count=0;

    document.getElementById("Hour").innerHTML="00";
    document.getElementById("Minute").innerHTML="00";
    document.getElementById("Second").innerHTML="00";
    document.getElementById("Count").innerHTML="00";
    

}

function MainStopwatch(){
    if(timer==true){
        Count = Count+1;

        if(Count==65){
            Sec=Sec+1;
            Count=0;

       }

       if(Sec==60){
        Min=Min+1;
        Sec=0;
       }

       if(Min==60){
        Hr=Hr+1;
        Min=0;
        Sec=0;
       }

       var HrString=Hr;
       var MinString=Min;
       var SecString=Sec;
       var CountString=Count;

       if(Hr < 10){
        HrString = "0"+ HrString;
       }
       if(Min < 10){
        MinString = "0"+ MinString;
       }
       if(Sec < 10){
        SecString = "0"+ SecString;
       }
       if(Count < 10){
        CountString = "0"+ CountString;
       }

        document.getElementById("Hour").innerHTML = HrString;
        document.getElementById("Minute").innerHTML = MinString;
        document.getElementById("Second").innerHTML = SecString;
        document.getElementById("Count").innerHTML = CountString;
 
        setTimeout( "MainStopwatch()", 10);
    }
}
start.addEventListener("click", start_click);
clear.addEventListener("click", clear_click);

var count=0, timerId, go=0;

function start_click(){
    start.innerHTML = 'Pause';
    start.style.backgroundColor = 'blue';
    if (go==0){
        timerId = setInterval(function() {
        count++;
        var msek=count%100;
        var sek=Math.floor(count/100)%60;
        if (sek<10) {
            sek = "0"+sek;
        }
        var min=Math.floor(count/6000)%60;
        if (min<10) {
            min = "0"+min;
        }
        var hours=Math.floor(count/360000)%24;
        if (hours<10) {
            hours = "0"+hours;
        }
        var str = hours+":"+min+":"+sek;

        for_count.innerHTML=str;
        for_msek.innerHTML=msek;
        }, 1);
        go=1;
    }else{
        start.innerHTML = 'Cont..';
        start.style.backgroundColor = 'green';
        clearInterval(timerId);
        go=0;
    }
}

function clear_click(){
    clearInterval(timerId);
    start.style.backgroundColor = 'green';
    go=0;
    count=0;
    for_count.innerHTML='00'+':'+'00'+':'+'00';
    for_msek.innerHTML='0';
    start.innerHTML = 'Start';
}
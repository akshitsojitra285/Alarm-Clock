let setbtn = document.getElementById("btn");
let hour = document.getElementById("hr");
let min = document.getElementById("min");
let zone = document.getElementById("zone");

setbtn.addEventListener("click",function() {
    let ahour = hour.value;
    let amin = min.value;
    let azone = zone.value;
    var audio = new Audio('http://cd.textfiles.com/atarilibrary/atari_cd06/SOUND/WAV/WOWO.WAV')
    
    ahour = ahour<10? "0"+ahour : ahour;
    amin = amin<10? "0"+amin : amin;

    let node = document.createElement("li");
    node.className="alarm"
    let textnode = document.createTextNode(ahour+" : "+amin+" "+azone);
    node.append(textnode);
    document.getElementById("mylist").append(node);
    
    document.getElementById("hr").value="";
    document.getElementById("min").value="";

    
let a = setInterval(() => {
        let date = new Date();
        let chour = date.getHours();
        let cmin = date.getMinutes();
        let czone = "AM";
        if (chour>=12) {
            czone = "PM";
            chour -= 12;
        }
        if(chour==12){
            czone="PM";
        }
        if(chour==0){
            chour=12;
            czone="AM";
        }
        
        if(chour==ahour && cmin==amin && czone==azone){
            // alert("current "+chour+" "+cmin+" "+czone);
            // alert("alarm "+ahour+" "+amin+" "+azone);
            audio.play();
            document.getElementById("mylist").removeChild(node);
            clearInterval(a);
        }
    }, 1000);
    
})

function watch() {
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let zone = "AM";

    if (hour>12) {
        zone = "PM";
        hour -= 12;
    }
    if (hour == 0) {
        hour =12;
    }
    if (hour==12) {
        zone="PM";
    }
    hour = hour<10? "0"+hour : hour;
    min = min<10? "0"+min : min;
    sec = sec<10? "0"+sec : sec;
    document.getElementById("time").innerHTML = hour+":"+min+":"+sec+" "+zone;
}
watch();
setInterval(watch,1000);
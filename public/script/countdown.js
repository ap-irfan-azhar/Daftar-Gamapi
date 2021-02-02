let openFormDate = new Date("feb 6, 2021 05:00:00").getTime(); //based on utc time

let countdown = setInterval(function(){
    let now = new Date(new Date().toLocaleString("en-US", {timeZone: "utc"})).getTime();
    distance = openFormDate - now;
    
    days = Math.floor(distance / (1000 * 60 * 60 * 24));
    
    hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    if (hours < 10){
        hours = "0" + hours;
    }
    
    minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    if (minutes < 10){
        minutes = "0" + minutes;
    }
    
    seconds = Math.floor((distance % (1000 * 60)) / 1000)
    if (seconds < 10){
        seconds = "0" + seconds;
    }
    
    document.getElementById("days").innerText = days
    document.getElementById("hours").innerText = hours
    document.getElementById("minutes").innerText = minutes
    document.getElementById("seconds").innerText = seconds
    
    if (distance <= 0){
        document.getElementById("title").innerText = "Refresh halaman untuk membuka formulir pendaftaran"
        document.getElementById("days").innerText = 0
        document.getElementById("hours").innerText = 0
        document.getElementById("minutes").innerText = 0
        document.getElementById("seconds").innerText = 0
        clearInterval(countdown)
    }



}, 1000)
setInterval(function() {
    var currentDate = new Date();
    document.getElementById("h").textContent = currentDate.getHours();
    document.getElementById("m").textContent = currentDate.getMinutes();
    document.getElementById("s").textContent = currentDate.getSeconds();
}, 1000);

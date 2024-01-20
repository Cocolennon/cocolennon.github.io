function sendMessage() {
    var token = document.getElementById("token").value;
    var channel = document.getElementById("channel").value;
    var message = document.getElementById("message").value;

    var url = "https://discord.com/api/channels/" + channel + "/messages";

    /*
    request = new XMLHttpRequest();
    request.withCredentials = true;
    request.open("POST", url);
    request.setRequestHeader("authorization", "Bot " + token);
    request.setRequestHeader("accept", "/");
    request.setRequestHeader("authority", "discord.com");
    request.setRequestHeader("content-type", "application/json");
    request.setRequestHeader("origin", "http://localhost:8000");
    request.send(JSON.stringify({ content: message }));*/

    fetch(url, {
        headers: {
            "Authorization": "Bot " + token,
            "User-Agent":"Coco Lennon (https://www.cocolennon.xyz, v0.1)",
            "Content-Type":"application/x-www-form-urlencoded; charset=UTF-8",
            "origin": null,
        },
        body: JSON.stringify({"content": message}),
        method: "POST",
        mode: "cors"
    }).then(response => console.log(JSON.stringify(response)));
}
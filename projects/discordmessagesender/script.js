function sendMessage() {
    var token = document.getElementById("token").value;
    var channel = document.getElementById("channel").value;
    var message = document.getElementById("message").value;

    var url = "https://discord.com/api/v9/channels/" + channel + "/messages";

    /*fetch(url, {
        "headers": {
            "Authorization": "Bot " + token,
            "User-Agent":"Coco Lennon (https://www.cocolennon.xyz, v0.1)",
            "Content-Type":"application/json"
        },
        "body": JSON.stringify({"content": message}),
        "method": "POST",
        "mode":"no-cors"
    }).then(response => console.log(JSON.stringify(response)));*/

    fetch(url, {
        "headers": {
            "accept": "*/*",
            "accept-language": "en-GB,fr-FR;q=0.9",
            "authorization": token,
            "content-type": "application/json",
        },
        "body": JSON.stringify({"content": message}),
        "method": "POST",
        "mode": "no-cors",
    }).then(response => console.log(JSON.stringify(response)));;
}
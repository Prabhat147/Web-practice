const test = new WebSocket("ws://127.0.0.1:5001");

var name = prompt("what's your name buddy: ");

var log= document.getElementById('log');


test.onopen = function(){
    test.send(JSON.stringify({
        type: "name",
        data: name
    }));


}



test.onmessage = function(event){
 console.log(event);
 var json = JSON.parse(event.data);
 log.innerHTML += json.name + ":" +json.data + "<br>";
// log.innerHTML += event.data + "<br>";

}

document.querySelector("button").onclick = function(){

   var text = document.getElementById('text').value;
  // test.send(text);

  test.send(JSON.stringify({
    type: "message",
    data : text

  }));
   log.innerHTML += "You :"  + text +"<br>"

};




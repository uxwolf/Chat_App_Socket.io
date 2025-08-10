var socket = io();

let btn = document.getElementById("btn");
let inputmsg = document.getElementById("newMsg");
let list = document.getElementById("msgList")

btn.onclick = function exec(){
    socket.emit('msg_send',{
        msg : inputmsg.value
    });
}

socket.on('msg_rcvd',(data)=>{
    let limsg=document.createElement('li');
    limsg.innerText=data.msg;
    list.appendChild(limsg);
})
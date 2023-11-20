import React, { useState } from 'react'
import { Link } from "react-router-dom"
import io from "socket.io-client";
import ChartBord from '../ChartBord';
function JoinRoom() {
  const [userName, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);
  const [sockets, setsockets] = useState(false);
  const socket = io("http://localhost:3010");
//   let sockets;
  const joinRoom = () => {
    const sockets = socket.emit("join-room", { userName, room });
      setShowChat(true);
      setsockets(sockets)
  };

  console.log(userName, room, "Join.js")
  console.log("showChat",showChat)
  return (
    <div className='joinPage'>
      {!showChat ? (
        <div className='joinContainer'>
            <h2>Chat Application</h2>
          <input onChange={(e) => setUsername(e.target.value)} value={userName} placeholder="Enter your Name" type="text" name="userName" id="joinInput" />
          <br></br>
          <input onChange={(e) => setRoom(e.target.value)} value={room} placeholder="room....." type="text" name="room" id="RoomInput" />
          <center>
             <button onClick={joinRoom} className='joinbtn'>Login in</button>
          </center>
        </div>
      ) : (
        <ChartBord sockets={sockets} userName={userName} room={room} />


        
      )}
    </div>
  )
}

export default JoinRoom


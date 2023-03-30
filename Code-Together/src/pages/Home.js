import React, { useState } from 'react';
import { v4 } from 'uuid';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const [roomId, setRoomId] = useState('');
    const [username, setUsername] = useState('');

    const createNewRoom = (e) => {
        e.preventDefault();
        const id = v4();
        setRoomId(id);
        toast.success('Room ID is Created SuccessFully');
    };

    const joinRoom = () => {
        if (!roomId || !username) {
            toast.error("ROOM ID and Username Can't be Empty!");
            return;
        }

        // Redirect
        navigate(`/editor/${roomId}`, {
            state: {
                username,
            },
        });
    };

    return (
        <div className="homePageWrapper">
            <div className="formWrapper">
                
                <h4 className="mainLabel">JOIN ONLINE CODE EDITOR</h4>
                <div className="inputGroup">
                    <input
                        type="text"
                        className="inputBox"
                        placeholder="ROOM ID"
                        onChange={(e) => setRoomId(e.target.value)}
                        value={roomId}
                    />
                    <input
                        type="text"
                        className="inputBox"
                        placeholder="USERNAME"
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                    />
                    <button className="btn joinBtn" onClick={joinRoom}>
                        Join
                    </button>
                    <span className="createInfo">
                        Don't have ID ?  &nbsp;
                        <a
                            onClick={createNewRoom}
                            href=""
                            className="createNewBtn"
                        >
                           Create New room ID
                        </a>
                    </span>
                </div>
            </div>
            
        </div>
    );
};

export default Home;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ChatLog } from './ChatLog.jsx';

export function QueryBar() {
    const [searchInput, setSearchInput] = useState("");
    const [botChat, setBotChat] = useState([]);
    const [userChat, setUserChat] = useState([]);

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleSubmit();
        }
    }
    const handleSubmit = () => {
        const params = {
            prompt: searchInput
        }
        axios.get("http://localhost:5555/chat", { params })
            .then((response) => {
                setBotChat(botChat => [...botChat, response.data.result]);
                setSearchInput("");
            })
            .catch((error) => {
                alert('Something bad happened while getting API response');
                console.log(error);
            })
    }
    useEffect(() => {
        setSearchInput(searchInput);
    }, [searchInput]);
    useEffect(() => {

    }, [botChat])
    return (
        <>
        <ChatLog logs={botChat}/>
        <form>
            <input type="text" placeholder='Talk to Kyle Bot'
            onChange={(e) => setSearchInput(e.target.value)} onKeyDown={handleKeyDown} value={searchInput}/>
            <button onClick={handleSubmit}>Submit</button>
        </form>


        </>
    )
    }

export default QueryBar
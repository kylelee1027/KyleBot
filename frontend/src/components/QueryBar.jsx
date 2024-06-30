import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import { ChatLog } from './ChatLog.jsx';
import { GoArrowUp } from "react-icons/go";

export function QueryBar() {
    const [searchInput, setSearchInput] = useState("");
    const [botChat, setBotChat] = useState([]);
    const [userChat, setUserChat] = useState([]);
    const [messageId, setMessageId] = useState(0);

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
                setMessageId(messageId + 1);
            })
            .catch((error) => {
                alert('Something bad happened while getting API response');
                console.log(error);
            })
    }

    return (
        <div className="h-screen">
            <div>
                {botChat.map((chat, index) => (
                <React.Fragment key={index}>
                    <h4 className="pl-7 pt-2">KyleBot: </h4>
                    <div className="pl-24 before:absolute before:inset-0 before:animate-typewriter before:bg-white after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-black">{chat}</div>
                </React.Fragment>
            ))}
            </div>
            <div className="p-4">
                <div className="w-screen absolute bottom-0 flex justify-center mb-8">
                    <form className="w-1/2 rounded-lg outline">
                        <input className="w-full placeholder:text-gray-500 pl-[8px] outline-none" type="text" placeholder='Talk to Kyle Bot'
                        onChange={(e) => setSearchInput(e.target.value)} onKeyDown={handleKeyDown} value={searchInput}/>
                    </form>
                    <button className="mx-4 h-6 w-6 inline-block rounded-full align-center outline items-center" onClick={handleSubmit}>
                        <div className='flex items-center justify-center'>
                            <GoArrowUp/>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
    }

export default QueryBar
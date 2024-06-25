import React, { useState, useEffect } from 'react';
import axios from 'axios';

export function QueryBar() {
    const [searchInput, setSearchInput] = useState("");
    const [searchResult, setSearchResult] = useState("");

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
                setSearchResult(response.data.result);
                setSearchInput("");
            })
            .catch((error) => {
                alert('Something bad happened while getting API response');
                console.log(error);
            })
    }
    useEffect(() => {
        setSearchInput(searchInput);
        console.log(searchInput);
        // You can perform other actions here, such as fetching data or updating state
    }, [searchInput]);
    useEffect(() => {
        console.log(searchResult);
    }, [searchResult])
    return (
        <>
        <form>
            <input type="text" placeholder='Talk to Kyle Bot'
            onChange={(e) => setSearchInput(e.target.value)} onKeyDown={handleKeyDown} value={searchInput}/>
            <button onClick={handleSubmit}>Submit</button>
        </form>

        </>
    )
    }

export default QueryBar
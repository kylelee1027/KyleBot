import React from 'react'
export function ChatLog({logs}) {
    return (
        <div>
            {logs.map((chat, index) => (
                <div key={index}>{chat}</div>
            ))}
        </div>
    )
}
export default ChatLog
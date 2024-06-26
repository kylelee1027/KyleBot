import React, { Fragment } from 'react'
export function ChatLog({logs}) {
    return (
        <>
        {logs.map((chat, index) => (
            <React.Fragment key={index}>
                <h4 className="pl-7 pt-2">KyleBot: </h4>
                <div className="pl-24">{chat}</div>
            </React.Fragment>
        ))}
        </>
    )
}
export default ChatLog
import React, { Fragment, useMemo } from 'react'
export function ChatLog({logs}) {
    return (
        <>
        {logs.map((chat, index) => (
            <React.Fragment key={index}>
                <h4 className="pl-7 pt-2">KyleBot: </h4>
                <div className="pl-24 before:absolute before:inset-0 before:animate-typewriter before:bg-white after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-black">{chat}</div>
            </React.Fragment>
        ))}
        </>
    )
}
export default ChatLog
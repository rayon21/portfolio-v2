import React, { useRef, useEffect, useState } from 'react';
import "./style.css";

const CircleCursor = () => {

    const cursor = useRef();
    const [cursorX, setCursorX] = useState(window.screen.width/2);
    const [cursorY, setCursorY] = useState(window.screen.height/2);
    const radius = 50;

    const updateCursor = (e) => {
        setCursorX(e.clientX - radius/2);
        setCursorY(e.clientY + window.scrollY - radius/2);
    }
    
    useEffect(() => {
        document.addEventListener('mousemove', (e) => {
            updateCursor(e);
            requestAnimationFrame(updateCursor);
        });
    }, [])

    return (
        <div className="circle-cursor" ref={cursor} style={{top: cursorY, left: cursorX}}></div>
    )
}

export default CircleCursor;
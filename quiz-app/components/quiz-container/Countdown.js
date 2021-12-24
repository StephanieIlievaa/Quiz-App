import React, { useState, useEffect } from "react";

export default function CountDown({ minutes = 10, seconds = 0, over, countDownOver }) {
    const [paused, setPaused] = useState(false);
    const [[m, s], setTime] = useState([minutes, seconds]);

    const tick = () => {
        if (paused || over) return;
        if (m === 0 && s === 0) countDownOver(true);
        else if (s == 0) {
            setTime([m - 1, 59]);
        } else {
            setTime([m, s - 1]);
     
        }
    };

    const reset = () => {
        setTime([parseInt(minutes), parseInt(seconds)]);
        setPaused(false);
        // setOver(false);
    };

    useEffect(() => {
        const timerID = setInterval(() => tick(), 1000);
        return () => clearInterval(timerID);
    });

    return (
        <div>
           {m.toString().padStart(2, '0')}:{s.toString().padStart(2, '0')}
            {/* <button onClick={() => setPaused(!paused)}>
                {paused ? 'Resume' : 'Pause'}
            </button>
            <button onClick={() => reset()}>Restart</button> */}
        </div>
    );
}; 

//for pull request

import React, { useState, useEffect } from 'react';

const Timer = () => {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [isActive, setIsActive] = useState(false);


    function toggle() {
        setIsActive(!isActive);
    }


    function reset() {
        setSeconds(0);
        setMinutes(0);
        setIsActive(false);
    }


    useEffect(() => {
        let interval = null;

        if (isActive) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds + 1);
                if (seconds === 60){
                    setSeconds(0);
                    setMinutes(minutes => minutes +1);
                }
            }, 1000);
        } else if (!isActive && seconds !== 0) {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [isActive, seconds, minutes]);

    return (
       <>
                <button  onClick={toggle}>
                    {isActive ? 'Pause' : 'Start'}
                </button>
                <div>
                    {minutes}m <span> </span>{seconds}s
                </div>
                <button onClick={reset}>
                    Reset
                </button>
        </>
    );
};

export default Timer;

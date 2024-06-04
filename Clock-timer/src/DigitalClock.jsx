import React , {useEffect, useState} from 'react'

export default function DigitalClock() {
    const [time , settime] = useState(new Date());
    useEffect(()=> {
        const intervalId = setInterval(()=> {
            settime(new Date());
        }, 1000);

        return() => {
            clearInterval(intervalId);
        }
    } , [])

    function formatTime() {
        let hours = time.getHours();
        let min = time.getMinutes();
        let sec = time.getSeconds();
        let meridian  = hours >= 12 ? "PM" : "AM";

        hours = hours % 12 || 12;
        return `${padZero(hours)}:${padZero(min)}:${padZero(sec)} ${meridian}`
    }

    function padZero(number){
       return (number < 10 ?"0" : "") + number;
    }
    return(<>
     <div className="clock-container">
               <div className="clock">{formatTime()}</div>
        </div>
    </>);
}
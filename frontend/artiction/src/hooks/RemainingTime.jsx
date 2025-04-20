import { useEffect, useState } from 'react';
import useCountDown from './useCountDown.jsx';

const TimerLayout = ({ unit, countdownTo }) => {
    const { ref, time } = useCountDown(unit, countdownTo);

    return (
        <div className="flex items-center justify-center bg-[var(--blue-sm)] text-white py-2 px-3 font-mono border border-[var(--blue-dk)]">
            <div className="relative w-full overflow-hidden text-center">
                <span ref={ref} className="block font-bold">
                    {time < 10 ? `0${time}` : time}
                </span>
            </div>
        </div>
    );
};

const RemainingTime = ({ timeFrom }) => {
    const [timeF, setTimeF] = useState(timeFrom);

    useEffect(() => {
        setTimeF(timeFrom);
    }, [timeFrom]);

    return (
        <div className='flex rounded border shadow shadow-indigo-600 w-fit'>
            <TimerLayout unit="Hour" countdownTo={timeF} />
            <TimerLayout unit="Minute" countdownTo={timeF} />
            <TimerLayout unit="Second" countdownTo={timeF} />
        </div>
    );
};

export default RemainingTime;

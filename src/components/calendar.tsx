import React, { useState, useEffect, useRef } from 'react'

const Calendar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const calendarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (calendarRef.current && !calendarRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className=" z-30" ref={calendarRef}>
            <div
                className={`absolute top-1/2 translate-x-1/2 right-4 cursor-pointer rounded-b-xl bg-[#006cdb] w-60 h-10 flex items-center justify-center transform rotate-90 transition-opacity duration-300
                    ${isOpen ? 'opacity-0' : 'opacity-1'}
                `}
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="text-white text-lg">Расписание</span>
            </div>
            <div
                className={`absolute top-1/2 -translate-y-1/2 right-4 bg-white rounded-lg border w-80 p-4 shadow-xl transition-all duration-500
                    ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'}
                `}
            >
                <h2 className="text-xl font-bold mb-4 text-nowrap">Расписание на <b className=' underline cursor-pointer'>ПН 01.01.2025</b></h2>
                <div className="grid grid-cols-1 gap-4">
                    <div className="py-2 px-2 rounded-lg flex flex-col gap-3">
                        <p className=' text-lg'><b className='mr-4'>08:30</b>Математика</p>
                        <hr />
                        <p className=' text-lg'><b className='mr-4'>10:15</b>Физика</p>
                        <hr />
                        <p className=' text-lg'><b className='mr-4'>12:00</b>Информатика</p>
                        <hr />
                        <p className=' text-lg'><b className='mr-4'>13:50</b>Право</p>
                    </div>
                </div>
                <button
                    className="mt-4 w-full bg-[#006cdb] text-white py-2 rounded-lg hover:bg-[#005bb5]"
                    onClick={() => alert('Показать все расписание')}
                >
                    Все расписание
                </button>
            </div>
        </div>
    )
}

export default Calendar
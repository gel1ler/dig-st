'use client'
import React, { useState } from 'react'
import Image from 'next/image';

const Category = ({ title, arr }: { title: string; arr: { name: string; link: string }[] }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`flex flex-col my-10 overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-10'}`}>
            <div className="flex items-center cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                <Image
                    src="/icons/arrow.svg"
                    className={`${isOpen ? ' rotate-0' : 'rotate-180'} duration-300`}
                    alt="Category"
                    width={30}
                    height={30}
                />
                <p className='text-4xl'>{title}</p>
            </div>
            {/* Разделы из arr */}
            <div className={`flex flex-col mt-4 space-y-2 border rounded-lg py-2`}>
                {arr.map((item, index) => (
                    <>
                        <div className="p-4 relative">
                            <a
                                key={index}
                                href={item.link}
                                className="text-lg"
                            >
                                {item.name}
                            </a>
                            <Image
                                src="/icons/download.svg"
                                alt="Description"
                                className='absolute right-4 top-1/2 -translate-y-1/2 hover:bg-slate-100 transition-all rounded-full p-2 cursor-pointer'
                                width={50}
                                height={50}
                            />
                        </div>
                        {arr.length === index + 1 ? null : <hr />}
                    </>
                ))}
            </div>
        </div>
    );
};


const categories = [{
    title: 'Образование',
    arr: [
        { name: 'Расписание', link: '/schedule' },
        { name: 'Преподаватели', link: '/teachers' },
        { name: 'Курсы', link: '/courses' },
    ],
},
{
    title: 'Студентам',
    arr: [
        { name: 'Стипендии', link: '/scholarships' },
        { name: 'Библиотека', link: '/library' },
        { name: 'Общежития', link: '/dormitories' },
    ],
},
{
    title: 'Военно-учебный центр',
    arr: [
        { name: 'Военная подготовка', link: '/military-training' },
        { name: 'Военная кафедра', link: '/military-department' },
        { name: 'Военная служба', link: '/military-service' },
    ],
},
];

const Page = () => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* <Line opacity={0.1} /> */}
            <div className="w-[1200px] mx-auto mt-10">
                <p className='text-6xl mb-5 text-center'>Справки</p>
                <p className='text-lg -mt-2 ml-2 text-gray-600 text-center'>Нажмите на раздел для его раскрытия</p>
                {categories.map((category, index) => (
                    <>
                        <Category key={index} title={category.title} arr={category.arr} />
                        {categories.length === index + 1 ? null : <hr />}
                    </>
                ))}
            </div>
        </div>
    )
}

export default Page
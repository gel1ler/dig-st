import React from 'react'

const schedule = [
    {
        week: 'Пн 01.09',
        lessons: [
            { title: 'Математика', teacher: 'Иванов И.И.', time: '8:30 - 10:15' },
            { title: 'Физика', teacher: 'Петров П.П.', time: '10:30 - 12:15' },
        ],
    },
    {
        week: 'Вт 02.09',
        lessons: [
            { title: 'История', teacher: 'Сидоров С.С.', time: '8:30 - 10:15' },
            { title: 'Литература', teacher: 'Козлов К.К.', time: '10:30 - 12:15' },
        ],
    },
    {
        week: 'Ср 03.09',
        lessons: [
            { title: 'Биология', teacher: 'Михайлов М.М.', time: '8:30 - 10:15' },
            { title: 'География', teacher: 'Николаев Н.Н.', time: '10:30 - 12:15' },
        ],
    },
    {
        week: 'Чт 04.09',
        lessons: [
            { title: 'Иностранный язык', teacher: 'Олегов О.О.', time: '8:30 - 10:15' },
            { title: 'Право', teacher: 'Павлов П.П.', time: '10:30 - 12:15' },
        ],
    },
    {
        week: 'Пт 05.09',
        lessons: [
            { title: 'Экономика', teacher: 'Романов Р.Р.', time: '8:30 - 10:15' },
            { title: 'Философия', teacher: 'Семенов С.С.', time: '10:30 - 12:15' },
        ],
    },
    {
        week: 'Сб 06.09',
        lessons: [
            { title: 'Программирование', teacher: 'Федоров Ф.Ф.', time: '8:30 - 10:15' },
            { title: 'Дизайн', teacher: 'Харитонов Х.Х.', time: '10:30 - 12:15' },
        ],
    },
];

const Page = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="w-[1200px] mx-auto my-10 ">
                <div className="mb-10 flex flex-col gap-4">
                    <h1 className="text-6xl font-bold mb-5">Учебное расписание</h1>
                    <hr className='-mt-4' />
                    <p className="text-2xl">Номер группы: <b className='gradient-text-2'>ИУ3-33Б</b></p>
                    <hr />
                    <p className="text-2xl">Семестр: Осенний 2023</p>
                    <hr />
                    <div className="flex gap-2">
                        <div className="p-2 rounded-full text-white bg-blue-500 px-6 cursor-pointer">1Н</div>
                        <div className="p-2 rounded-full text-white bg-blue-300 px-6 cursor-pointer">2Н</div>
                        <div className="p-2 rounded-full text-white bg-blue-300 px-6 cursor-pointer">3Н</div>
                        <div className="p-2 rounded-full text-white bg-blue-300 px-6 cursor-pointer">4Н</div>
                        <div className="p-2 rounded-full text-white bg-blue-300 px-6 cursor-pointer">5Н</div>
                        <div className="p-2 rounded-full text-white bg-blue-300 px-6 cursor-pointer">6Н</div>
                        <div className="p-2 rounded-full text-white bg-blue-300 px-6 cursor-pointer">7Н</div>
                        <div className="p-2 rounded-full text-white bg-blue-300 px-6 cursor-pointer">8Н</div>
                        <div className="p-2 rounded-full text-white bg-blue-300 px-6 cursor-pointer">9Н</div>
                        <div className="p-2 rounded-full text-white bg-blue-300 px-6 cursor-pointer">10Н</div>
                        <div className="p-2 rounded-full text-white bg-blue-300 px-6 cursor-pointer">11Н</div>
                        <div className="p-2 rounded-full text-white bg-blue-300 px-6 cursor-pointer">12Н</div>
                        <div className="p-2 rounded-full text-white bg-blue-300 px-6 cursor-pointer">13Н</div>

                    </div>
                    <hr />
                </div>
                <div className="grid grid-cols-2 gap-8">
                    {schedule.map((week, index) => (
                        <div key={index} className="p-6 rounded-lg">
                            <h2 className="text-3xl font-bold mb-4">{week.week}</h2>
                            <div className="space-y-4">
                                {week.lessons.map((lesson, lessonIndex) => (
                                    <div key={lessonIndex} className="border-b border-gray-300 pb-4 flex justify-between items-center">
                                        <div className="flex flex-col">
                                            <p className="text">Время: {lesson.time}</p>
                                            <h3 className="text-xl font-semibold">{lesson.title}</h3>
                                        </div>
                                        <p className="text-lg">{lesson.teacher}</p>

                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Page
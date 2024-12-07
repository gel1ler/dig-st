import React from 'react';

const SideBlock = () => {
    return (
        <div className="grid grid-rows-[3fr_2fr] h-full w-full md:w-1/4 bg-gray-100 rounded-xl shadow-md">
            <div className="flex-1 p-4 overflow-y-auto">
                <h2 className="text-xl font-bold mb-4">Последние сообщения с почты</h2>
                <div className="space-y-4">
                    <div className="bg-white p-4 rounded shadow">
                        <h3 className="text-lg font-semibold">Тема сообщения 1</h3>
                        <p className="text-sm text-gray-600">Отправитель: user@example.com</p>
                        <p className="text-sm text-gray-600">Дата: 2023-10-01</p>
                    </div>
                    <div className="bg-white p-4 rounded shadow">
                        <h3 className="text-lg font-semibold">Тема сообщения 2</h3>
                        <p className="text-sm text-gray-600">Отправитель: user@example.com</p>
                        <p className="text-sm text-gray-600">Дата: 2023-10-02</p>
                    </div>
                    {/* Добавьте больше сообщений здесь */}
                </div>
            </div>
            <div className="flex-1 p-4 overflow-y-auto">
                <hr className='my-2' />
                <h2 className="text-xl font-bold mb-4">Последние новости</h2>
                <div className="space-y-4">
                    <div className="bg-white p-4 rounded shadow">
                        <h3 className="text-lg font-semibold"></h3>
                        <p className="text-sm text-gray-600">Дата: 2023-10-01</p>
                        <p className="text-sm text-gray-600">Краткое описание новости...</p>
                    </div>
                    <div className="bg-white p-4 rounded shadow">
                        <h3 className="text-lg font-semibold">Новость 2</h3>
                        <p className="text-sm text-gray-600">Дата: 2023-10-02</p>
                        <p className="text-sm text-gray-600">Краткое описание новости...</p>
                    </div>
                    {/* Добавьте больше новостей здесь */}
                </div>
            </div>
        </div>
    );
};

export default SideBlock;
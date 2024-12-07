"use client";

import { Accordion } from "flowbite-react";

import { Card, Button } from "flowbite-react";
import Image from "next/image";

function Page() {
    return (
        <div className="my-10">
            <h2 className="text-5xl font-bold text-gray-900 dark:text-white my-10 text-center">
                Преподователи по кафедрам
            </h2>
            <Accordion style={{ width: '75%', margin: '0 auto' }}>
                <Accordion.Panel>
                    <Accordion.Title>ИУ</Accordion.Title>
                    <Accordion.Content>
                        <Button.Group>
                            <Button color="gray">ИУ1</Button>
                            <Button color="gray">ИУ2</Button>
                            <Button color="gray">ИУ3</Button>
                            <Button color="gray">...</Button>
                            <Button color="gray">ИУ12</Button>
                            <Button color="gray">Администрация</Button>
                        </Button.Group>
                        <div className="flex mt-4">
                            <Card className="mr-12 max-w-sm">
                                <div className="flex justify-end px-4 pt-4"></div>
                                <div className="flex flex-col items-center pb-10">
                                    <Image
                                        height={96}
                                        alt='Teacher'
                                        src="/leviev.jpg"
                                        width={96}
                                        className="mb-3 rounded-full shadow-lg"
                                    />
                                    <h5 className="mb-1 w-72 text-center text-xl font-medium text-gray-900 dark:text-white">
                                        Левиев Дмитрий Олегович
                                    </h5>
                                    <span className="text-sm text-gray-500 dark:text-gray-400">
                                        Преподаватель
                                    </span>
                                    <div className="mt-4 flex space-x-3 lg:mt-6">
                                        <a
                                            href="#"
                                            className="inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                        >
                                            Написать в Samoware
                                        </a>
                                    </div>
                                </div>
                            </Card>

                            <Card className="max-w-sm">
                                <div className="flex justify-end px-4 pt-4"></div>
                                <div className="flex flex-col items-center pb-10">
                                    <Image
                                        height={96}
                                        alt='Teacher'
                                        src="/death.jpg"
                                        width={96}
                                        className="mb-3 rounded-full shadow-lg"
                                    />
                                    <h5 className="mb-1 w-72 text-center text-xl font-medium text-gray-900 dark:text-white">
                                        Тихомирова Елизавета Алексеевна
                                    </h5>
                                    <span className="text-sm text-gray-500 dark:text-gray-400">
                                        Преподаватель
                                    </span>
                                    <div className="mt-4 flex space-x-3 lg:mt-6">
                                        <a
                                            href="#"
                                            className="inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                        >
                                            Написать в Samoware
                                        </a>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>ИБМ</Accordion.Title>
                    <Accordion.Content>
                        <div className="flex mt-4">
                            <Card className="mr-12 max-w-sm">
                                <div className="flex justify-end px-4 pt-4"></div>
                                <div className="flex flex-col items-center pb-10">
                                    <Image
                                        height={96}
                                        alt='Teacher'
                                        src="/leviev.jpg"
                                        width={96}
                                        className="mb-3 rounded-full shadow-lg"
                                    />
                                    <h5 className="mb-1 w-72 text-center text-xl font-medium text-gray-900 dark:text-white">
                                        Левиев Дмитрий Олегович
                                    </h5>
                                    <span className="text-sm text-gray-500 dark:text-gray-400">
                                        Преподаватель
                                    </span>
                                    <div className="mt-4 flex space-x-3 lg:mt-6">
                                        <a
                                            href="#"
                                            className="inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                        >
                                            Написать в Samoware
                                        </a>
                                    </div>
                                </div>
                            </Card>

                            <Card className="max-w-sm">
                                <div className="flex justify-end px-4 pt-4"></div>
                                <div className="flex flex-col items-center pb-10">
                                    <Image
                                        height={96}
                                        alt='Teacher'
                                        src="/death.jpg"
                                        width={96}
                                        className="mb-3 rounded-full shadow-lg"
                                    />
                                    <h5 className="mb-1 w-72 text-center text-xl font-medium text-gray-900 dark:text-white">
                                        Тихомирова Елизавета Алексеевна
                                    </h5>
                                    <span className="text-sm text-gray-500 dark:text-gray-400">
                                        Преподаватель
                                    </span>
                                    <div className="mt-4 flex space-x-3 lg:mt-6">
                                        <a
                                            href="#"
                                            className="inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                        >
                                            Написать в Samoware
                                        </a>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>ФН</Accordion.Title>
                    <Accordion.Content>
                        <div className="flex mt-4">
                            <Card className="mr-12 max-w-sm">
                                <div className="flex justify-end px-4 pt-4"></div>
                                <div className="flex flex-col items-center pb-10">
                                    <Image
                                        height={96}
                                        alt='Teacher'
                                        src="/leviev.jpg"
                                        width={96}
                                        className="mb-3 rounded-full shadow-lg"
                                    />
                                    <h5 className="mb-1 w-72 text-center text-xl font-medium text-gray-900 dark:text-white">
                                        Левиев Дмитрий Олегович
                                    </h5>
                                    <span className="text-sm text-gray-500 dark:text-gray-400">
                                        Преподаватель
                                    </span>
                                    <div className="mt-4 flex space-x-3 lg:mt-6">
                                        <a
                                            href="#"
                                            className="inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                        >
                                            Написать в Samoware
                                        </a>
                                    </div>
                                </div>
                            </Card>

                            <Card className="max-w-sm">
                                <div className="flex justify-end px-4 pt-4"></div>
                                <div className="flex flex-col items-center pb-10">
                                    <Image
                                        height={96}
                                        alt='Teacher'
                                        src="/death.jpg"
                                        width={96}
                                        className="mb-3 rounded-full shadow-lg"
                                    />
                                    <h5 className="mb-1 w-72 text-center text-xl font-medium text-gray-900 dark:text-white">
                                        Тихомирова Елизавета Алексеевна
                                    </h5>
                                    <span className="text-sm text-gray-500 dark:text-gray-400">
                                        Преподаватель
                                    </span>
                                    <div className="mt-4 flex space-x-3 lg:mt-6">
                                        <a
                                            href="#"
                                            className="inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                        >
                                            Написать в Samoware
                                        </a>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </Accordion.Content>
                </Accordion.Panel>
            </Accordion>
        </div>
    );
}

export default Page
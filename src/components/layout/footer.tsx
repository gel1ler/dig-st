'use client'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React from 'react'

const Footer = () => {
    const path = usePathname()

    if (path !== '/login') return (
        <footer className="py-8 border-t bg-gray-100">
            <div className="container mx-auto px-4 flex flex-col md:grid grid-cols-3 justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <div className="flex flex-col items-center w-fit">
                        <Image
                            src="/logo.svg"
                            alt="Logo"
                            width={150}
                            height={150}
                        />
                        <p className='text-md'>МГТУ им. Н. Э. Баумана</p>
                    </div>
                </div>
                <div className="flex justify-center gap-4 mb-4 md:mb-0 mt-auto">
                    <a href="#" className="hover:text-gray-400">
                        <Image
                            src="/icons/vk.svg"
                            alt="Twitter"
                            width={30}
                            height={30}
                        />
                    </a>
                    <a href="#" className="hover:text-gray-400">
                        <Image
                            src="/icons/telegram.svg"
                            alt="Twitter"
                            width={30}
                            height={30}
                        />
                    </a>
                    <a href="#" className="hover:text-gray-400">
                        <Image
                            src="/icons/mail.svg"
                            alt="Twitter"
                            width={30}
                            height={30}
                        />
                    </a>
                    <a href="#" className="hover:text-gray-400">
                        <Image
                            src="/icons/phone.svg"
                            alt="LinkedIn"
                            width={30}
                            height={30}
                        />
                    </a>
                </div>
                <div className="text-sm text-end mt-auto">
                    <p>123 University Street, City, Country</p>
                    <p>Phone: +123 456 789</p>
                    <p>Email: info@university.edu</p>
                </div>
            </div>
            <div className="mt-8 text-center text-sm self-end">
                <p>&copy; {new Date().getFullYear()} МГТУ им. Баумана. Все права защищены</p>
            </div>
        </footer>
    )
}

export default Footer
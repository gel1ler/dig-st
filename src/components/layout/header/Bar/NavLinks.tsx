'use client'
import { Box, Typography } from '@mui/material'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

interface IText {
    children: string
    href: string
    noUpper?: boolean
}


const Text = ({ children, href, noUpper }: IText) => (
    <Link href={href}>
        <Typography
            className='transition-all duration-200 text-black hover:scale-105'
            sx={{
                fontSize: noUpper ? 15 : 14,
                // ':hover': {
                //     color: ''
                // }
            }}
        >
            {noUpper ? children : children.toUpperCase()}
        </Typography >
    </Link>
)

const NavLinks = () => {
    const path = usePathname()

    return (
        <Box className='flex gap-12 items-center justify-center mx-auto'>
            {path !== '/' ?
                <>
                    <Text href='/main'>
                        Главная
                    </Text>
                    <Text href='/schedule'>
                        Расписание
                    </Text>
                    <Text href='/services'>
                        Cправки
                    </Text>
                    <Text href='/teachers'>
                        Преподователи
                    </Text>
                    <Text href='/events'>
                        Мероприятия
                    </Text>
                    <Text href='#'>
                        Другие услуги
                    </Text>
                    <Text href='#'>
                        Поддержка
                    </Text>
                </>
                : null
            }
        </Box >
    )
}

export default NavLinks
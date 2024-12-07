'use client'
import React, { useEffect, useState } from 'react'
import { Box } from "@mui/material"
import Image from 'next/image'

export default function Loader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000); // Задержка в 3 секунды для имитации загрузки

        return () => clearTimeout(timer);
    }, []);

    return (
        <Box
            className={`loader w-screen h-screen fixed left-0 top-0 flex items-center justify-center bg-white transition-all duration-700 ${isLoading ? '' : 'opacity-0 pointer-events-none'}`}
            sx={{
                zIndex: 2000,
            }}
        >
            <Image
                src='/logo.svg'
                alt='logo'
                width={300}
                height={300}
            />
        </Box >
    )
}
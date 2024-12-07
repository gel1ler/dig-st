'use client'
import React, { useEffect, useState } from 'react'
import { AppBar } from '@mui/material'
import Bar from '../Bar/Bar'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import { usePathname } from 'next/navigation'

const scrollHeight = 0.5

const ScrolledHeader = () => {
    const [height, setHeight] = useState<number>(0)
    const [isActive, setIsActive] = useState(false)
    const path = usePathname()

    useEffect(() => setHeight(window.innerHeight), [])

    useScrollPosition(({ currPos }) => {
        if (typeof scrollHeight === 'number') {
            const y: number = -currPos.y
            if (y >= height * scrollHeight) {
                setIsActive(true)
            }
            if (y < height * scrollHeight) {
                setIsActive(false)
            }
        }
    })

    return (
        <>
            {path !== '/login' ?
                <AppBar
                    position={path === '/' ? 'fixed' : 'static'}
                    elevation={0}
                    sx={{
                        zIndex: 0,
                        background: isActive ? 'white' : 'transparent',
                        boxShadow: isActive ? '0 0 5px 3px rgba(0,0,0,.1)' : '',
                    }}
                >
                    <Bar />
                </AppBar>
                : null}
        </>
    )
}

export default ScrolledHeader
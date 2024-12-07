import { Button } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const MyButton = ({ aos, text, click }: { aos?: boolean, text?: string, click?: () => void, }) =>
    <Button
        variant='outlined'
        className='w-fit z-10'
        onClick={click}
        data-aos={aos ? 'fade-up' : ''}
        sx={{
            borderRadius: '50px',
            border: '3px solid #303030',
            mt: 1,
            px: 4,
            py: '6px',
            fontSize: '15px',
            color: '#303030',
            '&:hover': {
                border: '3px solid #303030',
                backgroundColor: '#303030',
                color: 'white',
            }
        }}
    >
        {text}
    </Button>

export const MoreBtn = ({ click, href, text, aos }: { click?: () => void, href?: string, text?: string, aos?: boolean }) => {
    text = text || 'подробнее';

    if (href) {
        return (
            <Link href={href}>
                <MyButton aos={aos} text={text} />
            </Link>
        );
    } else {
        return (
            <MyButton aos={aos} text={text} click={click} />
        );
    }
};
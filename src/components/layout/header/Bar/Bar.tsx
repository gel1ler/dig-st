
import { Toolbar } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { Box } from '@mui/material'
import Link from 'next/link'
import NavLinks from './NavLinks'
import { usePathname } from 'next/navigation'

const Bar = ({ start }: { start?: boolean }) => {
  const isFullwidth = ' max-w-7xl mx-auto'
  const path = usePathname()

  return (
    <Toolbar
      className={'flex w-full' + isFullwidth}
      sx={{
        justifyContent: start ? ['flex-end', 'flex-end', 'center'] : 'space-between',
        my: 'auto',
        px: [2, 4, 4, 4],
        pt: 2
      }}
    >
      <Box className='flex flex-col gap-4'>
        <Box className='relative' sx={{ display: ['none', 'none', 'flex'], gap: 5 }}>
          <Link href='/'>
            <Image
              src="/kigi.png"
              alt="Logo"
              className='rounded-full'
              width={1920}
              height={100}
            />
          </Link>
          {path !== '/' ? <Image
            src="/photo.jpeg"
            alt="Logo"
            className='rounded-full absolute right-10 top-0 aspect-square object-cover'
            width={70}
            height={70}
          />
            : null}
        </Box>
        <hr />
        <Box sx={{ display: ['none', 'none', 'none', 'flex'] }}>
          <NavLinks />
        </Box>
      </Box>
    </Toolbar>

  )
}

export default Bar
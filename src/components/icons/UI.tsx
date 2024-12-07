import IB from "./IB"
import { Menu } from '@mui/icons-material'
import React from 'react'

const style = { fontSize: 30 }

export const MenuIcon = ({ setOpen }: { setOpen: () => void }) => { return (<IB f={setOpen}><Menu sx={style} /></IB>) }

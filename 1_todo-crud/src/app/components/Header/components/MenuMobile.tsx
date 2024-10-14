"use client"
import { useState } from "react";
import MenuIcon from '@/app/public/assets/icons/Menu.svg';
import Image from "next/image";
import { Drawer, Box, List, ListItem, ListItemButton, ListItemText } from "@mui/material";

import { Button } from '@mui/base/Button';
import { menuItems } from "../constants";

export const MenuMobile = ({ }) => {
    const [state, setState] = useState({ right: false, open: false });

    const toggleDrawer = (anchor: string, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) return null;
        setState({ ...state, [anchor]: open });
    };

    const MenuItem = (anchor: string) => (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {menuItems.map((text) => (
                    <ListItem key={text.label} disablePadding>
                        <ListItemButton sx={{ color: '#0F0E08' }} href={text.path}>
                            <ListItemText primary={text.label} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <>
            <Button onClick={toggleDrawer('right', true)}>
                <Image src={MenuIcon} alt={'Abrir/Cerrar menú'} width={24} height={22} />
            </Button>
            <Drawer
                anchor={'right'}
                open={state['right']}
                onClose={toggleDrawer('right', false)}
            >
                {MenuItem('right')}
            </Drawer>
        </>
    )
}
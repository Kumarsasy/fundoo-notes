import * as React from "react";
import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider } from "@mui/material";

import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import MenuIcon from "@mui/icons-material/Menu";

export default function TemporaryDrawer() {
    const [open, setOpen] = React.useState(false);
    const toggleMenu = () => {
        setOpen(!open);
    };

    return (
        <div>
            <MenuIcon onClick={toggleMenu} />
            <Drawer open={open} onClick={toggleMenu} anchor="left" onClose={() => setOpen(false)}>
                <Box>
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <LightbulbOutlinedIcon />
                                </ListItemIcon>
                                <ListItemText primary="Notes" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <NotificationsOutlinedIcon />
                                </ListItemIcon>
                                <ListItemText primary="Notifications" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <EditOutlinedIcon />
                                </ListItemIcon>
                                <ListItemText primary="Edit labels" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <ArchiveOutlinedIcon />
                                </ListItemIcon>
                                <ListItemText primary="Archive" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <DeleteOutlineOutlinedIcon />
                                </ListItemIcon>
                                <ListItemText primary="Delete" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
        </div>
    );
}

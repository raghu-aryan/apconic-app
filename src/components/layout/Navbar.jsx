"use client";
import React, { useState } from "react";
import {
  Box,
  Stack,
  Drawer,
  IconButton,
  List,
  ListItem,
  Hidden
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import Link from "next/link";

import companyLogo from '@/static/images/apconic.png';
import MenuItems from "./MenuItems";


const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Stack>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ padding: "8px 0" }}
      >
        <Box component={Link} href="/" color="purple">
          <Image
            src={companyLogo}
            alt="Picture of the author"
            width={240}
            height={66}
          />
        </Box>
        <Stack
          direction="row"
          gap={4}
          alignItems="center"
          sx={{
            "& a:hover": {
              textDecoration: "underline",
              transition: "ease-in-out 0.2s",
            },
            display: {
              xs: "none",
              sm: "none",
              md: "none",
              lg: "flex",
              xl: "flex",
            },
          }}
        >
          <MenuItems />
        </Stack>
        <Hidden lgUp>
          <HamburgerMenu open={open} handleDrawerOpen={handleDrawerOpen} />
        </Hidden>
      </Stack>
      <Hidden lgUp>
        <Drawer anchor="right" open={open} onClose={handleDrawerClose}>
          <List>
            <ListItem sx={{ width: 300 }}>
              <Stack
                direction="column"
                gap={2}
                sx={{
                  "& a:hover": {
                    color: "#FFFFF7",
                    transition: "ease-in-out 0.6s",
                  },
                }}
              >
                <MenuItems />
              </Stack>
            </ListItem>
          </List>
        </Drawer>
      </Hidden>
    </Stack>
  );
};

const HamburgerMenu = ({ handleDrawerOpen }) => {
  return (
    <IconButton
      sx={{ display: { md: "block", lg: "none" } }}
      onClick={handleDrawerOpen}
    >
      <MenuIcon />
    </IconButton>
  );
};

export default Navbar;

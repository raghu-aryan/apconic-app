"use client";
import React from "react";
import { Button } from "@mui/material";
import Link from "next/link";

import ServiceMenu from "./ServiceMenu";
import ProductMenu from "./ProductMenu";

const MenuItems = () => (
  <React.Fragment>
    <Link href="/" passHref>
      <Button variant="outlined" color="success" size="small">
        Home
      </Button>
    </Link>
    <ProductMenu />
    <ServiceMenu />
    <Link href="/industries" passHref>
      <Button variant="outlined" color="success" size="small">
        Industries
      </Button>
    </Link>
    <Link href="/about" passHref>
      <Button variant="outlined" color="success" size="small">
        About Us
      </Button>
    </Link>
    <Link href="/contact" passHref>
      <Button variant="outlined" color="success" size="small">
        Contact Us
      </Button>
    </Link>
  </React.Fragment>
);
export default MenuItems;

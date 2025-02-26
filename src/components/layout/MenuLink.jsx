"use client";
import React from "react";
import { ListItem } from "@mui/material";
import Link from "next/link";

import './menulink.css';

const MenuLink = ({ path, title }) => (
  <React.Fragment>
    <ListItem className="list-item">
      <Link href={path}>{title}</Link>
    </ListItem>
  </React.Fragment>
)
export default MenuLink;
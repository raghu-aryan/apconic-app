"use client";
import React from "react";
import {
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import { useRouter } from 'next/navigation';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

const ProductMenu = () => {
  const router = useRouter();
  const handleClick = (popupState, path) => {
    popupState.close();
    router.push(path);
  }

  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button variant="outlined" color="success" size="small" endIcon={<ArrowDownwardIcon />} {...bindTrigger(popupState)}>
            Products
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={()=> handleClick(popupState, '/goodstrack-inplant')}>
              Goodstrack Inplant
            </MenuItem>
            <MenuItem onClick={() => handleClick(popupState, '/goodstrack-iot-platform')}>
              Goodstrack IoT Platform
            </MenuItem>
            <MenuItem onClick={() => handleClick(popupState, '/unmanned-weighbridge')}>
              Unmanned Weighbridge
            </MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}

export default ProductMenu;
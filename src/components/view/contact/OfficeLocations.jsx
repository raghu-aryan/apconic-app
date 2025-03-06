"use client";
import { Grid2, Typography, Box } from "@mui/material";
import Image from "next/image";

import devOffice from '@/static/images/developement-office.png';
import headOffice from '@/static/images/head-office.png';

const OfficeLocations = () => {
  return <Grid2>
    <Typography variant="h3"><center>Our Addresses</center></Typography>
    <Grid2 container sx={{ display: 'flex', margin: 2 }} spacing={2}>
      <Grid2 size={6} className="office">
      <Grid2 container sx={{margin: 2}}>
      <Grid2 size={5} offset={4} >
        <Typography variant="h6">Development Center</Typography>
        <Box className="office-image">
          <Image
            width={120}
            height={100}
            alt="devOffice"
            src={devOffice}
          />
        </Box>
        <Typography variant="body2">
          Apconic Software Pvt. Ltd.
          Office 15A Spacelance,
          4th Floor City Vista,
          Fountain Road Kharadi,
          Pune MH 411014
        </Typography>
        </Grid2>
        </Grid2>
      </Grid2>
      <Grid2 size={6} className="office">
        <Grid2 container sx={{margin: 2}}>
          <Grid2 size={5} offset={4} >
            <Typography variant="h6">Head Office</Typography>
            <Box className="office-image">
              <Image
                width={120}
                height={100}
                alt="headOffice"
                src={headOffice}
              />
            </Box>
            <Typography variant="body2">
              Apconic Software Pvt. Ltd.
              Ground Floor, Plot No. 82, Near Medanta Hospital
              Scheme No. 53 Ratnalok Colony,
              Indore,
              Madhya Pradesh-452010
            </Typography>
          </Grid2>
        </Grid2>
      </Grid2>
    </Grid2>
  </Grid2>
}

export default OfficeLocations;
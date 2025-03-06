"use client";
import { Grid2, Typography, Box } from "@mui/material";
import Image from "next/image";

import salesTeam from '@/static/images/sales-team.png';
import supportTeam from '@/static/images/support-team.png';

const Teams = () => {
  return <Grid2>
    <Typography variant="h3"><center>Get In Touch</center></Typography>
    <Typography variant="body">
      <center>
        Our dedicated sales and support team is committed to providing expert guidance and assistance tailored to your needs.
      </center>
    </Typography>
    <Grid2 container sx={{ display: 'flex', margin: 2 }} spacing={2}>
      <Grid2 size={6} className="team">
        <Grid2 container sx={{ margin: 2 }}>
          <Grid2 size={7}>
            <Box className="team-image">
              <Image
                width={300}
                height={250}
                alt="salesTeam"
                src={salesTeam}
              />
            </Box>
          </Grid2>
          <Grid2 size={5} sx={{marginTop: 10}}>
            <Typography variant="h6">Sales Team</Typography>
            <Typography variant="body2">
              sales@apconic.com
            </Typography>
          </Grid2>
        </Grid2>
      </Grid2>
      <Grid2 size={6} className="team">
        <Grid2 container sx={{ margin: 2 }}>
          <Grid2 size={7} >
            <Box className="team-image">
              <Image
                width={300}
                height={250}
                alt="supportTeam"
                src={supportTeam}
              />
            </Box>
          </Grid2>
          <Grid2 size={5} sx={{marginTop: 10}}>
            <Typography variant="h6">Support Team</Typography>
            <Typography variant="body2">
              support@apconic.zohodesk.in
            </Typography>
          </Grid2>
        </Grid2>
      </Grid2>
    </Grid2>
  </Grid2>
}

export default Teams;
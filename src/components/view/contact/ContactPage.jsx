"use client";
import { Box, Grid2, Typography } from "@mui/material";
import Image from "next/image";

import { createContactRequest } from "@/app/actions/contact";
import ContactForm from "./Form";
import OfficeLocations from "./OfficeLocations";
import contactus1 from '@/static/images/contactus-1.png';
import contactchat from '@/static/images/contactchat.webp';
import Teams from "./Teams";

const ContactPage = () => {
  return <>
    <Grid2 container height={600}>
      <Grid2 size={6}>
        <Box sx={{
          marginTop: '25%',
          alignItems: "center",
          justifyContent: "center",
          padding: 4,
        }}>
          <Typography variant="h3">Contact Us</Typography>
          <Typography variant="body" >Reach Out: We're Here to Assist You Every Step of the Way.</Typography>
        </Box>
      </Grid2>
      <Grid2 size={6}>
        <Box sx={{ gap: 4 }}>
          <Image
            src={contactus1}
            alt="contactus"
            width={600}
            height={500}
          />
        </Box>
      </Grid2>
    </Grid2>
    <Teams />
    <OfficeLocations />
    <Grid2 container sx={{ backgroundColor: "white", borderRadius: '15px', padding: 2, marginTop: 5}}>
      <Grid2 size={6}>
        <Box sx={{ padding: 4 }}>
          <Image
            width={200}
            height={150}
            alt="contactchat"
            src={contactchat}
          />
          <Box>
          <Typography variant="body">
            <b>Send us a question.</b> We will contact you and give you our proposal completely free of charge
          </Typography>
          </Box>
        </Box>
      </Grid2>
      <Grid2 size={6}>
        <ContactForm createContactRequest={createContactRequest} />
      </Grid2>
    </Grid2>
  </>
}
export default ContactPage;
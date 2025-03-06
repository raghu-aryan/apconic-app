import { Grid2, Box, Typography, Divider } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

import companyLogo from '@/static/images/apconic.png';
import MenuLink from "./MenuLink";

const Footer = () => {
  return <Grid2 sx={{ marginTop: 5 }}>
    <Grid2 container>
      <Grid2 size={3}>
        <Box component={Link} href="/" color="success">
          <Image
            src={companyLogo}
            alt="Logo"
            width={240}
            height={66}
          />
        </Box>
        <Typography variant="body">Unlock cost savings and streamline complex business workflows using the power of Digitalization and Automation</Typography>
      </Grid2>
      <Grid2 size={7}>
        <Grid2 container spacing={2}>
          <Grid2 size={3}>
            <h3>Quick Links</h3>
            <MenuLink path="/" title="Home" />
            <MenuLink path="/about" title="About Us" />
            <MenuLink path="/industries" title="Industries" />
            <MenuLink path="contact" title="Contact Us" />
          </Grid2>
          <Grid2 size={5}>
            <h3>Products</h3>
            <MenuLink path="/goodstrack-inplant" title="Goodstrack Inplant" />
            <MenuLink path="/goodstrack-iot-platform" title="Goodstrack IoT Platform" />
            <MenuLink path="/unmanned-weighbridge" title="Unmanned Weighbridge" />
          </Grid2>
          <Grid2 size={4}>
            <h3>Services</h3>
            <MenuLink path="/salesforce" title="Salesforce" />
            <MenuLink path="/tableau" title="Tableau" />
            <MenuLink path="/custom-application" title="Custom Application" />
          </Grid2>
        </Grid2>
      </Grid2>
      <Grid2 size={2}>
        <h3>Follow us</h3>
      </Grid2>
    </Grid2>
    <Divider orientation="horizontal" />
    <Grid2 container spacing={5} className="copyright-section">
      <Grid2 offset={3} size={6}>© 2025 Apconic | All Rights Reserved | Powered by <Link href="/">Apconic</Link></Grid2>
    </Grid2>
  </Grid2>;
}

export default Footer;
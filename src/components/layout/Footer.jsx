import { Grid2 } from "@mui/material";

const Footer = () => {
  return <div>
    <Grid2 container>
      <Grid2 size={3}>Logo</Grid2>
      <Grid2 size={6}>
        <Grid2 container>
          <Grid2 size={3}>
            <h3>Quick Links</h3>
          </Grid2>
          <Grid2 size={3}>
            <h3>Products</h3>
          </Grid2>
          <Grid2 size={3}>
            <h3>Services</h3>
          </Grid2>
        </Grid2>
      </Grid2>
      <Grid2 size={3}>
        <h3>Follow us</h3>
      </Grid2>
    </Grid2>
  </div>;
}

export default Footer;
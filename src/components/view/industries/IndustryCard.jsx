"use client";
const { Grid2, Box } = require("@mui/material");

const IndustryCard = ({data}) => {
  return <Box>
    <Grid2 container key={data?.id}>
      <Grid2 size={2}>
        {data?.name}
      </Grid2>
      <Grid2>
        {JSON.stringify(data?.address)}
      </Grid2>
    </Grid2>
  </Box>
}
export default IndustryCard;
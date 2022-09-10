import React from "react";
import { Divider, Box, Grid, Paper, Card, Item } from "@mui/material";

import Typography from "@mui/material/Typography";

import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import SavingsOutlinedIcon from "@mui/icons-material/SavingsOutlined";
import AlarmOnOutlinedIcon from "@mui/icons-material/AlarmAddOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentOutlined";

const Featured = () => {
  return (
    <Box m={15} sx={{ flexGrow: 1 }} className="feautered-card" elevation={1}>
      <Grid
        mt={15}
        alignItems="center"
        justify="center"
        spacing={2}
        container
        className="featured-grid"
      >
        <Grid align="center" item xs={12} md={3} lg={3}>
          <div>
            <LocalShippingOutlinedIcon className="featured-icons" />
          </div>
          <Divider />
          <div>
            <Typography className="text" variant="subtitle1">
              Fast delivery
            </Typography>
            <Typography variant="body2">Start from $20</Typography>
          </div>
        </Grid>
        <Grid align="center" item xs={12} md={3} lg={3}>
          <div>
            <SavingsOutlinedIcon className="featured-icons" />
          </div>
          <Divider />
          <div>
            <Typography variant="subtitle1">Money Guarantee</Typography>
            <Typography variant="body2">7 Days Back</Typography>
          </div>
        </Grid>
        <Grid align="center" item xs={12} md={3} lg={3}>
          <div>
            <AlarmOnOutlinedIcon className="featured-icons" />
          </div>
          <Divider />
          <div>
            <Typography variant="subtitle1">90 Days</Typography>
            <Typography variant="body2">For free return</Typography>
          </div>
        </Grid>
        <Grid align="center" item xs={12} md={3} lg={3}>
          <div>
            <PaymentsOutlinedIcon className="featured-icons" />
          </div>
          <Divider />
          <div>
            <Typography variant="subtitle1">Payment</Typography>
            <Typography variant="body2">Secure payment</Typography>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Featured;

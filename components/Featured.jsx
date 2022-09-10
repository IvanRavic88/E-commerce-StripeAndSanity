import React from "react";
import { Divider, Box, Grid, withStyles } from "@mui/material";

import Typography from "@mui/material/Typography";

import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import SavingsOutlinedIcon from "@mui/icons-material/SavingsOutlined";
import AlarmOnOutlinedIcon from "@mui/icons-material/AlarmAddOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentOutlined";

import { whithStyles } from "@mui/styles";

const Featured = () => {
  const style = {
    icons: {
      padding: "1rem",
      color: "#2b3445",
      width: "5rem",
      height: "5rem",
    },
    card: {
      marginTop: "2rem",
    },
  };

  return (
    <Box m={15} sx={{ flexGrow: 1 }} className={style.card} elevation={1}>
      <Grid mt={15} alignItems="center" justify="center" spacing={2} container>
        <Grid align="center" item xs={12} md={3} lg={3}>
          <div>
            <LocalShippingOutlinedIcon
              className={style.icons}
              fontSize="large"
            />
          </div>
          <Divider />
          <div>
            <Typography variant="subtitle1">Fast delivery</Typography>
            <Typography variant="body2">Start from $20</Typography>
          </div>
        </Grid>
        <Grid align="center" item xs={12} md={3} lg={3}>
          <div>
            <SavingsOutlinedIcon className={style.icons} />
          </div>
          <Divider />
          <div>
            <Typography variant="subtitle1">Money Guarantee</Typography>
            <Typography variant="body2">7 Days Back</Typography>
          </div>
        </Grid>
        <Grid align="center" item xs={12} md={3} lg={3}>
          <div>
            <AlarmOnOutlinedIcon className={style.icons} />
          </div>
          <Divider />
          <div>
            <Typography variant="subtitle1">90 Days</Typography>
            <Typography variant="body2">For free return</Typography>
          </div>
        </Grid>
        <Grid align="center" item xs={12} md={3} lg={3}>
          <div>
            <PaymentsOutlinedIcon className={style.icons} />
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

export default withStyles(style)(Featured);

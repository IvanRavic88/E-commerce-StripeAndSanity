import React from "react";
import { Divider, Box, Grid } from "@mui/material";

import Typography from "@mui/material/Typography";

import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import SavingsOutlinedIcon from "@mui/icons-material/SavingsOutlined";
import AlarmOnOutlinedIcon from "@mui/icons-material/AlarmAddOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentOutlined";

import makeStyles from "./styles/featured.js";

const Featured = () => {
  const styles = makeStyles();

  return (
    <Box m={15} className={styles.card} elevation={1}>
      <Grid mt={15} alignItems="center" justify="center" spacing={2} container>
        <Grid
          className={styles.featuredIcons}
          align="center"
          item
          xs={12}
          md={3}
          lg={3}
        >
          <div>
            <LocalShippingOutlinedIcon className={styles.icons} />
          </div>
          <Divider />
          <Box>
            <Typography variant="subtitle1">Fast delivery</Typography>
            <Typography variant="body2">Start from $20</Typography>
          </Box>
        </Grid>
        <Grid
          className={styles.featuredIcons}
          align="center"
          item
          xs={12}
          md={3}
          lg={3}
        >
          <div>
            <SavingsOutlinedIcon className={styles.icons} />
          </div>
          <Divider />
          <Box>
            <Typography variant="subtitle1">Money Guarantee</Typography>
            <Typography variant="body2">7 Days Back</Typography>
          </Box>
        </Grid>
        <Grid
          className={styles.featuredIcons}
          align="center"
          item
          xs={12}
          md={3}
          lg={3}
        >
          <div>
            <AlarmOnOutlinedIcon className={styles.icons} />
          </div>
          <Divider />
          <Box>
            <Typography variant="subtitle1">90 Days</Typography>
            <Typography variant="body2">For free return</Typography>
          </Box>
        </Grid>
        <Grid
          className={styles.featuredIcons}
          align="center"
          item
          xs={12}
          md={3}
          lg={3}
        >
          <div>
            <PaymentsOutlinedIcon className={styles.icons} />
          </div>
          <Divider />
          <Box>
            <Typography variant="subtitle1">Payment</Typography>
            <Typography variant="body2">Secure payment</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Featured;

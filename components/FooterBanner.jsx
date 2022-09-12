import React from "react";
import Link from "next/link";
import { Card } from "@mui/material";
import { urlFor } from "../LIB/client";
import Button from "@mui/material/Button";
import makeStayles from "./styles/footer";
import { Typography } from "@material-ui/core";
const FooterBanner = ({
  footerBanner: {
    discount,
    largeText1,
    largeText2,
    saleTime,
    smallText,
    midText,
    product,
    buttonText,
    image,
    desc,
  },
}) => {
  const styles = makeStayles();
  return (
    <Card raised className={styles.footerBannerContainer}>
      <div className={styles.bannerDesc}>
        <div className={styles.left}>
          <Typography component="p" variant="body2">
            {discount}
          </Typography>
          <Typography variant="h3">{largeText1}</Typography>
          <Typography variant="h3">{largeText2}</Typography>
          <Typography componen>{saleTime}</Typography>
        </div>
        <div className={styles.right}>
          <Typography component="p">{smallText}</Typography>
          <Typography variant="h3">{midText}</Typography>
          <Typography component="p">{desc}</Typography>
          <Link href={`/product/${product}`}>
            <Button collor="error" variant="containded">
              {buttonText}
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default FooterBanner;

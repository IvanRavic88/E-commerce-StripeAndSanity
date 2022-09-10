import React from "react";
import Link from "next/link";
import { Card } from "@mui/material";
import { urlFor } from "../LIB/client";
import Button from "@mui/material/Button";

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
  return (
    <Card raised className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <p>{discount}</p>
          <h3>{largeText1}</h3>
          <h3>{largeText2}</h3>
          <p>{saleTime}</p>
        </div>
        <div className="right">
          <p>{smallText}</p>
          <h3>{midText}</h3>
          <p>{desc}</p>
          <Link href={`/product/${product}`}>
            <Button variant="containded">{buttonText}</Button>
          </Link>
        </div>
        {/* <img src={urlFor(image)} className="footer-banner-image"></img> */}
      </div>
    </Card>
  );
};

export default FooterBanner;

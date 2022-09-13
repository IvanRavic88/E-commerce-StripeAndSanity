import React from "react";
import Link from "next/link";
import { Card } from "@mui/material";
import Button from "@mui/material/Button";

const HeroBanner = ({
  heroBanner: { smallText, midText, largeText1, product, buttonText, desc },
}) => {
  return (
    <Card elevation={4} className="hero-banner-container">
      <div>
        <p className="herro-small-text">{smallText}</p>
        <h3>{midText}</h3>
        <h1>{largeText1}</h1>
        <div>
          <Link href={`/product/${product}`}>
            <Button variant="contained" color="error">
              {buttonText}
            </Button>
          </Link>
          <div className="desc">
            <h5>Description</h5>

            <p>{desc}</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default HeroBanner;

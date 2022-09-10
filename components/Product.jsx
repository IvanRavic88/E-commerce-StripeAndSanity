import React from "react";
import Link from "next/link";
import { urlFor } from "../LIB/client";
import { Card, CardMedia, Typography, Divider } from "@mui/material/";

const Product = ({ product: { image, name, slug, price } }) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <Card className="product-card" elevation={9} raised>
          <CardMedia
            className="product-card-image"
            component="img"
            image={urlFor(image && image[0])}
            alt="product"
          />
          <Typography
            variant="h6"
            gutterBottom
            className="product-padding-left"
          >
            {name}
          </Typography>
          <Divider />
          <Typography
            variant="h6"
            color={"black"}
            gutterBottom
            className="product-padding-left"
          >
            ${price}
          </Typography>
        </Card>
      </Link>
    </div>
  );
};

export default Product;

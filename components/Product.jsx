import React from "react";
import Link from "next/link";
import { urlFor } from "../LIB/client";
import { Card, CardMedia, Typography, Divider } from "@mui/material/";
import makeStyles from "./styles/product";

const Product = ({ product: { image, name, slug, price } }) => {
  const styles = makeStyles();
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <Card className={styles.productCard} elevation={9} raised>
          <CardMedia
            className={styles.productCardImage}
            component="img"
            image={urlFor(image && image[0])}
            alt="product"
          />
          <Typography
            variant="h6"
            gutterBottom
            className={styles.productPaddingLeft}
          >
            {name}
          </Typography>
          <Divider />
          <Typography
            variant="h6"
            color={"black"}
            gutterBottom
            className={styles.productPaddingLeft}
          >
            ${price}
          </Typography>
        </Card>
      </Link>
    </div>
  );
};

export default Product;

import React from "react";
import { Product, FooterBanner, HeroBanner, Featured } from "../components";
import { client } from "../LIB/client";

const Home = ({ product, bannerData }) => (
  <div>
    <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
    <div>
      <div>
        <Featured />
      </div>
      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>
    </div>
    <div className="products-container">
      {product?.map((product) => (
        <Product key={product._id} product={product} />
      ))}
    </div>
    <FooterBanner footerBanner={bannerData && bannerData[0]} />
  </div>
);

export const getServerSideProps = async () => {
  const query = "*[_type=='product']";
  const product = await client.fetch(query);

  const bannerQuery = "*[_type=='banner']";
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { product, bannerData },
  };
};

export default Home;

import React, { useRef } from "react";
import Link from "next/link";
import axios from "axios";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineLeft,
  AiOutlineShopping,
} from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";

import { Box, Card, Button, Typography } from "@mui/material";

import toast from "react-hot-toast";
import { useStateContext } from "../context/StateContex";
import { urlFor } from "../LIB/client";
import getStripe from "../LIB/getStripe";

const Cart = () => {
  const cartRef = useRef();
  const {
    totalPrice,
    totalQuantities,
    cartItems,
    setShowCart,
    toggleCartItemQuantity,
    onRemove,
  } = useStateContext();

  const handleCheckout = async () => {
    const stripe = await getStripe();

    const response = await axios.post("/api/stripe", {
      method: "POST",
      headers: { "Content-Type": "aplication/json" },
      data: cartItems,
    });

    if (response.statusCode === 500) return;

    const data = response.data;
    toast.loading("Redirecting...");

    stripe.redirectToCheckout({ sessionId: data.id });
  };

  return (
    <Box className="cart-wrapper" ref={cartRef}>
      <Card className="cart-container">
        <Button className="cart-heading" onClick={() => setShowCart(false)}>
          <AiOutlineLeft />
          <Typography component="p" className="heading">
            Your Cart
          </Typography>
          <Typography component="p" className="cart-num-items">
            ({totalQuantities} items)
          </Typography>
        </Button>
        {cartItems.length < 1 && (
          <div className="empty-cart">
            <AiOutlineShopping size={50} />
            <Typography component="h3">Your shopping bag is empty</Typography>
            <Link href="/">
              <button
                type="button"
                onClick={() => setShowCart(false)}
                className="btn"
              >
                Continue Shopping
              </button>
            </Link>
          </div>
        )}

        <div className="product-container">
          {cartItems.length >= 1 &&
            cartItems.map((item, index) => (
              <div className="product" key={item._id}>
                <img
                  src={urlFor(item?.image[0])}
                  className="cart-product-image"
                ></img>
                <div className="item-desc">
                  <div className="flex top">
                    <Typography component="h5">{item.name}</Typography>
                    <Typography component="h6">{item.price}</Typography>
                  </div>
                  <div className="flex bottom">
                    <div>
                      <p className="quantity-desc">
                        <span
                          className="minus"
                          onClick={() =>
                            toggleCartItemQuantity(item._id, "dec")
                          }
                        >
                          <AiOutlineMinus />
                        </span>
                        <span className="num">{item.quantity}</span>
                        <span
                          className="plus"
                          onClick={() =>
                            toggleCartItemQuantity(item._id, "inc")
                          }
                        >
                          <AiOutlinePlus />
                        </span>
                      </p>
                    </div>
                    <button
                      type="button"
                      className="remove-item"
                      onClick={() => onRemove(item)}
                    >
                      <TiDeleteOutline />
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {cartItems.length >= 1 && (
          <div className="cart-bottom">
            <div className="total">
              <Typography component="h3">Subtotal:</Typography>
              <Typography component="h3">${totalPrice}</Typography>
            </div>
            <div className="btn-container">
              <button type="button" className="btn" onClick={handleCheckout}>
                Pay with Stripe
              </button>
            </div>
          </div>
        )}
      </Card>
    </Box>
  );
};

export default Cart;

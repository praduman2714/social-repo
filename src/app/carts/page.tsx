"use client"
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Button,
  Typography,
  Stack,
  Paper, CardContent,
  Container, Grid, Card
} from '@mui/material';
import styles from "../posts/page.module.css";
import { addToCart, removeFromCart } from "@/redux/slices/addToCartSlice";


const CartPage = () => {

  const addToCart = useSelector((state: any) => state.addToCart);
  console.log(addToCart);
  const dispatch = useDispatch();
  return (
    <>
      <Container maxWidth="sm">
      {addToCart ? (
        addToCart.map((product: any) => (
          <div key={product.id} className={styles.post}>
            <h3 className={styles.title}>{product.name}</h3>
            <p className={styles.description}>{product.description}</p>
            <p className={styles.description}>{product.price}</p>

            <button
              className={styles.deleteButton}
              onClick={() => dispatch(removeFromCart(product.id))}
            >
              Remoe From Cart
            </button>
          </div>
        ))
      ) : (
        <p>No posts found.</p>
      )}Ï
      </Container>
    </>
  )
}
export default CartPage;
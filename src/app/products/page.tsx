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
import { addToCart } from "@/redux/slices/addToCartSlice";


const ProductPage = () => {

  const products = useSelector((state: any) => state.products);
  console.log(products);
  const dispatch = useDispatch();
  return (
    <>
      <Container maxWidth="sm">
      {products ? (
        products.map((product: any) => (
          <div key={products.id} className={styles.post} id={product.id}>
            <h3 className={styles.title}>{product.name}</h3>
            <p className={styles.description}>{product.description}</p>
            <p className={styles.description}>{product.price}</p>

            <button
              className={styles.deleteButton}
              onClick={() => dispatch(addToCart({product}))}
            >
              Add To Cart
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
export default ProductPage;
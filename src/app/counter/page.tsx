'use client';

import { useDispatch, useSelector } from 'react-redux';


import {
  Box,
  Button,
  Typography,
  Stack,
  Paper,
  Container,
} from '@mui/material';
import { decrement, increment, reset } from '@/redux/slices/counterSlice';

const CounterPage = () => {
  const counter = useSelector((state: any) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 4, marginTop: 8, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Redux Counter
        </Typography>

        <Typography variant="h2" color="primary" gutterBottom>
          {counter}
        </Typography>

        <Stack direction="row" spacing={2} justifyContent="center" mt={4}>
          <Button
            variant="contained"
            color="success"
            onClick={() => dispatch(increment())}
          >
            Add
          </Button>

          <Button
            variant="contained"
            color="error"
            onClick={() => dispatch(decrement())}
          >
            Sub
          </Button>

          <Button
            variant="outlined"
            color="secondary"
            onClick={() => dispatch(reset())}
          >
            Reset
          </Button>
        </Stack>
      </Paper>
    </Container>
  );
};

export default CounterPage;

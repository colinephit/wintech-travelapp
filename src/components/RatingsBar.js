import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

// ratings bar that displays the value passed in as argument 
export default function RatingsBar(val) {
  return (
    <Stack spacing={1}>
      <Rating name="half-rating-read" value={val} precision={0.1} readOnly />
    </Stack>
  );
}
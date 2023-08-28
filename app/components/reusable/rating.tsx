import { Box,Rating } from "@mui/material";
import React from "react";

function StarRating({ rating }: { rating: number | undefined }) {
  return (
    <Box className="rating" >
      <Rating name="read-only" value={rating} readOnly sx={{fontSize:"9px"}}/>
    </Box>
  );
}

export default StarRating;

import * as _React from "react";
import { useState, useEffect } from "react";

// internal imports
import { NavBar } from "../sharedComponents";
import { ShopProps } from "../../customHooks";
import { shopStyles } from "../Shop";
import {
  getDatabase,
  ref,
  onValue,
  off,
  // remove,
  // update,
} from "firebase/database";
import { Box, Stack, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export const Checkout = () => {
  const [currentCart, setCurrentCart] = useState<ShopProps[]>();
  const db = getDatabase();
  const userId = localStorage.getItem("uuid");
  const cartRef = ref(db, `carts/${userId}/`);
  useEffect(() => {
    // onValue() is listening for changes in cart
    onValue(cartRef, (snapshot) => {
      const data = snapshot.val(); //grabbing our cart data from the database

      // whats coming back from the database is essentially a dictionary/object
      // we want our ddata to be a list of objects so we can forloop/map over them
      let cartList = [];

      if (data) {
        for (let [key, value] of Object.entries(data)) {
          let cartItem = value as ShopProps;
          cartItem["id"] = key;
          cartList.push(cartItem);
        }
      }

      setCurrentCart(cartList as ShopProps[]);
    });

    // using the off to detach the listener (aka its basically refreshing the listener)
    return () => {
      off(cartRef);
    };
  }, []);
  console.log(currentCart);

  let total: number = 0;
  let quantity: number = 0;
  if (currentCart) {
    for (const product of currentCart) {
      total = total + parseInt(product?.price) * product?.quantity;
      quantity = quantity + product?.quantity;
    }
  }

  return (
    <div>
      <Box sx={shopStyles.main}>
        <NavBar />
        <Stack
          direction="column"
          alignItems="center"
          sx={{ marginTop: "100px", marginLeft: "100px" }}
        >
          <Typography variant="h4" sx={{ margin: "auto" }}>
            Welcome to Checkout page.
          </Typography>

          <Typography variant="h5" sx={{ margin: "auto" }}>
            Your Order summary
          </Typography>
        </Stack>

        <TableContainer component={Paper} sx={{ marginTop: "50px" }}>
          <Table sx={{ minWidth: 300 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Product Name</TableCell>
                <TableCell align="right">Quantity</TableCell>
                <TableCell align="right">Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {currentCart?.map((row) => (
                <TableRow
                  key={row.title}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.title}
                  </TableCell>
                  <TableCell align="right">{row.quantity}</TableCell>
                  <TableCell align="right">{row.price}</TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell>
                  <Typography variant="h4" align="right">
                    Total
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="h4" align="right">
                    {quantity}
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="h4" align="right">
                    ${(total || 0).toFixed(2)}
                  </Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
};

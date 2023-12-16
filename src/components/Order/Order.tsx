// import * as _React from 'react';
// import { DataGrid, GridColDef, GridRowSelectionModel } from '@mui/x-data-grid';
// import { useGetOrder } from '../../customHooks';
// import { useState, useEffect } from 'react';
// import {
//     Alert,
//     Box,
//     Button,
//     Dialog,
//     DialogActions,
//     DialogContent,
//     DialogContentText,
//     Snackbar } from '@mui/material';
// import { useForm, SubmitHandler } from 'react-hook-form';

// // Internal imports
// import { serverCalls } from '../../api';
// import { InputText } from '../sharedComponents';
// import { theme } from '../../Theme/themes';
// import { ShopProps } from '../../customHooks';
// import { SubmitProps } from '../Shop';
// import { MessageType } from '../Auth';

// const columns: GridColDef[] = [
//   { field: 'img', //thats what needs to match the keys on our objects/dictionaries
//   headerName: 'Image', // this is whats being displayed as the column header
//   width: 150,
//     renderCell:(param) => ( //we are rendering ntml thats why we have ()not {}
//       <img
//           src = {param.row.img} //param is whole list, row is object in the list, image is key on the object
//           alt={param.row.title}
//           style = {{ maxHeight: '100%', aspectRatio: '1/1'}} //making this a square no matter what size our image is
//       ></img>

//   )
//   },
//   {
//     field: 'title',
//     headerName: 'Title',
//     width: 150,
//     editable: true,
//   },
//   {
//     field: 'price',
//     headerName: 'Price',
//     width: 150,
//     editable: true,
//   },
//   {
//     field: 'saleprice',
//     headerName: 'Saleprice',
//     type: 'number',
//     width: 110,
//     editable: true,
//   },
//   {
//     field: 'rating',
//     headerName: 'Rating',
//     type: 'number',
//     width: 100,
//     editable: true,
//   },
//   {
//     field: 'quantity',
//     headerName: 'Quantity',
//     type: 'number',
//     width: 110,
//     editable: true,
//   },

// ];

// // const rows = [
// //   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
// //   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
// //   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
// //   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
// //   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
// //   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
// //   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
// //   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
// //   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// // ];

// // make an interface for what our data needs to look like when we checkout

// export interface CreateOrderProps {
//   order: ShopProps[]
// }

// interface UpdateProps {
//   id: string,
//   orderData: ShopProps[]
// }

// const UpdateQuantity = (props: UpdateProps) => {
//   // setting up our hooks
//   const [ openAlert, setOpen ] = useState(false)
//   const [ message, setMessage ] = useState<string>()
//   const [ messageType, setMessageType ] = useState<MessageType>()
//   const { register, handleSubmit } = useForm<SubmitProps>({})

//   // using the useEffect so we don't go into an infinite loop with an undefined id, only checks once and gives us an error
//   useEffect(() => {
//       if (props.id === 'undefined'){
//           setMessage('No Order Selected')
//           setMessageType('error')
//           setOpen(true)
//           setTimeout(()  => window.location.reload(), 2000)
//       }
//   }, [])

//           if (orderdata){
//               for (let [key, value] of Object.entries(data)){
//                   let cartItem = value as ShopProps
//                   cartItem['id'] = key
//                   cartList.push(cartItem)
//               }
//           }

//           setCurrentCart(cartList as ShopProps[])
//       })

//       // using the off to detach the listener (aka its basically refreshing the listener)
//       return () => {
//           off(cartRef)
//       }
//   },[]);

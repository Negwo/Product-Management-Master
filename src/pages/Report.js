import React from "react";
import Navbar from "../components/navbar";
import { Box } from "@mui/system";
import { DataGrid } from "@mui/x-data-grid";
import { useTheme } from "@mui/system";

export default function Report({ orderHistory, setOrderHistory, date }) {
  const theme = useTheme();

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 80,
      align: "center",
      headerClassName: "table-header",
      cellClassName: "table-cell",
      headerAlign: "center",
      renderCell: (params) => (
        <div style={{ textAlign: "center" }}>{params.value}</div>
      ),
    },
    {
      field: "product",
      headerName: "Product Name",
      width: 200,
      align: "center",
      headerClassName: "table-header",
      cellClassName: "table-cell",
      headerAlign: "center",
      renderCell: (params) => (
        <div style={{ textAlign: "center" }}>{params.value}</div>
      ),
    },
    {
      field: "price",
      headerName: "Price",
      width: 120,
      align: "center",
      headerClassName: "table-header",
      cellClassName: "table-cell",
      headerAlign: "center",
      renderCell: (params) => (
        <div style={{ textAlign: "center" }}>{params.value}</div>
      ),
    },
    {
      field: "stocks",
      headerName: "Quantity",
      width: 120,
      align: "center",
      headerClassName: "table-header",
      cellClassName: "table-cell",
      headerAlign: "center",
      renderCell: (params) => (
        <div style={{ textAlign: "center" }}>{params.value}</div>
      ),
    },
    {
      field: "totalPrice",
      headerName: "Total Price",
      type: "number",
      width: 160,
      align: "center",
      headerClassName: "table-header",
      cellClassName: "table-cell",
      headerAlign: "center",
      renderCell: (params) => (
        <div style={{ textAlign: "center" }}>{params.value}</div>
      ),
    },
    {
      field: "status",
      headerName: "Status",
      width: 120,
      align: "center",
      headerClassName: "table-header",
      cellClassName: "table-cell",
      headerAlign: "center",
      renderCell: (params) => (
        <div style={{ textAlign: "center" }}>{params.value}</div>
      ),
    },
  ];

  const rows = orderHistory.reduce((acc, order, index) => {
    const rowElements = order.items.map((item, itemIndex) => ({
      id: `${index}-${itemIndex}`,
      product: item.product,
      price: item.price,
      stocks: item.stocks,
      totalPrice: `${item.price * item.stocks}`,
      status: "Completed",
    }));

    return acc.concat(rowElements);
  }, []);

  return (
    <>
      <Navbar />
      <Box sx={{ display: "flex" }}>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            height: "75vh",
          }}
        >
          <DataGrid
            height={600}
            sx={{
              backgroundColor: "White",
              alignContent: "center",
              justifyContent: "center",
              alignItems: "center",
              "& .MuiDataGrid-header .table-header": {
                border: "1px solid black",
              },
              "& .MuiDataGrid-columnHeader": {
                backgroundColor: "black",
                color: "white",
                fontWeight: "bold",
              },
              "& .MuiDataGrid-cell .table-cell": {
                border: "1px solid black",
              },
            }}
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5, 10]}
            sortingOrder={["asc", "desc"]}
          />
        </Box>
      </Box>
    </>
  );
}

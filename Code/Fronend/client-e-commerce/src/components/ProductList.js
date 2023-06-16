import React, { useState, useEffect, useMemo, useRef } from "react";
import ProductService from "../services/ProductService";
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { useNavigate } from "react-router-dom";
const ProductsList = (props) => {
  const [Products, setProducts] = useState([]);
  const [searchProductName, setSearchProductName] = useState("");
  const ProductsRef = useRef();
  const navigate = useNavigate();
  ProductsRef.current = Products;

  useEffect(() => {
    retrieveProducts();
  }, []);

  const onChangeSearchProductName = (e) => {
    const searchProductName = e.target.value;
    setSearchProductName(searchProductName);
  };

  const retrieveProducts = () => {
    ProductService.getAll()
      .then((response) => {  
        setProducts(response.data);
      })
      .catch((e) => {
        
        console.log(e);
       // setProducts(data);
       navigate("/login");
      });
  };

  const refreshList = () => {
    retrieveProducts();
  };

  const removeAllProducts = () => {
    ProductService.removeAll()
      .then((response) => {
        console.log(response.data);
        refreshList();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const findByProductName = () => {
    ProductService.findByProductName(searchProductName)
      .then((response) => {
        console.log(response.data);
        setProducts(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const openProduct = (rowIndex) => {
    const id = ProductsRef.current[rowIndex].id;

    props.history.push("/Products/" + id);
  };

  const deleteProduct = (rowIndex) => {
    const id = ProductsRef.current[rowIndex].id;

    ProductService.remove(id)
      .then((response) => {
        props.history.push("/Products");

        let newProducts = [...ProductsRef.current];
        newProducts.splice(rowIndex, 1);

        setProducts(newProducts);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  // const columns = useMemo(
  //     () => [
  //       {
  //         Header: "ProductName",
  //         accessor: "ProductName",
  //       },
  //       {
  //         Header: "ArabicProductName",
  //         accessor: "ArabicProductName",
  //       },
  //       {
  //         Header: "Category",
  //         accessor: "Category"
  //       },
  //       {
  //         Header: "Actions",
  //         accessor: "actions",
  //         Cell: (props) => {
  //           const rowIdx = props.row.id;
  //           return (
  //             <div>
  //               <span onClick={() => openProduct(rowIdx)}>
  //                 <i className="far fa-edit action mr-2"></i>
  //               </span>

  //               <span onClick={() => deleteProduct(rowIdx)}>
  //                 <i className="fas fa-trash action"></i>
  //               </span>
  //             </div>
  //           );
  //         },
  //       },
  //     ],
  //     []
  //   );
  const columns = [
    { id: "productId", field: 'productId', headerName: 'Product Id', width: 170 },
    { id: "productName", field: 'productName', headerName: 'Product Name', width: 170 },
    { id: "arabicProductName", field: 'arabicProductName', headerName: 'Arabic Product Name', width: 170 },
    {
      id: "productCatagoryId",
      field: 'productCatagoryId',
      headerName: 'Product Catagory',
      width: 170,
    }
  ];
  // const data = [
  //   {
  //     id:"1",
  //     ProductName: "bezkoder Tut#1",
  //     ArabicProductName: "ArabicProductName Tut#1",
  //     Category: "C1"
  //   },
  //   {
  //     id:"2",
  //     ProductName: "bezkoder Tut#2",
  //     ArabicProductName: "ArabicProductName Tut#2",
  //     Category: "C1"
  //   }];

  // const {
  //   getTableProps,
  //   getTableBodyProps,
  //   headerGroups,
  //   rows,
  //   prepareRow,
  // } = useTable({
  //   columns,
  //   data: Products,
  // });
  return (
    <DataGrid
      getRowId={(row) => row.productId}
      rows={Products}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: { page: 0, pageSize: 10 },
        },
      }}
      pageSizeOptions={[10]}
    />

  );
};

export default ProductsList;  
import DataTable from "../../components/dataTable/DataTable";
import styles from "./products.module.scss";
import { products } from "../../config/data";
import { Link } from "react-router-dom";
import { useState } from "react";
import Add from "../../components/add/Add";

const Products = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "img",
      headerName: "Image",
      width: 80,
      renderCell: (params) => {
        return (
          <img
            style={{
              objectFit: "cover",
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              marginTop: "10px",
            }}
            src={params.row.img || "/noavatar.png"}
            alt=""
          />
        );
      },
    },
    {
      field: "title",
      type: "string",
      headerName: "Title",
      width: 230,
    },
    {
      field: "color",
      type: "string",
      headerName: "Color",
      width: 150,
    },
    {
      field: "price",
      type: "string",
      headerName: "Price",
      width: 130,
    },
    {
      field: "producer",
      headerName: "Producer",
      type: "string",
      width: 150,
    },
    {
      field: "createdAt",
      headerName: "Created At",
      width: 150,
      type: "string",
    },
    {
      field: "inStock",
      headerName: "In Stock",
      width: 150,
      type: "boolean",
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 120,
      renderCell: (params) => {
        return (
          <div>
            <Link to={`/products/${params.row.id}`}>
              <img className={styles.view} src="/view.svg" />
            </Link>
            <img
              style={{ cursor: "pointer" }}
              src="/delete.svg"
              onClick={() => deleteHandler(params.row.id)}
            />
          </div>
        );
      },
    },
  ];

  const deleteHandler = (id) => {
    const updateData = users.filter((item) => item.id !== id);
    setUsers(updateData);
  };
  const [users, setUsers] = useState(products);
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.users}>
      <div className={styles.info}>
        <h1>products</h1>
        <button onClick={() => setOpen(true)}>Add New Product</button>
      </div>
      <DataTable columns={columns} rows={users} />
      {open && <Add columns={columns} slug="products" setOpen={setOpen} />}
    </div>
  );
};

export default Products;

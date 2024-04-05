import DataTable from "../../components/dataTable/DataTable";
import styles from "./users.module.scss";
import { userRows } from "../../config/data";
import { Link } from "react-router-dom";
import { useState } from "react";
import Add from "../../components/add/Add";

const Users = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 60 },
    {
      field: "avatar",
      headerName: "Avatar",
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
      field: "firstName",
      headerName: "First name",
      width: 150,
      editable: true,
    },
    {
      field: "lastName",
      headerName: "Last name",
      width: 150,
      editable: true,
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
      editable: true,
    },
    {
      field: "phone",
      headerName: "Phone",
      width: 150,
      editable: true,
    },
    {
      field: "createdAt",
      headerName: "Created at",
      width: 150,
    },
    {
      field: "verified",
      headerName: "Verified",
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
            <Link to={`/users/${params.row.id}`}>
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
  const [users, setUsers] = useState(userRows);
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.users}>
      <div className={styles.info}>
        <h1>users</h1>
        <button onClick={() => setOpen(true)}>Add New User</button>
      </div>
      <DataTable columns={columns} rows={users} />
      {open && <Add columns={columns} slug="users" setOpen={setOpen} />}
    </div>
  );
};

export default Users;

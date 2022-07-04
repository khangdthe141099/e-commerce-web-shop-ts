import "./user-list.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../../../utils/data/dummyData";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useUser } from "../../../../features/hook";
import { deleteUserStart, getUserStart } from '../../../../features/user/userSlice'

export default function UserList() {
  const { users } = useUser();

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteUserStart(id))
  }

  useEffect(() => {
    dispatch(getUserStart())
  }, [dispatch])

  const columns = [
    { field: "_id", headerName: "ID", width: 200 },
    {
      field: "user",
      headerName: "User",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img
              className="userListImg"
              src={
                params.row.img ||
                "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"
              }
              alt=""
            />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "name",
      headerName: "Name",
      width: 180,
      renderCell: (params) => {
        return <div className="userListUser">{params.row.name}</div>;
      },
    },
    {
        field: "address",
        headerName: "Address",
        width: 180,
        renderCell: (params) => {
          return <div className="userListUser">{params.row.address}</div>;
        },
      },
      {
        field: "email",
        headerName: "Email",
        width: 180,
        renderCell: (params) => {
          return <div className="userListUser">{params.row.email}</div>;
        },
      },
      {
        field: "isAdmin",
        headerName: "Role",
        width: 120,
        renderCell: (params) => {
          return <div className="userListUser">{params.row.isAdmin ? 'Admin' : 'User'}</div>;
        },
      },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row._id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
                onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={users}
        disableSelectionOnClick
        columns={columns}
        getRowId={(row) => row._id}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}

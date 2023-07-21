import { Button } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import axios from "axios";
import * as React from "react";
import { Navigate } from "react-router-dom";
import SimpleBackdrop from "../Common/Backdrop";
import ResetModal from "./TimeAllocate";
import { baseURL } from "../../Config";


export default function ShowData({ what, data }) {
  let columns = [];
  console.log(Array.from(data));
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };
  if (what === "Users") {
    columns = [
      { id: "id", label: "User Id", minWidth: 50, maxWidth: 100 },
      { id: "email", label: "Email", minWidth: 170 },
      { id: "name", label: "Name", minWidth: 100 },
    ];
  }
  const handleClose2 = () => {
    setResetModal(false);
  };
  const [page, setPage] = React.useState(0);
  const [data1, setData] = React.useState({});
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const [id, setId] = React.useState(-1);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const [resetModal, setResetModal] = React.useState(false);
  return (
    <Paper
      flex={5}
      p={2}
      sx={{ width: "100%", overflow: "hidden", fontFamily: "Assistant" }}
    >
      <TableContainer sx={{ maxHeight: 440, fontFamily: "Assistant" }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead sx={{ fontFamily: "Assistant" }}>
            <TableRow sx={{ fontFamily: "Assistant" }}>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
              {what === "Users" && <TableCell>Provide Access</TableCell>}
              {what === "Users" && <TableCell>Allocate Time</TableCell>}
            </TableRow>
          </TableHead>
          <TableBody sx={{ fontFamily: "Assistant" }}>
            {Array.from(data)
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];

                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : what === "approved" || what === "unapproved"
                            ? column.id === "profession" ||
                              column.id === "skills"
                              ? value
                              : value.substr(0, 20)
                            : value}
                        </TableCell>
                      );
                    })}
                    {what === "Users" && (
                      <TableCell>
                        <Button
                          onClick={(e) => {
                            axios
                              .put(`${baseURL}/admin/access`, {
                                access: "yes",
                                id: row.id,
                              })
                              .then((res) => {
                                console.log(res);
                                window.location.reload();
                              })
                              .catch((err) => console.log(err));
                          }}
                          variant="contained"
                        >
                          {row.access === "yes"
                            ? "Remove Access"
                            : "Provide Access"}
                        </Button>
                      </TableCell>
                    )}
                    {what === "Users" && (
                      <TableCell>
                        <Button
                          onClick={(e) => {
                            setData(row);
                            setResetModal(true);
                          }}
                          variant="contained"
                        >
                          Allocate Time
                        </Button>
                      </TableCell>
                    )}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={Array.from(data).length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      {resetModal && (
        <ResetModal open={resetModal} handleClose={handleClose2} data={data1} />
      )}
      {id !== -1 && <Navigate to={`showbid/${id}`} />}
      {open && (
        <SimpleBackdrop
          open={open}
          setOpen={setOpen}
          handleClose={handleClose}
          handleToogle={handleToggle}
        />
      )}
    </Paper>
  );
}

import styles from "./dataTable.module.scss";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
const DataTable = ({ columns, rows }) => {
  return (
    <div className={styles.dataTable}>
      <DataGrid
        className={styles.dataGrid}
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        pageSizeOptions={[10]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
    </div>
  );
};

export default DataTable;

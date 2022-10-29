import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function PaginationOutlined({ characters }) {
  return (
    <Stack spacing={1}>
      <Pagination
        count={Math.ceil(characters.count / 10)}
        variant="outlined"
        color="primary"
      />
    </Stack>
  );
}

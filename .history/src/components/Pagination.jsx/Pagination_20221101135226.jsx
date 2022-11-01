import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function Paginations({page, characters, numPage}) {
  return (
    <Stack spacing={2}>
      <Pagination
        count={Math.ceil(characters.count / 10)}
        variant="outlined"
        color="primary"
        page={page}
        style={{ marginTop: "50px" }}
        onChange={(_, num) => numPage(num)}
      />
    </Stack>
  );
}

import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function PaginationControlled({
  setCurrentPage,
}: {
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}) {
  const [page, setPage] = React.useState(1);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    setCurrentPage(value);
  };

  return (
    <Stack spacing={2}>
      <Pagination count={10} page={page} onChange={handleChange} size="large" />
    </Stack>
  );
}

import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function SortSelect() {
  const [sort, setSort] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setSort(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">Sort</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={sort}
        label="Sort"
        onChange={handleChange}
      >
        <MenuItem value={"newest"}>Newest</MenuItem>
        <MenuItem value={"asc"}>Price: ASC</MenuItem>
        <MenuItem value={"dsc"}>Price: DSC</MenuItem>
      </Select>
    </FormControl>
  );
}

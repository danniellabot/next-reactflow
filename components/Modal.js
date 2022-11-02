// Modal Pop up
// consist of search bar
// and list of items
// when entering search bar, after 3 letters ,show list of items that match
// not styled with material ui

import React, { useState, useEffect } from "react";
import { Box, Button, TextField, Typography,Autocomplete } from "@mui/material";

const Modal = ({ open, onClose, items }) => {
  const [search, setSearch] = useState("");
  const [filteredItems, setFilteredItems] = useState("");

  // create a list of tempItems that contains a list of car brands

  useEffect(() => {
    const tempItems = [
      { name: "Audi" },
      { name: "BMW" },
      { name: "Chevrolet" },
      { name: "Dodge" },
      { name: "Ford" },
      { name: "Honda" },
      { name: "Hyundai" },
      { name: "Jeep" },
      { name: "Kia" },
      { name: "Lexus" },
      { name: "Mazda" },
      { name: "Mercedes-Benz" },
      { name: "Nissan" },
      { name: "Subaru" },
      { name: "Toyota" },
      { name: "Volkswagen" },
    ];
    setFilteredItems(
      tempItems.filter((tempItem) =>
        tempItem.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search]);

  return (
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        // bgcolor: "background.paper",
        boxShadow: 24,
        p: 4,
      }}
    >
      <Typography variant="h6" component="div" gutterBottom>
        Search Items
      </Typography>
      {/* Use Autocomplete */}
        <Autocomplete
            freeSolo
            id="combo-box-demo"
            options={filteredItems}
            getOptionLabel={(option) => option.name}
            style={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
        />
      <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
        <Button onClick={onClose}>Cancel</Button>
        <Button
          onClick={() => {
            onClose();
            setSearch("");
          }}
          variant="contained"
        >
          Select
        </Button>
      </Box>
    </Box>
  );
};

export default Modal;

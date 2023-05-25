import React, { useState } from "react";
import { Box, Button } from "@mui/material";

const Classes = () => {
  // Example data array
  const data = Array.from({ length: 50 }, (_, index) => `Item ${index + 1}`);

  const itemsPerPage = 10; // Number of items to display per page
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsToShow = data.slice(startIndex, endIndex);

  return (
    <>
      <Box sx={{ marginTop: "50px", marginX: "60px" }}></Box>
      <div>
        <Box display="flex" justifyContent="center" mt={2} mb={2}>
          <Button
            variant="contained"
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Previous
          </Button>
          <Button
            variant="contained"
            disabled={endIndex >= data.length}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Next
          </Button>
        </Box>

        <div>
          {itemsToShow.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </div>
    </>
  );
};

export default Classes;

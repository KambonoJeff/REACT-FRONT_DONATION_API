import React, { useState, useEffect } from 'react';
import axios from 'axios'; // You may need to install axios

function PaginatedDataComponent() {
  const [data, setData] = useState([]); // Store the fetched data
  const [currentPage, setCurrentPage] = useState(1); // Track the current page
  const itemsPerPage = 10; // Define the number of items per page

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`/api/data?page=${currentPage}`);
      setData(response.data.data); // Assuming the API response contains a "data" property
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleNextClick = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePreviousClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <h1>Paginated Data</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li> // Replace with your actual data structure
        ))}
      </ul>
      <button onClick={handlePreviousClick} disabled={currentPage === 1}>
        Previous
      </button>
      <button onClick={handleNextClick}>Next</button>
    
    
    </div>
  );
}

export default PaginatedDataComponent;

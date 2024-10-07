import React, { useEffect, useState } from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import FlightSortTabs from "./FlightSortTabs";
import FlightCard from "./FlightCard";
import axios from "axios";

const FlightListing = () => {
  const [sortOption, setSortOption] = useState("Best");
  const [flightData, setFlightData] = useState([]);

  useEffect(() => {
    GetAllFlightsData();
  }, []);

  const GetAllFlightsData = async () => {
    const response = await axios.get("http://localhost:4000/getflights");
    setFlightData(response.data);
  };

  const handleSortChange = (newSortOption) => {
    setSortOption(newSortOption);
  };

  const sortedFlights = flightData.filter((flight) => {
    if (sortOption === "Cheapest") return flight.type === "Cheapest";
    if (sortOption === "Quickest") return flight.stops == "0";
    return flight.type === "Best";
  });
  return (
    <Box>
      <FlightSortTabs onSortChange={handleSortChange} />

      <Grid container spacing={2} mt={2}>
        {sortedFlights.map((flight) => (
          <Grid item xs={12} key={flight.id}>
            <FlightCard flight={flight} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FlightListing;

import React, { useState } from "react";
import FlightsList from "./components/FlightsList";
import ContingentsList from "./components/ContingentsList";
import { FlightProps } from "./utils/props";

function App() {
  const [selectedFlight, setSelectedFlight] = useState<FlightProps | null>(
    null
  );

  return (
    <div className="container">
      <h1 className="title">Airxelerate App</h1>
      <div className="flight-list">
        <h2>Flights List ✈</h2>
        <FlightsList
          onFlightSelection={(flight: FlightProps) => setSelectedFlight(flight)}
        />
      </div>
      <div className="flight-details">
        <h2>Flight Details</h2>
        {selectedFlight ? (
          <ContingentsList flight={selectedFlight} />
        ) : (
          <p>Select a flight from the table above</p>
        )}
      </div>
    </div>
  );
}

export default App;

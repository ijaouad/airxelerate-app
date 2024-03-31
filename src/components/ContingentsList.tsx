import React from "react";
import DataGrid, { Column } from "devextreme-react/data-grid";
import "devextreme/dist/css/dx.light.css";
import { FlightProps } from "../utils/props";

const ContingentsList = ({ flight }: { flight: FlightProps }) => {
  return (
    <DataGrid
      dataSource={flight.contingents}
      keyExpr="clientCode"
      showBorders={true}
      rowAlternationEnabled={true}
    >
      <Column dataField="clientCode" caption="Client Code" dataType="string" />
      <Column
        dataField="totalSeats"
        caption="Total Seats"
        alignment="left"
        dataType="number"
      />
      <Column
        dataField="bookedSeats"
        caption="Booked Seats"
        alignment="left"
        dataType="number"
      />
    </DataGrid>
  );
};

export default ContingentsList;

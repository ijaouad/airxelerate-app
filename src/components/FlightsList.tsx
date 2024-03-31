import React from "react";
import DataGrid, {
  Column,
  GroupPanel,
  Pager,
  Paging,
  SearchPanel,
} from "devextreme-react/data-grid";
import "devextreme/dist/css/dx.light.css";
import { FlightProps } from "../utils/props";
import { flights } from "../utils/data";

const FlightsList: React.FC<{
  onFlightSelection?(flight: FlightProps): void;
}> = ({ onFlightSelection }) => {
  const handleFlightSelection = (e: any) => {
    if (onFlightSelection) {
      onFlightSelection(e.selectedRowsData[0]);
    }
  };

  const pageSizes = [10, 20, 30, 50];

  return (
    <DataGrid
      dataSource={flights}
      showBorders={true}
      onSelectionChanged={handleFlightSelection}
      selection={{ mode: "single" }}
      rowAlternationEnabled={true}
    >
      <GroupPanel visible={true} />
      <SearchPanel visible={true} highlightCaseSensitive={true} />
      <Column
        caption="Flight"
        calculateCellValue={(data: FlightProps) =>
          `IATA: ${data.iataAirlineCode} - Flight Nº: ${data.flightNumber}`
        }
        dataType="string"
      />
      <Column dataField="flightDate" caption="Date" dataType="date" />
      <Column
        caption="Origin - Destination"
        calculateCellValue={(data: FlightProps) =>
          `${data.origin} - ${data.destination}`
        }
        dataType="string"
      />
      <Pager allowedPageSizes={pageSizes} showPageSizeSelector={true} />
      <Paging defaultPageSize={10} />
    </DataGrid>
  );
};

export default FlightsList;

export interface FlightProps {
  iataAirlineCode: string;
  flightNumber: string;
  flightDate: string;
  origin: string;
  destination: string;
  contingents: ContingentProps[];
}

export interface ContingentProps {
  clientCode: string;
  totalSeats: number;
  bookedSeats: number;
}

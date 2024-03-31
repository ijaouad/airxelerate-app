import { FlightProps } from "./props";


function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min) + min);
}

function generateFlightNumber(): string {
  return String(getRandomNumber(1, 100000)).padStart(5, "0");
}

function generateRandomDate(startDate: Date, endDate: Date): string {
  const randomDate = new Date(
    startDate.getTime() +
      Math.random() * (endDate.getTime() - startDate.getTime())
  );
  return randomDate.toISOString().slice(0, 10);
}

const cities: string[] = [
  "Marrakesh",
  "New York",
  "London",
  "Tokyo",
  "Sydney",
  "Paris",
  "Los Angeles",
  "Rome",
  "Dubai",
  "Moscow",
];

const clientCodes: string[] = [
  "C001",
  "C002",
  "C003",
  "C004",
  "C005",
  "C006",
  "C007",
  "C008",
  "C009",
  "C010",
];

const flights: FlightProps[] = [];
for (let i = 0; i < 100; i++) {
  const flight: FlightProps = {
    iataAirlineCode: `A${getRandomNumber(1, 100)}`,
    flightNumber: generateFlightNumber(),
    flightDate: generateRandomDate(
      new Date("2024-01-01"),
      new Date("2024-12-31")
    ),
    origin: cities[getRandomNumber(0, cities.length)],
    destination: cities[getRandomNumber(0, cities.length)],
    contingents: [],
  };

  for (let j = 0; j < getRandomNumber(1, 4); j++) {
    const clientCode: string =
      clientCodes[getRandomNumber(0, clientCodes.length)];
    const totalSeats: number = getRandomNumber(10, 30);
    const bookedSeats: number = getRandomNumber(0, totalSeats + 1);

    flight.contingents.push({
      clientCode: clientCode,
      totalSeats: totalSeats,
      bookedSeats: bookedSeats,
    });
  }

  flights.push(flight);
}

export { flights };

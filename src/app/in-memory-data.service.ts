import { InMemoryDbService } from "angular-in-memory-web-api";

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const locations = [
      {
        id: 1,
        city: "New York",
        state: "NY"
      },
      {
        id: 2,
        city: "Hartford",
        state: "CT"
      },
      {
        id: 3,
        city: "Boston",
        state: "MA"
      },
      {
        id: 4,
        city: "New London",
        state: "CT"
      },
      {
        id: 5,
        city: "Philadelphia",
        state: "PA"
      },
      {
        id: 6,
        city: "New Haven",
        state: "CT"
      },
      {
        id: 7,
        city: "Albany",
        state: "NY"
      }
    ];
    return { locations };
  }
}

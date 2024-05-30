# 927621BAL031


---

# Average Calculator Microservice

The Average Calculator Microservice is a REST API-based service that calculates the average of a window of numbers fetched from a third-party server. It exposes an endpoint to fetch numbers based on different types and provides the average of those numbers.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/average-calculator-microservice.git
```

2. Navigate to the project directory:

```bash
cd average-calculator-microservice
```

3. Install dependencies:

```bash
npm install
```

4. Start the server:

```bash
npm start
```

The server will start running on `http://localhost:9876` by default.

## API Endpoints

- `GET /numbers/{numberid}`: Fetches numbers of a particular type (prime, fibonacci, even, random) from the third-party server and calculates the average of the windowed numbers.

Example request:

```bash
curl -X GET http://localhost:9876/numbers/e
```

Example response:

```json
{
  "windowPrevState": [],
  "windowCurrState": [2, 4, 6, 8],
  "numbers": [2, 4, 6, 8],
  "avg": 5.00
}
```

## Configuration

You can configure the window size of the average calculation by modifying the `WINDOW_SIZE` constant in the `numberService.js` file.

## Dependencies

- [Express](https://expressjs.com/): Fast, unopinionated, minimalist web framework for Node.js.
- [Axios](https://axios-http.com/): Promise-based HTTP client for the browser and Node.js.




---


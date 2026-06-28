import express from 'express';
import path from 'path';

const app = express();
const PORT = 3000;

const trains = [
  {
    id: 1,
    departure: '09:24',
    arrival: '12:47',
    destination: 'Amsterdam',
    platform: 1,
    status: 'Delayed',
  },
  {
    id: 2,
    departure: '06:31',
    arrival: '09:47',
    destination: 'Paris',
    platform: 2,
    status: 'On Time',
  },
  {
    id: 3,
    departure: '13:01',
    arrival: '16:17',
    destination: 'Paris',
    platform: 3,
    status: 'Delayed',
  },
  {
    id: 4,
    departure: '07:58',
    arrival: '09:56',
    destination: 'Brussels',
    platform: 3,
    status: 'On Time',
  },
  {
    id: 5,
    departure: '16:55',
    arrival: '19:12',
    destination: 'Brussels',
    platform: 4,
    status: 'On Time',
  },
  {
    id: 6,
    departure: '10:01',
    arrival: '13:17',
    destination: 'Paris',
    platform: 4,
    status: 'On Time',
  },
  {
    id: 7,
    departure: '14:28',
    arrival: '17:44',
    destination: 'Amsterdam',
    platform: 1,
    status: 'On Time',
  },
  {
    id: 8,
    departure: '11:34',
    arrival: '13:32',
    destination: 'Brussels',
    platform: 2,
    status: 'Cancelled',
  },
  // TODO: EURO-01 — add your new train here
];

// TODO: EURO-02 — fill in the four missing lines inside this function
function calculateDuration(departure: string, arrival: string): string {
  // Step 1: split "06:31" into hours and minutes, e.g. depHours = 6, depMins = 31
  // const [depHours, depMins] = departure.split(':').map(Number);
  // const [arrHours, arrMins] = arrival.split(':').map(Number);

  // Step 2: convert both times to total minutes since midnight
  // const departureTotal      = depHours * 60 + depMins;
  // const arrivalTotal        = arrHours * 60 + arrMins;

  // Step 3: fill in the ??? to complete the calculation
  // const differenceInMinutes = ???
  // const hours               = Math.floor(???)
  // const mins                = ??? % 60
  // return `${hours}h ${mins}m`

  return 'N/A'; // delete this line once you have filled in the steps above
}

app.use(express.static(path.join(__dirname, '../public')));

app.get('/api/trains', (req, res) => {
  const { destination } = req.query;

  let result = [...trains];

  if (destination) {
    result = result.filter(
      (train) =>
        train.destination.toLowerCase() === (destination as string).toLowerCase()
    );
  }

  // TODO: EURO-03 — uncomment and complete the sort below
  // result.sort((a, b) => {
  //   if (a.departure < b.departure) return ???;
  //   if (a.departure > b.departure) return ???;
  //   return 0;
  // });

  // TODO: EURO-04 — add status filtering here
  // const { status } = req.query;
  // if (status) {
  //   result = result.filter(...)
  // }

  const withDuration = result.map((train) => ({
    ...train,
    duration: calculateDuration(train.departure, train.arrival),
  }));

  res.json(withDuration);
});

app.listen(PORT, () => {
  console.log(`✅ Server running! Open http://localhost:${PORT} in your browser.`);
});

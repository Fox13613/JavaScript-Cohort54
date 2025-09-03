/*------------------------------------------------------------------------------
Full description atL https://github.com/HackYourFuture/Assignments/tree/main/1-JavaScript/Week4#exercise-2-whats-your-monday-worth

- Complete the function names `computeEarnings`. It should take an array of
  tasks and an hourly rate as arguments and return a formatted Euro amount
  (e.g: `€11.34`) comprising the total earnings.
- Use the `map` array function to take out the duration time for each task.
- Multiply each duration by a hourly rate for billing and sum it all up.
- Make sure the program can be used on any array of objects that contain a
  `duration` property with a number value.
------------------------------------------------------------------------------*/
const mondayTasks = [
  {
    name: 'Daily standup',
    duration: 30, // specified in minutes
  },
  {
    name: 'Feature discussion',
    duration: 120,
  },
  {
    name: 'Development time',
    duration: 240,
  },
  {
    name: 'Talk to different members from the product team',
    duration: 60,
  },
];

const hourlyRate = 25;

function computeEarnings(mondayTasks, hourlyRate/* TODO parameter(s) go here */) {
  // TODO complete this function
  const estimateTime = mondayTasks
    .filter(timeTask => timeTask.duration !== undefined) // only if we have duration to avoid errors
    .map(timeTask => timeTask.duration)
    //.reduce((sum, n) => sum + n, 0);

  const salaryPerTask = estimateTime.map (s => s / 60 * hourlyRate);

  //const totalAmount = estimateTime / 60 * hourlyRate;
  const totalAmount = salaryPerTask.reduce((sum, now) => sum + now, 0); // 0 - 1st value, now - current object, sum - accumulator

  return `€${totalAmount.toFixed(2)}`;
}

// ! Unit tests (using Jest)
describe('js-wk3-mondaysWorth', () => {
  test('computeEarnings should take two parameters', () => {
    // The `.length` property indicates the number of parameters expected by
    // the function.
    expect(computeEarnings).toHaveLength(2);
  });

  test('computeEarnings should compute the earnings as a formatted Euro amount', () => {
    const result = computeEarnings(mondayTasks, hourlyRate);
    const expected = '€187.50';
    expect(result).toBe(expected);
  });
});

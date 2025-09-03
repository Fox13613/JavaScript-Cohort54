
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

function computeEarnings(mondayTasks, hourlyRate) {

  const estimateTime = mondayTasks
    .filter(timeTask => timeTask.duration !== undefined) // only if we have duration to avoid errors
    .map(timeTask => timeTask.duration)
    //.reduce((sum, n) => sum + n, 0);    //we can replace string below 

  const salaryPerTask = estimateTime.map (s => s / 60 * hourlyRate);

  //const totalAmount = estimateTime / 60 * hourlyRate;   //we can replace string below 

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

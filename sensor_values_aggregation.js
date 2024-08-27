/* A Javascript program to aggregate sensor data from JSON files by room 
 * and date using temperature and humidity sensor values, created to
 * fulfill the requirements of Code Test.
 * Submitted by Fajar W. Adikusuma
 */

import { readFileSync } from 'fs';

// Read sensor data from the JSON file
const rawData = readFileSync('sensor_data.json');
const sensorData = JSON.parse(rawData).array;

// Group the data by room and date
const aggregatedData = {};

sensorData.forEach((data) => {
  const room = data.roomArea;
  const date = new Date(data.timestamp).toLocaleDateString();

  if (!aggregatedData[room]) {
    aggregatedData[room] = {};
  }

  if (!aggregatedData[room][date]) {
    aggregatedData[room][date] = { temperature: [], humidity: [] };
  }

  aggregatedData[room][date].temperature.push(data.temperature);
  aggregatedData[room][date].humidity.push(data.humidity);
});

/* Calculate minimum, maximum, median, and average values for temperature
 * and humidity
*/
function calculateStats(values) {
  const sortedValues = values.sort((a, b) => a - b);
  const min = sortedValues[0];
  const max = sortedValues[sortedValues.length - 1];
  const sum = sortedValues.reduce((acc, val) => acc + val, 0);
  const average = sum / sortedValues.length;

  let median;
  if (sortedValues.length % 2 === 0) {
    const mid = sortedValues.length / 2;
    median = (sortedValues[mid - 1] + sortedValues[mid]) / 2;
  } else {
    const mid = Math.floor(sortedValues.length / 2);
    median = sortedValues[mid];
  }

  return { min, max, median, average };
}

// Print the aggregated results to the CLI
for (const room in aggregatedData) {
  console.log(`Room: ${room}`);

  for (const date in aggregatedData[room]) {
    const tempStats = calculateStats(aggregatedData[room][date].temperature);
    const humStats = calculateStats(aggregatedData[room][date].humidity);

    console.log(`Date: ${date}`);
    console.log('Temperature:');
    console.log('  Minimum:', tempStats.min);
    console.log('  Maximum:', tempStats.max);
    console.log('  Median:', tempStats.median);
    console.log('  Average:', tempStats.average);

    console.log('Humidity:');
    console.log('  Minimum:', humStats.min);
    console.log('  Maximum:', humStats.max);
    console.log('  Median:', humStats.median);
    console.log('  Average:', humStats.average);
    console.log('---------------');
  }
}
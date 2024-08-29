# Sensor Values Aggregation

This program created to fulfill the requirements of Code Test in a particular company, submitted by Fajar W. Adikusuma. This is a JavaScript program that aggregates sensor data from a JSON file, performs some statistical calculations (minimum, maximum, median, and average) for temperature and humidity data for each room and date, and presents the results in the Command Line Interface (CLI).

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Installation](#installation)
3. [Usage](#usage)
4. [JSON Data Format](#json-data-format)
5. [Functions](#functions)
6. [Output](#output)
7. [Error Handling](#error-handling)

## Prerequisites

Before running the program, you need to have Node.js and npm (Node Package Manager) installed on your system.

## Installation

1. Clone the repository or download the JavaScript file `sensor_values_aggregation.js`.
2. Open a terminal or command prompt.
3. Navigate to the directory containing `sensor_values_aggregation.js`.
4. Install the required Node.js packages by running the following command:
```sh
npm install fs
```

## Usage

To use the program, follow these steps:

1. Ensure the `sensor_data.json` file is present in the same directory as `sensor_values_aggregation.js`.
2. Open a terminal or command prompt.
3. Navigate to the directory containing `sensor_values_aggregation.js`.
4. Run the program using Node.js:
```sh
node sensor_values_aggregation.js
```

## JSON Data Format

The `sensor_data.json` file contains an array of sensor data objects. Each object has the following properties:

- `temperature`: A numeric value representing the temperature.
- `humidity`: A numeric value representing the humidity.
- `roomArea`: A string representing the room area where the data was recorded.
- `id`: A unique identifier for the data.
- `timestamp`: A timestamp (in milliseconds) when the data was recorded.

## Functions

The program includes the following function:

- `calculateStats(values)`: A helper function that calculates statistical values (minimum, maximum, median, and average) from an array of numeric values.

## Output

The program prints the aggregated results in the CLI. For each room and date combination, it displays the following information:

- Room name
- Date
- Temperature:
  - Minimum
  - Maximum
  - Median
  - Average
- Humidity:
  - Minimum
  - Maximum
  - Median
  - Average

## Error Handling

The program includes basic error handling for the following scenarios:

- If the `sensor_data.json` file is not found or cannot be read, an error message is displayed.

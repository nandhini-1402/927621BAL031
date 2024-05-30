const WINDOW_SIZE = 10;
let storedNumbers = [];

const addNumber = (number) => {
  storedNumbers.push(number);
  if (storedNumbers.length > WINDOW_SIZE) {
    storedNumbers.shift(); 
  }
};

const getStoredNumbers = () => [...storedNumbers];

const calculateAverage = () => {
  const sum = storedNumbers.reduce((acc, num) => acc + num, 0);
  return sum / storedNumbers.length;
};

module.exports = {
  addNumber,
  getStoredNumbers,
  calculateAverage,
};

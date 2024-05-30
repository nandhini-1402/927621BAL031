const axios = require("axios");
const { addNumber, getStoredNumbers, calculateAverage } = require("./utils");

const WINDOW_SIZE = 10; 

const fetchNumbers = async (numberid) => {
  try {
    let numbers = [];
    const response = await axios.get(`http://20.244.56.144/test/${numberid}`);
    numbers = response.data.numbers;

    numbers.forEach(addNumber);

    while (getStoredNumbers().length > WINDOW_SIZE) {
      getStoredNumbers().shift(); 
    }

    return {
      windowPrevState: [], 
      windowCurrState: getStoredNumbers(),
      numbers: getStoredNumbers(),
      avg: calculateAverage().toFixed(2),
    };
  } catch (error) {
    console.error("Error fetching numbers:", error.message);
    throw new Error("Error fetching numbers");
  }
};

module.exports = {
  fetchNumbers,
};

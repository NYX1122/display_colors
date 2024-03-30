import chalk from 'chalk';

const displayColors = async (colors: Array<string>): Promise<void> => {
  return new Promise((resolve, reject) => {
    try {
      for (const color of colors) {
        console.log(chalk.hex(color)('Color: ') + color);
      }
      resolve();
    } catch (error) {
      reject(error);
    }
  });
};

export default displayColors;

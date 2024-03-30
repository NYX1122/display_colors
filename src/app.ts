import chalk from 'chalk';

const displayColors = (colors: Array<string>): void => {
  for (const color of colors) {
    console.log(chalk.hex(color)({ color }));
  }
};

export default displayColors;

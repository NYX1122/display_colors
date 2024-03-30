import chalk from 'chalk';

const displayColors = (colors: Array<string>): void => {
  for (const color of colors) {
    const coloredChalk = chalk.hex(color);
    console.log(coloredChalk(color));
  }
};

export default displayColors;

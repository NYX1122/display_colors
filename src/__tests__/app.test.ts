import { describe, it, expect, vi } from 'vitest';
import chalk from 'chalk';
import displayColors from '../app';

vi.mock('chalk', () => ({
  default: {
    hex: vi.fn().mockReturnValue(() => 'mocked color'),
  },
}));

describe('displayColors', () => {
  it('should log each color using chalk', () => {
    const colors = ['#ff0000', '#00ff00', '#0000ff'];
    const consoleLogSpy = vi.spyOn(console, 'log');

    displayColors(colors);

    expect(consoleLogSpy).toHaveBeenCalledTimes(colors.length);
    colors.forEach((color, index) => {
      expect(chalk.hex).toHaveBeenCalledWith(color);
      expect(consoleLogSpy).toHaveBeenNthCalledWith(index + 1, 'mocked color');
    });

    consoleLogSpy.mockRestore();
  });

  it('should not log anything if colors array is empty', () => {
    const colors: string[] = [];
    const consoleLogSpy = vi.spyOn(console, 'log');

    displayColors(colors);

    expect(consoleLogSpy).not.toHaveBeenCalled();

    consoleLogSpy.mockRestore();
  });
});

import chalk from 'chalk';
import displayColors from '../app.js';

// Define a custom console object type
type CustomConsole = {
  log: jest.Mock;
};

// Mock the console object with the custom type
const mockConsole: CustomConsole = {
  log: jest.fn(),
};

// Create a spy on the original console.log method
const originalConsoleLog = console.log;

describe('displayColors', () => {
  beforeEach(() => {
    // Replace the original console.log with the mocked version
    console.log = mockConsole.log;
  });

  afterEach(() => {
    // Restore the original console.log method
    console.log = originalConsoleLog;
    jest.clearAllMocks();
  });

  it('should display colors correctly', async () => {
    const colors = ['#FF0000', '#00FF00', '#0000FF'];
    await displayColors(colors);

    expect(mockConsole.log).toHaveBeenCalledTimes(3);
    expect(mockConsole.log).toHaveBeenNthCalledWith(1, chalk.hex('#FF0000')('Color: ') + '#FF0000');
    expect(mockConsole.log).toHaveBeenNthCalledWith(2, chalk.hex('#00FF00')('Color: ') + '#00FF00');
    expect(mockConsole.log).toHaveBeenNthCalledWith(3, chalk.hex('#0000FF')('Color: ') + '#0000FF');
  });

  it('should resolve the promise when colors are displayed successfully', async () => {
    const colors = ['#FF0000', '#00FF00', '#0000FF'];
    await expect(displayColors(colors)).resolves.toBeUndefined();
  });

  it('should reject the promise when an error occurs', async () => {
    const colors = ['#FF0000', '#00FF00', '#0000FF'];
    const errorMessage = 'Test error';

    // Mock the console.log function to throw an error
    mockConsole.log.mockImplementationOnce(() => {
      throw new Error(errorMessage);
    });

    await expect(displayColors(colors)).rejects.toThrow(errorMessage);
  });
});

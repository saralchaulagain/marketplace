type LogLevel = 'INFO' | 'DEBUG' | 'ERROR' | 'WARN';
const log = (level: LogLevel, message: string) => {
  const timestamp = new Date().toISOString();

  const formattedMessage = `[${timestamp}] [${level}] ${message}`;

  switch (level) {
    case 'ERROR':
      console.error(formattedMessage);
      break;
    case 'INFO':
      console.log(formattedMessage);
      break;
    default:
      console.warn(formattedMessage);
  }
};
export const logger = {
  info: (message: string): void => log('INFO', message),
  debug: (message: string): void => log('DEBUG', message),
  error: (message: string): void => log('ERROR', message),
  warn: (message: string): void => log('WARN', message),
  data: (value: unknown): void => {
    const timeStamp = new Date().toISOString();

    console.dir({ timeStamp, level: 'DATA', value }, { depth: null });
  },
};

import * as process from 'node:process';

export default () => ({
  port: process.env.PORT && parseInt(process.env.PORT, 10),
});

import * as process from 'node:process';

export default () => ({
  port: process.env.PORT && parseInt(process.env.PORT, 10),
  jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: process.env.JWT_EXPIRES_IN,
  },
});

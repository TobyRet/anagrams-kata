import { app } from './app'

export const startServer = () => {
  const port = 8080;
  return app.listen(port, () => {
    console.log(`host listening at http://localhost:${port}`);
  });
};
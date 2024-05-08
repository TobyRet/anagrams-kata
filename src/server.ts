import { Application } from 'express'

export const startServer = (app: Application, port: number) => {
  return app.listen(port, () => {
    console.log(`host listening at http://localhost:${port}`);
  });
};
import { Request, Response } from 'express';

import jsonServer from 'json-server';

const server = jsonServer.create();
const router = jsonServer.router('data.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.get('/meter/:id', (req : Request, res: Response) => {
  const { id } = req.params;

  const meters = router.db.getState().meters;
  
  const meter = meters.filter((meter: {
    guid: string;
}) => meter.guid === id);

  if (!meter) console.error(`⚠️  Could not find meter id: ${id}`);

  res.jsonp(meter);
});

server.use(router);

const APP_PORT = 3000;

const app = server.listen(APP_PORT, () => {
  console.log(`Server started on port ${APP_PORT}`);
});
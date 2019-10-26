import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Rodrigo Senna',
    email: 'rodrigosennasantos@hotmail.com',
    password_hash: '1234567',
    id: 1,
  });

  return res.json(user);
});

export default routes;

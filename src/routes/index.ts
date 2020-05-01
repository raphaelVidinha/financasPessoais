import { Router } from 'express';
import usuarioRoute from './usuario.route';

const routes = Router();

routes.use('/usuario', usuarioRoute);

export default routes;
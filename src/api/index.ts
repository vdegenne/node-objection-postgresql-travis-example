import * as express from 'express';

import {atomRouter} from './atom.router';
import {compositionRouter} from './composition.router';
import {elementRouter} from './element.router';

const morgan = require('morgan');


const api: express.Express = express()
                                 .use(express.json())
                                 .use('/api/atoms', atomRouter)
                                 .use('/api/elements', elementRouter)
                                 .use('/api/compositions', compositionRouter);

// morgan
process.env.NODE_ENV && process.env.NODE_ENV == 'dev' && api.use(morgan('dev'));


export default api;

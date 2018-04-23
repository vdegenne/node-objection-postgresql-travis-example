import {Router} from 'express';
import * as control from 'req-control';


import _atoms from '../models/Atom';


export const atomRouter: Router =
    Router().get('/', async(req, res) => res.json(await _atoms.query()));

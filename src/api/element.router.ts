import {Router} from 'express';
import * as control from 'req-control';

import _elements from '../models/Element';

const router: Router = Router();

// GET
router.get('/', async(req, res) => res.json(await _elements.query()));


// POST
router.post('/', async(req, res) => {
  if (control.post(req, res, 'name')) {
    res.json(await _elements.query().insertGraph(req.body));
  }
});


export {router as elementRouter};

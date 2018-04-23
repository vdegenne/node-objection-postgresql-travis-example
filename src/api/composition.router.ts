import {Router} from 'express';
import * as control from 'req-control';


// models
import _compositions from '../models/Composition';
import _elements from '../models/Element';

/* import {Element, default as _elementRepo} from '../models/element';
import _atomRepo from '../models/atom'; */

export const router: Router = Router();


// GET
router.get('/', async(req, res) => {
  let compositions = await _compositions.query().eager('element');
  res.send(compositions.map(({element_id, ...others}) => ({...others})));
});


router.get('/:elementName', async(req, res) => {
  const element = await _elements.query()
                      .where('name', req.params.elementName)
                      .eager('compositions.atom');

  res.send(element[0].compositions.map(
      ({atom_id, element_id, ...others}) => ({...others})));
});


export {router as compositionRouter};

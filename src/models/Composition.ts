import {RelationMappings} from 'objection';
import {Cream} from '../objection-cream';

// model
import Element from './Element';
import Atom from './Atom';



class Composition extends Cream {
  id !: number;
  count !: number;
  /* element */
  element_id !: number;
  element?: Element;
  /* atom */
  atom_id !: number;
  atom?: Atom;


  static tableName = 'compositions';
  static relationMappings: RelationMappings = {
    element: {
      relation: Cream.HasOneRelation,
      modelClass: `${__dirname}/Element`,
      join: {from: 'compositions.element_id', to: 'elements.id'}
    },
    atom: {
      relation: Cream.HasOneRelation,
      modelClass: `${__dirname}/Atom`,
      join: {from: 'compositions.atom_id', to: 'atoms.id'}
    }
  }
}

export default Composition;

import database from '../database';
import {Cream, RelationMappings} from '../objection-cream';


class Atom extends Cream {
  id !: number;
  name !: string;
  symbol !: string;
  atomic_number !: number;
  atomic_mass !: number;

  static tableName = 'atoms';
  /*   static relationMappings: RelationMappings = {

    } */
}


export default Atom;

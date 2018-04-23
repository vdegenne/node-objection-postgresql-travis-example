import {RelationMappings} from 'objection';
import {Cream} from '../objection-cream';
import Composition from './Composition';



class Element extends Cream {
  id !: number;
  name !: string;

  compositions?: Composition[];

  static tableName = 'elements';
  static relationMappings: RelationMappings = {
    compositions: {
      relation: Cream.HasManyRelation,
      modelClass: `${__dirname}/Composition`,
      join: {from: 'elements.id', to: 'compositions.element_id'}
    }
  }
}


export default Element;

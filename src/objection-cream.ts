import {Model} from 'objection';
import _database from './database';

export {RelationMappings} from 'objection';

export class Cream extends Model {
  static async count() {
    const count: any = await this.query().count();
    return parseInt(count[0].count);
  }
}

// we just bind the database to a model as soon as one is requested in our
// program.
Model.knex(_database);

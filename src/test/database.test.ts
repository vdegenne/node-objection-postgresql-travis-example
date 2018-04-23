import { readFileSync as read } from 'fs';
import * as chai from 'chai';

import database from '../database';

const assert = chai.assert;


beforeEach((done) => {
  const sql = ['destructure', 'structure', 'data']
    .map(f => read(`${__dirname}/../../sql/${f}.sql`).toString())
    .join('');

  database.raw(sql).then(() => done()).catch(err => done(err));
});

// after all
after(done => { database.destroy(done) });


suite('Model', () => {

  test('gives us a decent connection', async () => {
    try {
      return database.raw('select 1+1 as result');
    } catch (err) {
      throw new Error('brooo');
    }
  });
});

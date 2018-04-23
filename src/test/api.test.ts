import * as chai from 'chai';
import * as supertest from 'supertest';
import api from '../api';
import { Response } from 'superagent';

const expect = chai.expect;


suite('Api', () => {
  test('returns all the initial atoms', async () => {
    await supertest(api).get('/api/atoms').expect((res: Response) => {
      const body = JSON.parse(res.text);

      expect(res.status).to.equal(200);
      expect(body).to.be.a('array');
      expect(body.length).to.equal(3);
    });
  });
});

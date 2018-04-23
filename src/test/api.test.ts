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
      expect(res.type).to.equal('application/json');
      expect(body).to.be.a('array');
      expect(body.length).to.equal(3);
    });
  });

  test('add an element and return its id', async () => {
    await supertest(api).post('/api/elements').send({ name: 'Dioxide Carbon' }).expect((res: Response) => {
      const element: Element = JSON.parse(res.text);
      expect(res.status).to.equal(200);
      // expect 2 because there was one element before insert
      expect(element.id).to.equal(2);
    });
  });
});

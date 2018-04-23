import * as chai from 'chai';

import database from '../database';
// models
import _atoms from '../models/Atom';
import _elements from '../models/Element';
import Composition from '../models/Composition';
import { Model } from 'objection';


const assert = chai.assert;
const expect = chai.expect;



suite('Atom Model', () => {
  test('3 initial rows', async () => {
    expect(await _atoms.count()).to.equal(3);
  });
});


suite('Element Model', () => {
  test('1 initial row', async () => {
    expect(await _elements.count()).to.equal(1);
  });
});


suite('Composition Model', () => {
  test('it contains an atom', async () => {

    const compositions = await Composition.query()
      .eagerAlgorithm(Model.JoinEagerAlgorithm)
      .eager('atom')
      .where('atom.symbol', 'H');

    expect(compositions[0].atom.name).to.equal('Hydrogen');
  });
});

import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  number(i) { return `2016-${i}`; },
  customer() { return 'TCI'; }
});

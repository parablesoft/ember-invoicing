import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  number(i) { return `2016-${i}`; },
  customer() { return 'TCI'; },
  date(d) { return `11-${d+1}-2016`;},
  amount(i){ return i+i+1 * 500;}
});

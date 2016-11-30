import { Factory, faker } from 'ember-cli-mirage';

const INVOICE_STATUSES = ["draft","outstanding","draft","overdue","paid"];


export default Factory.extend({
  number(i) { return `2016-${i}`; },
  customer() { return faker.company.companyName(); },
  issuedOn(i) {return moment().subtract(i,"days");},
  status() {return INVOICE_STATUSES[Math.floor(Math.random() * INVOICE_STATUSES.length)];},
  dueOn(i) { return moment().add(i,"days");},
  amount(i){ return i+i+1 * 500;},
});

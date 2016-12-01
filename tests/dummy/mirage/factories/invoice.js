import { Factory, faker } from 'ember-cli-mirage';

const INVOICE_STATUSES = ["draft","outstanding","draft","overdue","paid"];


export default Factory.extend({
  number(i) { return `2016-${i}`; },
  issuedOn(i) {return moment().subtract(i,"days");},
  status() {return INVOICE_STATUSES[Math.floor(Math.random() * INVOICE_STATUSES.length)];},
  dueOn(i) { return moment().add(i,"days");},
  billToAddress(){return faker.address.streetAddress();},
  billToCity(){return faker.address.city();},
  billToState(){return faker.address.state();},
  billToZip(){return faker.address.zipCode();},
  billToEmail(){return faker.internet.email();},
  notes(){return faker.lorem.paragraph();},

  afterCreate(invoice,server){
    let lineItemsToCreate = faker.random.number(5);
    if(lineItemsToCreate===0){lineItemsToCreate = 1;}
    for(var i = 0;i < lineItemsToCreate;i++){
      server.create("line-item",{invoice});
    }
  }

});

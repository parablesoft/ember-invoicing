import { Factory,faker } from 'ember-cli-mirage';

export default Factory.extend({
  rate(){return faker.finance.amount(100);},
  quantity(){return faker.random.number(20);},
  description(){return faker.lorem.sentence();},

  afterCreate(lineItem,server){
    let invoiceItem = server.create("invoiceItem");
    lineItem.invoiceItem = invoiceItem;
    lineItem.save();
  }

});

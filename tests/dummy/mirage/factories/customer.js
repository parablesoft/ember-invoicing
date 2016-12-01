import { Factory,faker } from 'ember-cli-mirage';

export default Factory.extend({
  name() {return faker.company.companyName();},
  address(){return faker.address.streetAddress();},
  afterCreate(customer,server){
    server.create("invoice",{customer});
  }
});

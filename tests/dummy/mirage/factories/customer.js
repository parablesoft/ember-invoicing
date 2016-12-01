import { Factory,faker } from 'ember-cli-mirage';

export default Factory.extend({
  name() {return faker.company.companyName();},
  address(){return faker.address.streetAddress();},
  city(){return faker.address.city();},
  state(){return faker.address.stateAbbr();},
  zip(){return faker.address.zipCode();},
  email(){return faker.internet.email();},

  afterCreate(customer,server){
    let invoiceCount = faker.random.number(3);
    for(var i = 0;i < invoiceCount;i++){
      server.create("invoice",{customer});
    }
  }
});

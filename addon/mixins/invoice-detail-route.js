import Ember from 'ember';

const {get,RSVP,Mixin} = Ember;
export default Mixin.create({
  model(params){
    let invoice = this.store.findRecord("invoice",params.invoice_id );
    return RSVP.hash({
      invoice: invoice,
      newCustomer: this.store.createRecord('customer'),
      customer: invoice.then((data)=>{
	return get(data,"customer");
      }),
    });
  }
});

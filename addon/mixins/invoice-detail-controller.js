import Ember from 'ember';

const {set,get,computed,Mixin} = Ember;
const {alias} = computed;

export default Mixin.create({
  invoice: alias("model.invoice"),
  customer: alias("model.customer"),
  newCustomer: alias("model.newCustomer"),
  saveInvoice(){
    let {invoice,customer} = this.getProperties("invoice","customer");
    invoice.set('customer',customer);
    return invoice.save();
  },
  actions:{
    switchCustomer(){
      this.saveInvoice();
    },
    createCustomer(){
      let newCustomer = get(this,"newCustomer");
      return newCustomer.save().then(()=>{
	set(this,"customer",newCustomer);
	set(this,"newCustomer",this.store.createRecord("customer"));
	this.saveInvoice();
      });
    },
    updateCustomer(){
      return get(this,"customer").save();
    },
    closeInvoiceModal(){
      this.transitionToRoute("invoices");
    },
  }
});

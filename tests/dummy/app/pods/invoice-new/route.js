import Ember from "ember";

const {RSVP,Route} = Ember;

export default Route.extend({
model(){
  let newInvoice = this.store.createRecord("invoice",{status: "draft"});

  return new RSVP.hash({
    newInvoice: newInvoice,
    newLineItem: newInvoice.save().then(()=>{
      return this.store.createRecord("lineItem",{invoice: newInvoice});
    }),
    customers: this.store.findAll("customer"),
    newCustomer: this.store.createRecord("customer"),
    invoiceItems: this.store.findAll("invoiceItem"),
  });
},
actions:{
  willTransition(controller){
    this.controller.set("customer",null);
  }
}
});

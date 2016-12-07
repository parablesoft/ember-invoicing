import Ember from "ember";

const {RSVP,Route} = Ember;

export default Route.extend({
model(){
  return new RSVP.hash({
    newInvoice: this.store.createRecord("invoice"),
    customers: this.store.findAll("customer"),
    newCustomer: this.store.createRecord("customer"),
  });
},
actions:{
  willTransition(controller){
    this.controller.set("customer",null);
  }
}
});

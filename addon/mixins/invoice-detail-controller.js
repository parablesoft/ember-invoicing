import Ember from 'ember';

const {computed,Mixin} = Ember;
const {alias} = computed;

export default Mixin.create({
  invoice: alias("model"),
  actions:{
    closeInvoiceModal(){
      this.transitionToRoute("invoices");
    }
  }
});

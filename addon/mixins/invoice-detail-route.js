import Ember from 'ember';

export default Ember.Mixin.create({
  model(params){
    return this.store.findRecord("invoice",params.invoice_id );
  }
});

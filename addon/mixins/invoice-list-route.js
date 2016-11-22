import Ember from 'ember';

export default Ember.Mixin.create({
  model(params){
    // return this.store.query("invoice",{"filter[by_status]": params.status});
    return this.store.findAll("invoice");
  }
});

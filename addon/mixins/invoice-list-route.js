import Ember from 'ember';

export default Ember.Mixin.create({
  queryParams:{
    status:{
      refreshModel: true
    }
  },
  model(params){
    return this.store.query("invoice",{"filter[by_status]": params.status});
  }
});

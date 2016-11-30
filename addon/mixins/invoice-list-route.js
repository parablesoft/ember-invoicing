import Ember from 'ember';

export default Ember.Mixin.create({
  queryParams:{
    status:{
      refreshModel: true
    }
  },
  model(params){
    return this.store.query("invoice",{"filter[by_status]": params.status});
  },
  actions: {
    loading(transition, originRoute) {
      let controller = this.controllerFor(this.routeName);
      controller.set('isLoading', true);
      transition.promise.finally(function() {
	controller.set('isLoading', false);
      });
    }
  }
});

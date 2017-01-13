import Ember from 'ember';

const {RSVP} = Ember;
export default Ember.Mixin.create({
  queryParams:{
    status:{
      refreshModel: true
    }
  },
  model(params){
    let invoices = this.store.query("invoiceList",{"filter[by_status]": params.status});
    let summaryData = invoices.then((result) => {
      let meta = result.get("meta");
      return meta;
    });

    return RSVP.hash({
      invoices: invoices,
      summaryData: summaryData
    });
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

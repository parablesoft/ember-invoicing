import Ember from 'ember';
import layout from '../templates/components/invoice-list';

const {Component,computed,get} = Ember;
const {equal,sum,mapBy} = computed;

export default Component.extend({
  layout,
  isShowingAll: equal("status","All"),
  titleizedStatus: computed("status",function(){
    return Ember.String.capitalize(get(this,"status"));

  }),
  invoiceAmounts: mapBy("invoices","amount"),
  sumOfInvoices: sum("invoiceAmounts"),
});

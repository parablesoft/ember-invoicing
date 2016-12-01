import Ember from 'ember';
import layout from '../templates/components/invoice-list';

const {Component,computed,get} = Ember;
const {equal,sum,mapBy,empty} = computed;

export default Component.extend({
  layout,
  isShowingAll: equal("status","All"),
  isEmptyList: empty("invoices"),
  titleizedStatus: computed("status",function(){
    return Ember.String.capitalize(get(this,"status"));

  }),
  invoiceAmounts: mapBy("invoices","total"),
  sumOfInvoices: sum("invoiceAmounts"),
});

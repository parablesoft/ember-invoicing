import Ember from 'ember';
import layout from '../templates/components/invoice-list';

const {Component,computed,get} = Ember;
const {equal,sum,mapBy,empty} = computed;

export default Component.extend({
  layout,
  hideNewInvoice: false,
  hideDueDate: false,
  hideSummary: false,
  paymentComponent: null,
  isShowingPoNumber: false,
  isShowingAll: equal("status","All"),
  isViewingDrafts: equal("status","drafts"),
  isEmptyList: empty("invoices"),
  titleizedStatus: computed("status",function(){
    return Ember.String.capitalize(get(this,"status"));

  }),
  invoiceAmounts: computed("invoices",function(){
    let invoices = this.get("invoices");
    return invoices.map(function(item){
      return Ember.isEmpty(item.get("total")) ? 0 : parseFloat(item.get("total"));
    });
  }),
  sumOfInvoices: sum("invoiceAmounts"),
  actions:{
    deleteInvoice(invoice){
      this.attrs.onDeleteInvoice(invoice);
    }
  }
});

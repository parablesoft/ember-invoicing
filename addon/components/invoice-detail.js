import Ember from 'ember';
import layout from '../templates/components/invoice-detail';
import displayTemplate from "../templates/resource-cards/customer-card";
import editFormTemplate from "../templates/resource-cards/customer-form";
import searchTemplate from "../templates/resource-cards/customer-search";
import notFoundTemplate from "../templates/resource-cards/customer-not-found";
import newTemplate from "../templates/resource-cards/customer-new";
const {Component,set,get,computed} = Ember;
const {alias} = computed;

export default Component.extend({
  layout,
  editFormTemplate: editFormTemplate,
  notFoundTemplate: notFoundTemplate,
  newTemplate: newTemplate,
  searchTemplate: searchTemplate,
  displayTemplate: displayTemplate,
  actions:{
    closeInvoiceModal(){
      this.attrs.closeInvoiceModal();
    },
    createCustomer(){
      return this.attrs.onCreateCustomer();
    },
    updateCustomer(){
      return this.attrs.onUpdateCustomer();
    },
  },
});

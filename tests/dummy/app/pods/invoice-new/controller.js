import Ember from "ember";

import displayTemplate from "dummy/templates/resource-cards/customer-card";
import editFormTemplate from "dummy/templates/resource-cards/customer-form";
import searchTemplate from "dummy/templates/resource-cards/customer-search";
import notFoundTemplate from "dummy/templates/resource-cards/customer-not-found";
import newTemplate from "dummy/templates/resource-cards/customer-new";

const {set,get,Controller,computed} = Ember;
const {alias} = computed;
export default Controller.extend({
  invoice: alias("model.newInvoice"),
  customer: null,
  newCustomer: alias("model.newCustomer"),
  invoiceItems: alias("model.invoiceItems"),
  editFormTemplate: editFormTemplate,
  notFoundTemplate: notFoundTemplate,
  newTemplate: newTemplate,
  searchTemplate: searchTemplate,
  displayTemplate: displayTemplate,
  actions:{
    save(){
      let invoice = get(this,"newInvoice");
      invoice.set("customer",get(this,"customer"));
      invoice.save();
    },
    create(){
      let newCustomer = get(this,"newCustomer");
      return newCustomer.save().then(()=>{
	set(this,"customer",newCustomer);
	set(this,"newCustomer",this.store.createRecord("customer"));
      });
    },
    update(){
      return get(this,"customer").save();
    },
  }
});

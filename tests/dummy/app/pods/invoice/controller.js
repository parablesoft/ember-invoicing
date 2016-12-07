import Ember from "ember";
import InvoiceDetailController from "ember-invoicing/mixins/invoice-detail-controller";
import displayTemplate from "dummy/templates/resource-cards/customer-card";
import editFormTemplate from "dummy/templates/resource-cards/customer-form";
import searchTemplate from "dummy/templates/resource-cards/customer-search";
import notFoundTemplate from "dummy/templates/resource-cards/customer-not-found";
import newTemplate from "dummy/templates/resource-cards/customer-new";

const {Controller} = Ember;
export default Controller.extend(InvoiceDetailController,{
  editFormTemplate: editFormTemplate,
  notFoundTemplate: notFoundTemplate,
  newTemplate: newTemplate,
  searchTemplate: searchTemplate,
  displayTemplate: displayTemplate,
});

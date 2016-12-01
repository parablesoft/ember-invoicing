import DS from "ember-data";
import Ember from "ember";


const {computed} = Ember;
const {attr,Model,belongsTo} = DS;
export default Model.extend({
  invoiceItem: belongsTo("invoiceItem",{async: true}),
  invoice: belongsTo("invoice",{async: true}),
  rate: attr("number"),
  quantity: attr("number"),
  description: attr("string"),
  total: computed("rate","quantity",function(){
    let{rate,quantity} = this.getProperties("rate","quantity");
    return parseFloat(rate * quantity);
  }),


});

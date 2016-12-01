import DS from "ember-data";
import Ember from "ember";

const {get,computed} = Ember;
const {mapBy,sum} = computed;

const {attr,Model,belongsTo,hasMany} = DS;
export default Model.extend({
  number: attr('string'),
  customer: belongsTo('customer',{async: true}),
  lineItems: hasMany("lineItem",{async: true}),
  lineItemAmounts: mapBy("lineItems","total"),
  subtotal: sum("lineItemAmounts"), 
  total: computed("subtotal","tax",function(){
    let {subtotal,tax} = this.getProperties("subtotal","tax");
    return subtotal + tax;
  }),
  tax: 0,
  dueOn: attr('date'),
  issuedOn: attr("date"),
  status: attr('string'),
  billToAddress: attr("string"),
  billToCity: attr("string"),
  billToState: attr("string"),
  billToZip: attr("string"),
  billToEmail: attr("string"),
  notes: attr('string'),

});

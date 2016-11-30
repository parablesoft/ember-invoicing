import DS from "ember-data";


const {attr,Model} = DS;
export default Model.extend({
  number: attr('string'),
  customer: attr('string'),
  amount: attr('string'),
  dueOn: attr('date'),
  issuedOn: attr("date"),
  status: attr('string'),
});

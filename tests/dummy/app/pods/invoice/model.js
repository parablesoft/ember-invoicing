import DS from "ember-data";


const {attr,Model} = DS;
export default Model.extend({
	number: attr('string'),
	customer: attr('string'),
	amount: attr('string'),
	date: attr('string'),
});

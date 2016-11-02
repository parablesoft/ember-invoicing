import Ember from 'ember';

const {computed,Mixin} = Ember;
const {alias} = computed;

export default Mixin.create({
	queryParams: ["status"],
	status: "drafts",
	invoices: alias("model"),
});

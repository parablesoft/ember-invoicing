import DS from "ember-data";
import Ember from "ember";


const {computed} = Ember;
const {attr,Model,belongsTo} = DS;
export default Model.extend({
  customer: belongsTo("customer",{async: true}),
});

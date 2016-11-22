import Ember from 'ember';
import layout from '../templates/components/invoice-list';

const {Component,computed,get} = Ember;
const {equal} = computed;

export default Component.extend({
  layout,
  isShowingAll: equal("status","All"),
  titleizedStatus: computed("status",function(){
    return Ember.String.capitalize(get(this,"status"));

  }),
});

import Ember from 'ember';
import layout from '../templates/components/invoice-list-filter';

export default Ember.Component.extend({
  layout,
  classNames: ["invoice-list-filter","well"],
  actions:{
    setStartDate(){
      
    },
    setEndDate(){
    },
  }
});

import Ember from 'ember';
import layout from '../templates/components/invoice-list-table-header';

const {computed,get,Component} = Ember;
const {equal} = computed;

export default Component.extend({
  layout: layout,
  tagName: "span",
  classNames: ["invoice-list-table-header"],
  sortAsc: computed("currentSortColumn","currentSortDirection",function(){
    let {currentSortColumn,sortColumn} = this.getProperties("currentSortColumn","sortColumn");
    let isCurrentlySorted = currentSortColumn == sortColumn;
    return isCurrentlySorted ? !get(this,"currentSortDirection") : true;
  }),
  isCurrentColumn: computed("currentSortColumn","sortColumn",function(){
    let {currentSortColumn,sortColumn} = this.getProperties("currentSortColumn","sortColumn");
    return currentSortColumn === sortColumn;
  }),
  icon: computed("currentSortDirection",function(){
    return this.get("currentSortDirection") ? "sort-asc" : "sort-desc";
  }),
});

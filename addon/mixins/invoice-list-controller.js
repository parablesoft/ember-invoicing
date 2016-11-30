import Ember from 'ember';

const {computed,Mixin} = Ember;
const {alias,empty} = computed;

export default Mixin.create({
  queryParams: ["sortColumn","sortAsc","status","startDate","endDate"],
  sortAsc: true,
  sortColumn: "customer",
  status: "outstanding",
  startDate: null,
  endDate: null,
  invoices: computed("model","sortColumn","sortAsc",function(){
    let {model,sortColumn,sortAsc,status} = this.getProperties("model","sortColumn","sortAsc","status");
    return model.toArray().sort((a,b)=>{
      let sortPropertyA = a.get(sortColumn);
      let sortPropertyB = b.get(sortColumn);
      return sortAsc ? Ember.compare(sortPropertyA,sortPropertyB) : Ember.compare(sortPropertyB,sortPropertyA);
    });
  }),
  isEmptyList: empty("invoices"),
  actions:{
    setStartDate(startDate){
      get(this,"invoices");
      set(this,"startDate",startDate);
    },
    setEndDate(){
      get(this,"invoices");
      set(this,"startDate",startDate);
    }
  }
});

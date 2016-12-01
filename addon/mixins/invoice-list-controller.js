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
  invoicesModel: alias("model.invoices"),
  summaryData: alias("model.summaryData"),
  invoices: computed("invoicesModel","sortColumn","sortAsc",function(){
    let {invoicesModel,sortColumn,sortAsc,status} = this.getProperties("invoicesModel","sortColumn","sortAsc","status");
    return invoicesModel.toArray().sort((a,b)=>{
      let sortPropertyA = a.get(sortColumn);
      let sortPropertyB = b.get(sortColumn);
      return sortAsc ? Ember.compare(sortPropertyA,sortPropertyB) : Ember.compare(sortPropertyB,sortPropertyA);
    });
  }),
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

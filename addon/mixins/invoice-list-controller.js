import Ember from 'ember';

const {computed,Mixin} = Ember;
const {alias} = computed;

export default Mixin.create({
  queryParams: ["sortColumn","sortAsc","status","startDate","endDate"],
  sortAsc: true,
  sortColumn: "customer",
  status: "Outstanding",
  startDate: null,
  endDate: null,
  invoicesModel: alias("model"),
  invoices: computed("model","sortColumn","sortAsc",function(){
    let {model,sortColumn,sortAsc} = this.getProperties("model","sortColumn","sortAsc");
    return model.toArray().sort((a,b)=>{
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

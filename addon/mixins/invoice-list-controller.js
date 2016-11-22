import Ember from 'ember';

const {computed,Mixin} = Ember;
const {alias} = computed;

export default Mixin.create({
  queryParams: ["status","startDate","endDate"],
  status: "Outstanding",
  startDate: null,
  endDate: null,
  invoices: alias("model"),
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

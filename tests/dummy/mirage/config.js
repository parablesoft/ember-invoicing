import Ember from "ember";

const {computed} = Ember;
const {filterBy,mapBy,sum} = computed;
export default function() {
  this.get("invoices",function({invoices},request){
    let status = request.queryParams["filter[by_status]"]
    let meta = {
      overdue: sumAmounts(invoices,"overdue"),
      paid: sumAmounts(invoices,"paid"),
      draft: sumAmounts(invoices,"draft"),
      outstanding: sumAmounts(invoices,"outstanding"),
    };
    let data = status === "All" ? invoices.all() :  invoices.where({status: status});
    let json = this.serialize(data);
    json.meta = meta;
    return json;
  });
  this.get("/invoices/:id");
  function sumAmounts(invoices,status){
    let amounts = invoices.where({status: status}).models.map(function(item){return item.amount});

    let sum = 0;
    for(var i = 0;i < amounts.length;i++){
      sum += amounts[i];
    }
    return sum;
  }
}

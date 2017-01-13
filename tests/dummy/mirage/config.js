import Ember from "ember";

const {computed} = Ember;
const {filterBy,mapBy,sum} = computed;
export default function() {

  this.resource("invoice-items");
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
  this.post("/invoices",(schema,request) => {
    let params = JSON.parse(request.requestBody);
    params = {
      number: "1234",
    }
    console.log(params);
    return schema.invoices.create(params);
  });
  this.patch("/invoices/:id");
  this.get("customers",function({customers},request){
    let data = customers.all();
    return doSearch(this,data,request);
  });

  this.patch("/customers/:id");
  this.post("/customers");
  function sumAmounts(invoices,status){
    let amounts = invoices.where({status: status}).models.map(function(item){
      return item.lineItems.models.map(function(item){return parseFloat(item.rate) * parseInt(item.quantity)}).reduce(function(acc,value){
	return acc + value;
      },0);
    });
    let sum = 0;
    for(var i = 0;i < amounts.length;i++){
      sum += amounts[i];
    }
    return sum;
  }
  function getFilter(request){
    return request.queryParams["filter[search]"];
  }
  function doSearch(context,collection,request){
    let filter = getFilter(request);
    if(filter===undefined){
      return collection;
    }
    let queried = context.serialize(collection);
    let searchResults = queried.data.filter(function(item){
      return item.attributes.name.startsWith(filter);
    });
    queried.data = searchResults;
    return queried;
  }
}

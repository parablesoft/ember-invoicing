export default function() {
  this.get("invoices",({invoices},request)=>{
    let status = request.queryParams["filter[by_status]"]
    return status === "All" ? invoices.all() :  invoices.where({status: status});
  });
  this.get("/invoices/:id");
}

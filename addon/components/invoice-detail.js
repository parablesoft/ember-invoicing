import Ember from 'ember';
import layout from '../templates/components/invoice-detail';
import { alias,empty } from 'ember-computed-decorators';

const {run,get,set,Component,inject} = Ember;
const {later} = run;
const {service} = inject;

export default Ember.Component.extend({
  layout,
  dueDateRequired:true,
  cannotAddLineItems: "There are no invoice items configured. Before you can invoice, invoice items must be added.",
  session: service(),
  store: service(),
  @alias("invoice.invoiceLineItems") lineItems,
  @empty("invoice.dueDate") isInvoiceIncomplete,
  toggleEmailModal(show=true){
    set(this,"isShowingEmailModal",show);
  },
  billingEmail: "",
  emailSubject: "",
  dueDateSaved: false,
  showDueDateSaved(){
    set(this,"dueDateSaved",true);
    later(this,function(){
      set(this,"dueDateSaved",false);
    },3000);
  },
  actions:{
    addLineItem(){
      this.attrs["on-add-line-item"]();
    },
    delete(invoice){
      let confirmDelete = confirm("Are you sure you want to delete this invoice?");
      if(!confirmDelete){return;}
      this.attrs["on-delete"](invoice);
    },
    deleteLineItem(lineItem){
      this.attrs["on-delete-line-item"](lineItem);
    },
    sendInvoice(invoice,to,cc,subject,message){
      let messageParams = {to: to, cc: cc, subject: subject, message: message};
      return this.attrs["on-send-invoice"](invoice,messageParams);
    },
    updateLineItem(lineItem){
      return this.attrs["on-update-line-item"](lineItem);
    },
    download(invoice){
      let {id,number} = invoice.getProperties("id","number");
      let host = get(this,"host");
      let invoiceLabel = Ember.isPresent(number) ? number : id;
      let url = `${host}/api/v1/invoices/${id}.pdf`;
      Ember.$.ajax({
	url: url, 
	success: download.bind(true, "application/pdf", `invoice-${invoiceLabel}.pdf`),
	beforeSend: (xhr) => {
	  this.get('session').authorize("authorizer:devise", (headerName, headerValue) => {
	    xhr.setRequestHeader(headerName, headerValue);
	  });
	},
      });
    },
    setDueDate(value){
      let invoice = get(this,"invoice");
      invoice.set("dueDate",value);
      this.attrs["on-save-invoice"](invoice).then(()=>{
	this.showDueDateSaved();
      });
    },
    closeEmailModal(){
      this.toggleEmailModal(false);
    },
    openEmailModal(){
      this.toggleEmailModal();
    },
  }
});

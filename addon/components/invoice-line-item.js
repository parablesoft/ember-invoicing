import Ember from 'ember';
import layout from '../templates/components/invoice-line-item';
import Changeset from 'ember-changeset';
import { alias } from 'ember-computed-decorators';
import computed from 'ember-computed-decorators';

const{set,get,Component,run} = Ember;
const {later,cancel,debounce} = run;
export default Component.extend({
  layout,
  init(){
    this._super(...arguments);
    let lineItem = get(this, 'lineItem');
    let invoiceItem = lineItem.get("invoiceItem");
    set(this,"invoiceItem",invoiceItem);
    this.changeset = new Changeset(lineItem);
  },
  tagName: "tr",
  @alias("changeset.isDirty") isDirty,
  dirtyChanged: Ember.on('init', Ember.observer('isDirty', function() {
    let isDirty = this.get("changeset.isDirty");
    if(!isDirty){return;}
    debounce(this,this.save,1000);
  })),
  save(){
    let lineItem = this.changeset;
    this.attrs["on-update"](lineItem).then(()=>{
      if(!this.isDestroyed){
	set(this,"isSaved",true);
	let takeAway = later(this,function(){
	  set(this,"isSaved",false);
	},2000);
	set(this,"takeAway",takeAway);
      }
    });
  },
  willDestroy(){
    cancel(get(this,"takeAway"));
  },
  actions:{
    save(){
      this.save();
    },
    itemSelected(selected){
      set(this,"changeset.invoiceItem",selected);
    },
    delete(lineItem){
      this.attrs["on-delete"](lineItem);
    },
  }
});
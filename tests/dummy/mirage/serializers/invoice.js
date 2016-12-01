import BaseSerializer from './application';

export default BaseSerializer.extend({
  include: ['customer','line_items.invoice_item'],
});

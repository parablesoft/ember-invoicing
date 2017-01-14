/*jshint node:true*/
module.exports = {
  description: '',
  normalizeEntityName: function() {},
  afterInstall: function(options) {
    return this.addAddonsToProject({
      packages: [
        { name: 'ember-bootstrap', target: '0.11.3' },
        { name: 'ember-font-awesome', target: '2.2.0' },
        { name: 'ember-pikaday', target: '2.2.0' },
        { name: 'ember-aupac-typeahead', target: '2.1.1' },
        { name: 'ember-resource-card', target: '0.0.7' },
        { name: 'ember-cli-selectize', target: '0.5.11' },
        { name: 'ember-ui-helpers', target: '0.0.34' },
        { name: 'ember-cli-accounting', target: '1.0.2' },
        { name: 'email-modal', target: '0.0.8' },
        { name: 'ember-moment', target: '6.1.0' },
        { name: 'ember-changeset', target: '1.2.0' }
      ],
      blueprintOptions: {
        saveDev: true
      }
    }).then(()=>{
      return this.addPackagesToProject({
	packages: [
	{name: "semantic-ui-statistic"},
	{name: "semantic-ui-button"},
	{name: "semantic-ui-card"},
      	{name: "downloadjs"}
	]
      });
    });
  }
};

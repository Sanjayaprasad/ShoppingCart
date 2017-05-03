exports.config = {
  framework: 'jasmine2',
 
  specs: ['spec.js'],
  capabilities: {
  	browserName: 'chrome'
  },

  onPrepare: function(){
  	require('jasmine-reporters');
  	jasmine.getEnv().addReporter(
  		new jasmine.JUnitXmlReporter({
  			consolidateAll : true,
  			savePath: 'test',
  			filePrefix: 'xmloutput'
  	}));
  }
}
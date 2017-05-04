exports.config = {
  framework: 'jasmine2',
 
  specs: ['spec.js'],
  capabilities: {
  	browserName: 'chrome'
  },

  onPrepare: function(){
  	var reporters = require('jasmine-reporters');
  	jasmine.getEnv().addReporter(new jasmine.JUnitXmlReporter("tmp", true, true, "alt-prepend-"));	
  }
}
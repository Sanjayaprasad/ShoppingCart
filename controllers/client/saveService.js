app.factory('savedService', function() {
	 
	var savedData = {}
	 
	function set(data) {
		savedData = data;
	}

	function get() {
		return savedData;
	}

	return {
		set: set,
		get: get
	}

});

app.factory('productService', function() {
	 
	var savedData = {}
	 
	function set(data) {
		savedData = data;
	}

	function get() {
		return savedData;
	}

	return {
		set: set,
		get: get
	}

});
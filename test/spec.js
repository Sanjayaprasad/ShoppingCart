describe('ShoppingCart home page', function(){
		
	var result = element(by.binding('item_itemprice'));
	var totalResult = element(by.binding('totalPrice'));	

	beforeEach(function(){
		browser.get('http://localhost:3000/');
	});

	it('Should display the home page', function(){
		expect(browser.getTitle()).toEqual('Shopping-cart-submit-production');
	});

	it('should get the item price', function(){
		var itemname = "Adidas";
		var price = "500";
		element(by.model('item_ItemName')).sendKeys(itemname);
		element(by.id('singleitem')).click();
		expect(result.getText()).toEqual("500");
		browser.sleep(1000);
	});

	it('should display a error message when quantity is 0', function(){
		var itemqty = 0;
		var itemname = "Adidas";
		var price = "500";
		element(by.model('item_ItemName')).sendKeys(itemname);
		element(by.id('singleitem')).click();
		expect(result.getText()).toEqual("500");
		element(by.model('productData.qty')).sendKeys(itemqty);
		element(by.id('totalprice')).click();
		console.log("should Return an error message");
		browser.sleep(1000);
	});

	it('should calculate total price when quantity is 1', function(){
		var itemqty = 1;
		var itemname = "Adidas";
		var price = "500";
		element(by.model('item_ItemName')).sendKeys(itemname);
		element(by.id('singleitem')).click();
		expect(result.getText()).toEqual("500");
		element(by.model('productData.qty')).sendKeys(itemqty);
		element(by.id('totalprice')).click();
		var totalprice1 = itemqty * price;
		var actualResult = totalprice1.toString();
		console.log(actualResult);
		expect(totalResult.getText()).toEqual(actualResult);
		browser.sleep(1000);
	});

	it('should calculate total price when quantity is 2', function(){
		var itemqty = 2;
		var itemname = "Adidas";
		var price = "500";
		element(by.model('item_ItemName')).sendKeys(itemname);
		element(by.id('singleitem')).click();
		expect(result.getText()).toEqual("500");
		element(by.model('productData.qty')).sendKeys(itemqty);
		element(by.id('totalprice')).click();
		var totalprice1 = itemqty * price;
		var actualResult = totalprice1.toString();
		console.log(actualResult);
		expect(totalResult.getText()).toEqual(actualResult);
		browser.sleep(1000);
	});

	it('should calculate total price when quantity is 5', function(){
		var itemqty = 5;
		var itemname = "Adidas";
		var price = "500";
		element(by.model('item_ItemName')).sendKeys(itemname);
		element(by.id('singleitem')).click();
		expect(result.getText()).toEqual("500");
		element(by.model('productData.qty')).sendKeys(itemqty);
		element(by.id('totalprice')).click();
		var totalprice1 = itemqty * price;
		var actualResult = totalprice1.toString();
		console.log(actualResult);
		expect(totalResult.getText()).toEqual(actualResult);
		browser.sleep(1000);
	});

	it('Should display a error message if quantity is not available', function(){
		var itemqty = 24;
		var itemname = "Adidas";
		var price = "500";
		element(by.model('item_ItemName')).sendKeys(itemname);
		element(by.id('singleitem')).click();
		expect(result.getText()).toEqual("500");
		element(by.model('productData.qty')).sendKeys(itemqty);
		element(by.id('totalprice')).click();
		expect(element(by.css('.message')).isDisplayed()).toBe(true);
		browser.sleep(1000);
	});

	it('should clear all the fields if CLEAR button is clicked', function(){
		var itemqty = 5;
		var itemname = "Adidas";
		var price = "500";
		element(by.model('item_ItemName')).sendKeys(itemname);
		element(by.id('singleitem')).click();
		expect(result.getText()).toEqual("500");
		element(by.model('productData.qty')).sendKeys(itemqty);
		element(by.id('totalprice')).click();
		var totalprice1 = itemqty * price;
		var actualResult = totalprice1.toString();
		console.log(actualResult);
		expect(totalResult.getText()).toEqual(actualResult);
		browser.sleep(1000);
		element(by.id('cleardata')).click();
		expect(element(by.model('item_ItemName')).getAttribute('value')).toBe('');
		expect(element(by.model('productData.qty')).getAttribute('value')).toBe('');
		browser.sleep(1000);
	});

	it('should display a error message if the quantity is 0',function(){
		var itemqty = 0;
		var itemname = "Adidas";
		var price = "500";
		element(by.model('item_ItemName')).sendKeys(itemname);
		element(by.id('singleitem')).click();
		expect(result.getText()).toEqual("500");
		element(by.model('productData.qty')).sendKeys(itemqty);
		element(by.id('totalprice')).click();
		expect(element(by.css('.message')).isDisplayed()).toBe(true);
		browser.sleep(1000);
	});

	it('should display available sizes for the particular brand',function(){
		var itemname = "Adidas";
		var price = "500";
		element(by.model('item_ItemName')).sendKeys(itemname);
		element(by.id('singleitem')).click();
		expect(result.getText()).toEqual("500");
		expect($('[ng-show=IsVisible]').isDisplayed()).toBeTruthy();
		browser.sleep(1000);
	});

	it('should navigate to "UserDetails" when the totalprice is dispalyed', function(){
		var itemqty = 5;
		var itemname = "Adidas";
		var price = "500";
		element(by.model('item_ItemName')).sendKeys(itemname);
		element(by.id('singleitem')).click();
		expect(result.getText()).toEqual("500");
		element(by.model('productData.qty')).sendKeys(itemqty);
		element(by.id('totalprice')).click();
		var totalprice1 = itemqty * price;
		var actualResult = totalprice1.toString();
		console.log(actualResult);
		expect(totalResult.getText()).toEqual(actualResult);
		element(by.id('myButton')).click();
		
		browser.sleep(1000);
	});

	// it('should display the item in the "enter brand" text field when the radio button is checked', function(){
	// 	element(by.id('radio')).click();
	// });
});
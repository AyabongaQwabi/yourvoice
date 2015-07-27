
	
	$('#products').click(function () {			
			attachproducts();
			attachProductOptions();		
	});

	$('#sales').click(function () {
		attachSales();
		attachSalesOptions()
	})

	$('#purchases').click(function () {		
		attachPurchases();
		attachPurchaseOptions();
	});

	$('#perfomance').click(function () {
		attachPerfomances();
		attachSaalesOptions();
	});



//-----------------------------------------------------------------------------------------------//
	


	function attachproducts(){
		console.log('products clicked')
		var content = [];
		$.get('/api/products', function(results){
			$('#popUpDiv').empty();
			
			var content = "<table class='table'>";
			content += "<thead>    <tr>"+
				        "<th>Name</th>"+
				        "<th>Category</th> "+       
				        "<th></th>"+
				      "</tr>"+
				    "</thead>"
			results.products.forEach(function(product){
				console.log(JSON.stringify(product))
				content += "<tr id='"+product.id+"'>"
				content += "<td>" + product.name +"</td>"
				content += "<td>"+ product.category+"</td>"
				content += "<td><button type='button' id='editPurchase' class='btn btn-default'>Edit </button><button type='button' id='deleteProduct' class='btn btn-default'>Delete</button></td>"
				content += "</tr>"

			});
			content+= "</table>"
			setTimeout(function(){
				$('#popUpDiv').append(content);
			},300)
			$('#popUpDiv').fadeOut('fast');
			
			$('#popUpDiv').fadeIn('fast');

		});
	}
//-----------------------------------------------------------------------------------------------//
	

	function attachSales(){
		console.log('sales clicked')
		var content = [];
		$.get('/api/sales', function(results){
			$('#popUpDiv').empty()
			
			var content = "<table class='table'>";
			content += "<thead>    <tr>"+
				        "<th>Date</th>"+
				       " <th>Quantity</th>"+
				        "<th>Name</th> "+       
				        "<th>Price</th>"+
				        "<th></th>"+
				      "</tr>"+
				    "</thead>"
			results.sales.forEach(function(sale){

				content += "<tr id='"+sale.id+"'>"
				content += "<td>" + sale.date +"</td>"
				content += "<td>" + sale.qty +"</td>"
				content += "<td>"+  sale.name+"</td>"
				content += "<td>R"+ sale.price+"</td>"
				content += "<td><button type='button' id='editSale' class='btn btn-default'>Edit </button><button type='button' class='btn btn-default'>Delete </button></td>"
				content += "</tr>"

			});
			content+= "</table>"
			setTimeout(function(){
				$('#popUpDiv').append(content);
			},300)
			$('#popUpDiv').fadeOut('fast');
			
			$('#popUpDiv').fadeIn('fast');

		});
	}


//----------------------------------------------------------------------------------------------//
	

	function attachPurchases(){
		console.log('purhcases clicked')
		var content = [];
		$.get('/api/purchases', function(results){
			$('#popUpDiv').empty()
			
			var content = "<table class='table'>";
			content += "<thead>    <tr>"+
				        "<th>Date</th>"+
				       " <th>Name</th>"+
				        "<th>Supplier</th> "+       
				        "<th>Price</th>"+
				        "<th></th>"+
				      "</tr>"+
				    "</thead>"
			results.purchases.forEach(function(purchase){

				content += "<tr id='"+purchase.id+"'>"
				content += "<td>" + purchase.date +"</td>"
				content += "<td>" + purchase.name +"</td>"
				content += "<td>" + purchase.supplier+"</td>"
				content += "<td>R"+ purchase.price+"</td>"
				content += "<td><button type='button' id='editPurchase' class='btn btn-default'>Edit </button><button type='button' id='deletePurchase' class='btn btn-default'>Delete</button></td>"
				content += "</tr>"

			});
			content+= "</table>"
			
		setTimeout(function(){
				$('#popUpDiv').append(content);
			},300)
			$('#popUpDiv').fadeOut('fast');
			
			$('#popUpDiv').fadeIn('fast');

		});
	}


//----------------------------------------------------------------------------------------------//
	

	function attachPerfomances(){
		$.get('/api/perfomances', function(results){
				console.log('perfomances clicked')
				$('#popUpDiv').empty()
					//alert(JSON.stringify(results))
					var content="<div id='perfomancesTable' class='.col-md-6'>" +
					  			"<div id='mostPopular' class='.col-md-8'>"+  
					   			"<h3> Most Popular Product </h3>"+
					    		"<h4>"+results.perfomances.popularProduct.name+"</h4>"+
					 			"</div>"+
					  			"<div id='leastPopular' class='.col-md-8'> "+ 
					    		"<h3> Least Popular Product </h3>"+
					    		"<h4>"+results.perfomances.unPopularProduct.name +"</h4>"+
					  			"</div>"+
					  			"<div id='mostPopularCat' class='.col-md-8'> "+ 
					    		"<h3> Most Popular Category </h3>"+
					    		"<h4>"+results.perfomances.popularCategory.name+"</h4>"+
					  			"</div>"+
					  			"<div id='leastPopularCat' class='.col-md-8'>"+ 
					    		"<h3> Least Popular Category </h3>"+
					    		"<h4>"+results.perfomances.unPopularCategory.name+"</h4>"+
					  			"</div></div>"

			setTimeout(function(){
				$('#popUpDiv').append(content);
			},300)
			$('#popUpDiv').fadeOut('fast');
			
			$('#popUpDiv').fadeIn('fast');
		})
	}



//---------------------------------------------------------------------------------------------//


	function attachProductOptions(){
		var optionsHtml="<div id='ProductOptions'>"+
							"<div id='productButtons' class='btn-group' role='group' aria-label='...''>"+
  								"<button type='button' id='addProduct' class='btn btn-default' onclick='loadNewProductDiv()'>Add product</button>"+
  								 								
  								"<button type='button' id='searchProduct' class='btn btn-default'>search</button>"+

  								"<input type='text' class='form-control' placeholder='e.g Mayo Juice' aria-describedby='basic-addon1'>"+
  								"</div>"
						"</div>"
		$('#Options').html(optionsHtml)
	}


//--------------------------------------------------------------------------------------------//
	

	function attachPurchaseOptions(){
		var optionsHtml="<div id='purchaseOptions'>"+
							"<div id='purchaseButtons' class='btn-group' role='group' aria-label='...''>"+
  								"<button type='button' id='addPurchase' onclick='loadNewPurchaseDiv()'class='btn btn-default'>Add Purchase</button>"+  								  								
  								"<button type='button' id='searchPurchase' class='btn btn-default'>search</button>"+
  								"<input type='text' class='form-control' placeholder='e.g Apples Makro' aria-describedby='basic-addon1'>"+
  								"</div>"
						"</div>"
		$('#Options').html(optionsHtml)
	}



//--------------------------------------------------------------------------------------------//
	

	function attachSalesOptions(){
		var optionsHtml="<div id='SalesOptions'>"+
							"<div id='SalesButtons' class='btn-group' onclick='loadNewSaleDiv()' role='group' aria-label='...''>"+
  								"<button type='button' class='btn btn-default'>Add Sale</button>"+  							
  								"<button type='button' class='btn btn-default'>search</button>"+
  								"<input type='text' class='form-control' placeholder='e.g Sunday 3 Apples' aria-describedby='basic-addon1'>"+
  								"</div>"
						"</div>"
		$('#Options').html(optionsHtml)
	}
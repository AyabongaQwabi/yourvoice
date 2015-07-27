function loadNewProductDiv(){
	
		$.get('api/products/categories',function(results){
		
			var addHtml ="<div id='addProductDiv' class='.col-md-6'>" +					  			
					   			"<h2> Add New Product </h2>"+
					    		"<h4> Product Name</h4>"+
					    		"<input id='productname' type='text' class='form-control' placeholder='e.g John Boerewors' aria-describedby='basic-addon1'>"+
								"<h4> select category </h3>"+
								"<select id='selectcategories'>"
								results.categories.forEach(function(category){
									addHtml+="<option value='"+category.id+"'>"+category.name+"</option>"

								})	    

			addHtml+="</select><button type='button' id='saveProduct' class='btn btn-default' onclick=\"postProduct('#productname','#selectcategories')\">Save</button>"
			addHtml+="</div>"
		
			$('#popUpDiv').empty()
			$('#popUpDiv').append(addHtml);
		})
}

function loadNewPurchaseDiv(){

		$.get('api/products',function(results){
			
			var purchaseHtml ="<div id='addPurchaseDiv' class='.col-md-6'>" +
								"<h2> Add New Purchase </h2>"+				  			
					   			"<h4> Date </h4>"+
					   			"<input id='purchaseDate' type='date'>"+					    		
								"<h4>Select Product </h4>"+
								"<select id='select_pur_product'>"
								results.products.forEach(function(product){
									purchaseHtml+="<option value='"+product.id+"'>"+product.name+"</option>"

								})
					purchaseHtml+=	("</select><h4> Product Price</h4>"+
					    		"<input id='productprice' type='text' class='form-control' placeholder='e.g John Boerewors' aria-describedby='basic-addon1'>"+    
		 						"<h4> Select Supplier </h4>"+
		 						"<select id='selectSupplier'>")

		 	$.get('/api/suppliers',function(results){
		 		
		 		
								results.suppliers.forEach(function(supplier){
									purchaseHtml+="<option value='"+supplier.id+"'>"+supplier.name+"</option>"

								})
				purchaseHtml+="</select><button onclick='postPurchase('#select_pur_product','#selectSupplier','#productprice',#purchaseDate')' type='button' id='savePurchase' class='btn btn-default'>Save</button></div>"
	
				$('#popUpDiv').empty()
				$('#popUpDiv').append(purchaseHtml);				
		 	})
			
		})
}
function loadNewSaleDiv(){

		$.get('api/products',function(results){
			
			var saleHtml ="<div id='addSaleDiv' class='.col-md-6'>" +	
								"<h2> Add New Sale </h2>"+				  			
					   			"<h4> Date </h4>"+
					   			"<input type='date'>"+					    		
								"<h4> Select Product </h4>"+
								"<select id='select_sale_product'>"
								results.products.forEach(function(product){
									saleHtml+="<option value='"+product.id+"'>"+product.name+"</option>"

								})
					saleHtml+=	("</select><h4> Product Price</h4>"+
					    		"<input id='productprice' type='text' class='form-control' placeholder='e.g 15.50' aria-describedby='basic-addon1'>"+    
		 						"<h4> Quantity</h4>"+
					    		"<input id='productquantity' type='text' class='form-control' placeholder='e.g 4' aria-describedby='basic-addon1'>"+
					    		"<button type='button' id='saveSale' class='btn btn-default'>Save</button>")

		 		saleHtml+='</div>'
				$('#popUpDiv').empty()
				$('#popUpDiv').append(saleHtml);				
		
			
		})
}	

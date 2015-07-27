from flask import render_template, jsonify
import MySQLdb
from app import app
db = MySQLdb.connect(host="localhost", # your host, usually localhost
                     user="root", # your username
                      passwd="theaya5379", # your password
                      db="Nelisa") # name of the data base

cur = db.cursor() 




@app.route('/')
@app.route('/home')
def home():
	user ={'name':'China','spazaname':'eMatolweni'}
	return render_template('home.html',user=user)


#-------------------------------------------------------------------------------------------------#
#                          				PRODUCTS API                                                           
#-------------------------------------------------------------------------------------------------#

@app.route('/api/products')
def get_products():
	cur.execute("select distinct products.name as name,categories.id as catid,sales.price as price ,categories.name as category,sales.product_id as prodID from sales, products,categories where products.id=sales.product_id and products.category_id = categories.id")
	products = [dict(name=row[0],price=str(row[2]), category = row[3],id=row[1]) for row in cur.fetchall()]
	return jsonify(products=products)

@app.route('/api/products/add',methods=['POST'])
def add_product():
	print 'client wants to add product'
	return "hello"

@app.route('/api/products/delete',methods=['POST'])
def delete_product():
	print 'client wants to delete product'


@app.route('/api/products/update',methods=['POST'])
def update_product():
	print 'client wants to update product'



#-------------------------------------------------------------------------------------------------#
#                          				SALES API
#--------------------------------------------------------------------------------------------------#


@app.route('/api/sales')
def get_sales():
	cur.execute("select sales.id, DATE_FORMAT(sales.date,'%d %b %y') as date, products.name, sales.quantity, sales.price,sales.product_id from sales,products where products.id = sales.product_id order by sales.date desc")
	sales = [dict(name=row[2],price=str(row[4]), date = row[1],qty=row[3],id=row[0]) for row in cur.fetchall()]
	return jsonify(sales=sales)

@app.route('/api/sales/add',methods=['POST'])
def add_SALE():
	print ('client wants to add SALE')

@app.route('/api/sales/delete',methods=['POST'])
def delete_SALE():
	print ('client wants to delete SALE')


@app.route('/api/sales/update',methods=['POST'])
def update_SALE():
	print ('client wants to update SALE')
	


#-------------------------------------------------------------------------------------------------#
#                          				PURCHASES API
#--------------------------------------------------------------------------------------------------#




@app.route('/api/purchases')
def get_purchases():
	cur.execute("select purchases.id, DATE_FORMAT(purchases.date,'%d %b %y') as date, products.name as product, purchases.price, suppliers.name as supplier FROM purchases, products, suppliers WHERE products.id = purchases.product_id AND suppliers.id = purchases.supplier_id ORDER BY date")
	purchases = [dict(name=row[2],date=row[1],price=str(row[3]),supplier=row[4],id=row[0]) for row in cur.fetchall()]
			
	return jsonify(purchases=purchases)

@app.route('/api/purchases/add',methods=['POST'])
def add_purchase():
	print ('client wants to add purchase')

@app.route('/api/purchases/delete',methods=['POST'])
def delete_purchase():
	print ('client wants to delete purchase')


@app.route('/api/purchases/update',methods=['POST'])
def update_purchase():
	print ('client wants to update purchase')



#-------------------------------------------------------------------------------------------------#
#                          				PERFOMANCES API
#--------------------------------------------------------------------------------------------------#

@app.route('/api/perfomances')
def get_perfomances():
	cur.execute("select products.name, product_id as productID , sum(quantity) as Quantity from sales , products where products.id=product_id group by product_id ORDER BY Quantity DESC ")	
	results =  [dict(name=row[0],quantity=str(row[2])) for row in cur.fetchall()]

	popularProduct = results[0]
	unPopularProduct = results[len(results)-1]	

	cur.execute("select name , sum(Quantity) as catQuantity from (select categories.name,categories.id as cat_id, sum(quantity) as Quantity from sales , products ,categories where products.id=product_id and products.category_id = categories.id group by product_id ) as catSums group by cat_id ORDER BY catQuantity DESC")

	categoryResults =  [dict(name=row[0],quantity=str(row[1])) for row in cur.fetchall()]
	popularCategory= categoryResults[0]
			
	unPopularCategory = categoryResults[len(categoryResults)-1]

	perfomances ={'popularProduct' : popularProduct , 'unPopularProduct' : unPopularProduct,'popularCategory' : popularCategory ,'unPopularCategory':unPopularCategory }
	print perfomances

	return jsonify(perfomances=perfomances)



@app.route('/api/products/categories')
def getCategories():
	cur.execute("select * from categories")
	categories = [dict(name=row[1],id=row[0]) for row in cur.fetchall()]
	return jsonify(categories=categories)

@app.route('/api/suppliers')
def getSuppliers():
	cur.execute("select * from suppliers")
	suppliers = [dict(name=row[1],id=row[0]) for row in cur.fetchall()]
	return jsonify(suppliers=suppliers)

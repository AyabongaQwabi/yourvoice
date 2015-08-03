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

from flask import Flask
from flask import request

api = Flask(__name__)

@api.route("/")
def hello_world():
  return "<p>Hello, World!</p>"

# view funcs in flask default to GET
@api.route('/data')
def data():
  # flask will change the dict to JSON automagically
  response_body = {
    "fname" : "Thomas",
    "lname" : "Jeffersonius"
  }

  return response_body

@api.route('/sort')
def data():
  
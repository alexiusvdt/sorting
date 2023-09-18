from flask import Flask, jsonify
from flask import request
import json

import sorts.sort
import sorts.bubble_sort


api = Flask(__name__)

@api.route("/")
def hello_world():
  return "<p>Hello, World!</p>"

# test func
# # view funcs in flask default to GET
# @api.route('/data')
# def name_data():
#   # flask will change the dict to JSON automagically
#   response_body = {
#     "fname" : "Thomas",
#     "lname" : "Jeffersonius"
#   }

#   return response_body

@api.route('/sort')
def get_sort_obj():
  if request.sort_type == "bubble":
    bubble = sorts.bubble_sort.BubbleSort()

    return jsonify(bubble)
  else:
    response_body = {
      "you": "goofed"
    }
    return response_body

from flask import Flask, jsonify
from flask import request
import json

import sorts.sort
import sorts.bubble_sort
# do aliasing on these so you dont have to type out the full thing

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
  func = request.args.get('type')
  print('type', func)
  list = [10,8,84,1,55,26,83,9,18,4]
  ascending = True
  if func == "bubble":
    bubble = sorts.bubble_sort.BubbleSort(func, list)
    print('bubble created', bubble)
    output = bubble.do_sort(ascending)

    return output
  else:
    response_body = {
      "you": "goofed"
    }
    return response_body

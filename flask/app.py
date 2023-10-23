from flask import Flask, jsonify, request, render_template, make_response
from flask_cors import CORS
import random
import copy
import sys
# import json

import sorts.sort
import sorts.bubble
import sorts.insert
import sorts.selection
import sorts.bogo
import sorts.merge

app = Flask(__name__)
CORS(app)

def generate_sort(func, size):
  """prepare & return a response"""
  list = make_list(size)
  output = {
        0 : copy.deepcopy(list)
      }
  
  if func == "bubble":
      bubble = sorts.bubble.BubbleSort(func, list)
      sorted = bubble.do_sort()
      output[1] = sorted
          
      return output
  elif func == "insert":
      insert = sorts.insert.InsertSort(func, list)
      sorted = insert.do_sort()
      output[1] = sorted

      return output
  elif func == "selection":
      selection = sorts.selection.SelectionSort(func, list)
      sorted = selection.do_sort()
      output[1] = sorted

      return output
    
    # needs fixing
  elif func == "merge":
      # currently not working
      merge = sorts.merge.MergeSort(func, list)
      sorted = merge.do_sort()
      output[1] = sorted

      return output   
  elif func == "bogo":
      bogo = sorts.bogo.BogoSort(func, list)
      sorted = bogo.do_sort()
      output[1] = sorted

      return output
  else:
      output = {
        "you": " dun goofed up"
      }
      return output

def make_list(size):
  '''creates a list of given size'''
  list = []
  for i in range(size):
    list.append(random.randint(10,200))
  return list

@app.route('/')
def index():
   return render_template("index.html")

@app.route('/sort')
def get_sort_obj():
  '''set up return object based on requested sort'''
  func = request.args.get('func')
  size = request.args.get('size')
  size = int(size)
  response = make_response(generate_sort(func, size))
  response.headers['Access-Control-Allow_Origin'] = '*'

  return response
  

if __name__ == "__main__":
   app.run(host='0.0.0.0', port=8080)

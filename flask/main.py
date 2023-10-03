from flask import Flask, jsonify
from flask import request
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
# do aliasing on these so you dont have to type out the full thing
# catch old python versions
if sys.version_info[0:2] < (3,10):
  raise Exception (f'Python version 3.10 required, you are running "{sys.version}". Please update and try again')

api = Flask(__name__)

def make_list(size):
  list = []
  for i in range(size):
    list.append(random.randint(10,200))
  return list

@api.route('/sort')
def get_sort_obj():
  func = request.args.get('func')
  size = request.args.get('size')
  size = int(size)
  list = make_list(size)
  
  # yes this could be DRY-er, but that's for later. Need to remove switch case for early version py compatibility
  match func:
    case "bubble":
      output = {
        0 : copy.deepcopy(list)
      }
      bubble = sorts.bubble.BubbleSort(func, list)
      sorted = bubble.do_sort()
      output[1] = sorted

      return output

    case "insert":
      output = {
        0 : copy.deepcopy(list)
      }
      insert = sorts.insert.InsertSort(func, list)
      sorted = insert.do_sort()
      output[1] = sorted

      return output

    case "selection":
      output = {
        0 : copy.deepcopy(list)
      }
      selection = sorts.selection.SelectionSort(func, list)
      sorted = selection.do_sort()
      output[1] = sorted

      return output
    
    case "merge":
      output = {
        0 : copy.deepcopy(list)
      }
      merge = sorts.merge.MergeSort(func, list)
      sorted = merge.do_sort()
      output[1] = sorted

      return output
    
    case "bogo":
      output = {
        0 : copy.deepcopy(list)
      }
      bogo = sorts.bogo.BogoSort(func, list)
      sorted = bogo.do_sort()
      output[1] = sorted

      return output

    case _:
      response_body = {
        "you": " dun goofed"
      }
      return response_body

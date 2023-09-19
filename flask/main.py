from flask import Flask, jsonify
from flask import request
import random
import copy
# import json

import sorts.sort
import sorts.bubble_sort
# do aliasing on these so you dont have to type out the full thing

api = Flask(__name__)

def make_list(size):
  list = []
  for i in range(size):
    list.append(random.randint(0,100))
  return list

@api.route('/sort')
def get_sort_obj():
  # print(request.args)
  func = request.args.get('func')
  size = request.args.get('size')
  size = int(size)
  # print('func type', func)
  list = make_list(size)
  print('list made', list)
  ascending = True
  if func == "bubble":
    # see bubblesort for deepcopy reason
    output = {
      0 : copy.deepcopy(list)
    }
    bubble = sorts.bubble_sort.BubbleSort(func, list)
    # print('bubble created', bubble)
    sorted = bubble.do_sort(ascending)
    output[1] = sorted

    return output
  else:
    response_body = {
      "you": " dun goofed"
    }
    return response_body

from flask import Flask, jsonify
from flask import request
import random
import json

import sorts.sort
import sorts.bubble_sort
# do aliasing on these so you dont have to type out the full thing

api = Flask(__name__)

def make_list(size):
  list = []
  for i in range(size):
    list.append(random.randint(0,100))
  # print('list made', list)
  return list

@api.route('/sort')
def get_sort_obj():
  print(request.args)
  func = request.args.get('func')
  size = request.args.get('size')
  size = int(size)
  # print('func type', func)
  list = make_list(size)
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

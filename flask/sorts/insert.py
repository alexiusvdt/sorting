from .sort import Sort
import copy

class InsertSort(Sort):
  """Class that represents an InsertSort implementation."""
  # init and sort() are inherited from Sort
  # we redefine _sort()
  # declare dict structure and iterate new ones with each loop, adding via deep copy each time

  def _sort(self, list):
    """perform the actual insert sort recording the arr at each step"""
    output = []
    
    for i in range(1, len(list)):
      key = list[i]
      j = i - 1
      while j >= 0 and key < list[j]:
        list[j + 1] = list[j]
        j -= 1
        step = copy.deepcopy(list)
        output.append(step)
      list[j+1] = key
    step = copy.deepcopy(list)
    output.append(step)


    return output

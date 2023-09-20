from .sort import Sort
import copy

class SelectionSort(Sort):
    """Class that represents a SelectionSort implementation."""
    # init and sort() are inherited from Sort
    # we redefine _sort()
    # declare dict structure and iterate new ones with each loop, adding via deep copy each time

    def _sort(self, list):
        """perform the actual select sort, recording the arr at each step"""
        output = []

        for i in range(len(list)):
          min_index = i
  
          for j in range(i + 1, len(list)):
              # select the minimum element in every iteration
              if list[j] < list[min_index]:
                  min_index = j
          # swapping the elements to sort the array
          (list[i], list[min_index]) = (list[min_index], list[i])
          step = copy.deepcopy(list)
          output.append(step)

        return output
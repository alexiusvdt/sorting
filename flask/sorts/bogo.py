from random import shuffle
from .sort import Sort
import copy

class BogoSort(Sort):
    """Class that represents a BogoSort implementation."""
    # init and sort() are inherited from Sort
    # we redefine _sort()
    # we overload and add _is_sorted to check progress
    # declare dict structure and iterate new ones with each loop, adding via deep copy each time

    def _is_sorted(self, list) -> bool:
      """Determine whether the data are sorted correctly."""
      return all(a <= b for a, b in zip(list, list[1:]))

    def _sort(self, list):
        """shuffle data until they're sorted into order"""
        output = []
        
        while not self._is_sorted(list):
          shuffle(list)
          step = copy.deepcopy(list)
          output.append(step)
        
        return output
    


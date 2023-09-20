from .sort import Sort
import copy

class MergeSort(Sort):
    """Class that represents a MergeSort implementation."""
    # init and sort() are inherited from Sort
    # we redefine _sort()
    # declare dict structure and iterate new ones with each loop, adding via deep copy each time
    
    def _sort(self, list):
        """perform the actual merge sort, recording the arr at each step"""
        output = []
        
        # Create sub_array2 ← A[start..mid] and sub_array2 ← A[mid+1..end]
        mid = len(list)//2
        sub_array1 = list[:mid]
        sub_array2 = list[mid:]

        # Sort the two halves
        self._sort(sub_array1)
        self._sort(sub_array2)
      
        # Initial values for pointers that we use to keep track of where we are in each array
        i = j = k = 0

        # Until we reach the end of either start or end, pick larger among
        # elements start and end and place them in the correct position in the sorted array
        while i < len(sub_array1) and j < len(sub_array2):
            if sub_array1[i] < sub_array2[j]:
                list[k] = sub_array1[i]
                i += 1
            else:
                list[k] = sub_array2[j]
                j += 1
            k += 1

        # When all elements are traversed in either arr1 or arr2,
        # pick up the remaining elements and put in sorted array
        while i < len(sub_array1):
            list[k] = sub_array1[i]
            i += 1
            k += 1

        while j < len(sub_array2):
            list[k] = sub_array2[j]
            j += 1
            k += 1
  

        return output
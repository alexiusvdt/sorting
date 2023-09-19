from .sort import Sort
import copy

class BubbleSort(Sort):
    """Class that represents a BubbleSort implementation."""
    # init and sort() are inherited from Sort
    # we redefine _sort()
    # declare dict structure and iterate new ones with each loop, adding via deep copy each time

    def _sort(self, list):
        """perform the actual bubble sort, recording the arr at each step"""
        output = []

        for i in range(len(list) - 1):
            for j in range(len(list) - 1 - i):
                
                num1 = list[j]
                num2 = list[j + 1]

                if (num1 > num2 ):
                    list[j], list[j + 1] = list[j + 1], list[j] 
                step = copy.deepcopy(list)
                output.append(step)

        return output

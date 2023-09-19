from .sort import Sort
import copy

class BubbleSort(Sort):
    """Class that represents a BubbleSort implementation."""
    # init and sort() are inherited from Sort
    # we redefine _sort()
    # dict declared here will be overwritten on successive loops
    # declare dict structure and iterate new ones with each loop, adding via deep copy each time
    # (https://stackoverflow.com/questions/47876205/for-loop-is-overwriting-dictionary-values-in-list)



    def _sort(self, list, ascending):
        print('sort entered')
        output = []

        for i in range(len(list) - 1):
            for j in range(len(list) - 1 - i):
                
                num1 = list[j]
                num2 = list[j + 1]

                if (num1 > num2 and ascending) or (num1 < num2 and not ascending):
                    list[j], list[j + 1] = list[j + 1], list[j] 
                step = copy.deepcopy(list)
                output.append(step)
# print('step saved', step)
# output.append(step)
# print('added to output', output)

        print('bubble done', output)            
        return output

        # size = len(items)
        # swapped = True
        # while swapped:
        #     swapped = False
        #     for i in range(1, size):
        #         if not self._func(items[i - 1], items[i]):
        #             items[i - 1], items[i] = items[i], items[i - 1]
        #             swapped = True
        #     size -= 1

        # return items

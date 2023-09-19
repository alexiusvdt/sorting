from .sort import Sort

class BubbleSort(Sort):
    """Class that represents a BubbleSort implementation."""
    # init and sort() are inherited from Sort
    # we redefine _sort()

    def _sort(self, list, ascending):
        print('sort entered')
        output = {}
        # print('unsorted list', list)
        k = 0

        for i in range(len(list) - 1):
            # print(f'outer loop{i}', output)
            for j in range(len(list) - 1 - i):
                output[k] = list
                # print(f'output at step {k}', output)
                
                num1 = list[j]
                num2 = list[j + 1]

                if (num1 > num2 and ascending) or (num1 < num2 and not ascending):
                    list[j], list[j + 1] = list[j + 1], list[j] 
                k += 1
                # print('hard counter var', k)
                # print(f'inner loop {j}', output)

        print('bubble done')            
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

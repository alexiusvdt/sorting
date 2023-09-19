from .sort import Sort

class BubbleSort(Sort):
    """Class that represents a BubbleSort implementation."""
    # init and sort() are inherited from Sort
    # we redefine _sort()

    def _sort(self, items, ascending):
        print('sort entered')
        output = []

        for i in range(len(items) - 1):
            for j in range(len(items) - 1 - i):
                num1 = items[j]
                num2 = items[j + 1]

                if (num1 > num2 and ascending) or (num1 < num2 and not ascending):
                    items[j], items[j + 1] = items[j + 1], items[j]
                    output.append(items[j + 1])
                    output.append(items[j])
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

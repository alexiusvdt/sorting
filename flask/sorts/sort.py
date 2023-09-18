"""Interface module with the base implementation of a Sort class."""

from abc import ABC, abstractmethod
import random


class Sort(ABC):
    """Base class for sorting."""

    n = 50
    min = 0
    max = 100
    def generate_starting_list(n, min, max):
        """populate our list with n values between min and max"""
        list = []

        for _ in range(n):
            value = random.randint(min, max)
            list.append(value)
            # print("appended: ", value)
        return list

    def __init__(self):
        self._comp_func = func
        self._items = generate_starting_list(n, min, max)

    



    def sort(self):
        """Returns the sorted version of the elements contained
        in the `_items` property.
        Returns:
            List: The sorted elements.
        """
        return self._sort(self._items)
    
    def drawState(self):
        pass
    

    @abstractmethod
    def _sort(self, items):
        pass

"""Interface module with the abstract base implementation of a Sort class."""

from abc import ABC, abstractmethod

class Sort(ABC):
    """Base class for sorting."""

    def __init__(self, func, items):
        # what function
        self._func = func
        # items to be sorted
        self._items = items
        super().__init__()

    def do_sort(self, ascending):
        """Returns a dictionary in the form of:
            iteration: array at that step
        """
        return self._sort(self._items, ascending)
    

    @abstractmethod
    def _sort(self, items, ascending):
        pass

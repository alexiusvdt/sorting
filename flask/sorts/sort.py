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

    def do_sort(self):
        """Returns the sorted version of the elements contained
        in the `_items` property via the `func` chosen.
        Returns:
            List: The sorted elements.
        """
        return self._sort(self._items)
    
    def drawState(self):
        # i dont think this needs to be overwritten as drawing should (?) always happen the same way
        pass

    @abstractmethod
    def _sort(self, items):
        pass

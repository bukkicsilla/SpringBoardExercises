from doctest import testmod


def compact(lst):
    """Return a copy of lst with non-true elements removed.

    >>> compact([0, 1, 2, '', [], False, (), None, 'All done'])
    [1, 2, 'All done']
    """
    falsy = [0, "", [], False, (), None]
    return [item for item in lst if item not in falsy]


if __name__ == "__main__":
    testmod(name="practice", verbose=True)

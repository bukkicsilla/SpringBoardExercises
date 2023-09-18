from doctest import testmod


def list_check(lst):
    """Are all items in lst a list?

    >>> list_check([[1], [2, 3]])
    True

    >>> list_check([[1], "nope"])
    False
    """

    # print(isinstance(["banana", "tv"], list))
    for item in lst:
        if not isinstance(item, list):
            return False
    return True


if __name__ == "__main__":
    testmod(name="practice", verbose=True)

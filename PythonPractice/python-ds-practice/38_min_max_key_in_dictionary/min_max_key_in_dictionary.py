from doctest import testmod


def min_max_keys(d):
    """Return tuple (min-keys, max-keys) in d.

        >>> min_max_keys({2: 'a', 7: 'b', 1: 'c', 10: 'd', 4: 'e'})
        (1, 10)

    Works with any kind of key that can be compared, like strings:

        >>> min_max_keys({"apple": "red", "cherry": "red", "berry": "blue"})
        ('apple', 'cherry')
    """

    min = max = list(d.keys())[0]
    for key in d.keys():
        if key < min:
            min = key
    for key in d.keys():
        if key > max:
            max = key
    return (min, max)


if __name__ == "__main__":
    testmod(name="practice", verbose=True)

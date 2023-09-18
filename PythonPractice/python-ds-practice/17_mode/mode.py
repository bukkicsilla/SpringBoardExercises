from doctest import testmod


def mode(nums):
    """Return most-common number in list.

    For this function, there will always be a single-most-common value;
    you do not need to worry about handling cases where more than one item
    occurs the same number of times.

        >>> mode([1, 2, 1])
        1

        >>> mode([2, 2, 3, 3, 2])
        2
    """
    ft = {num: nums.count(num) for num in nums}
    max_k = 0
    max_v = 0
    for k, v in ft.items():
        if max_v < v:
            max_v = v
            max_k = k
    return max_k


if __name__ == "__main__":
    testmod(name="practice", verbose=True)

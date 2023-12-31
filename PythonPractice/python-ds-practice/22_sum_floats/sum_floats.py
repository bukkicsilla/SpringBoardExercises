from doctest import testmod


def sum_floats(nums):
    """Return sum of floating point numbers in nums.

    >>> sum_floats([1.5, 2.4, 'awesome', [], 1])
    3.9

    >>> sum_floats([1, 2, 3])
    0
    """
    new_lst = [num for num in nums if isinstance(num, float)]
    return sum(new_lst)


if __name__ == "__main__":
    testmod(name="practice", verbose=True)

    # hint: to find out if something is a float, you should use the
    # "isinstance" function --- research how to use this to find out
    # if something is a float!

from doctest import testmod


def three_odd_numbers(nums):
    """Is the sum of any 3 sequential numbers odd?"

    >>> three_odd_numbers([1, 2, 3, 4, 5])
    True

    >>> three_odd_numbers([0, -2, 4, 1, 9, 12, 4, 1, 0])
    True

    >>> three_odd_numbers([5, 2, 1])
    False

    >>> three_odd_numbers([1, 2, 3, 3, 2])
    False
    """
    if len(nums) < 3:
        return False
    for i in range(len(nums) - 2):
        if (nums[i] + nums[i + 1] + nums[i + 2]) % 2 == 1:
            return True
    return False


if __name__ == "__main__":
    testmod(name="practice", verbose=True)

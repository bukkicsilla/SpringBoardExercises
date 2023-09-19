from doctest import testmod


def same_frequency(num1, num2):
    """Do these nums have same frequencies of digits?

    >>> same_frequency(551122, 221515)
    True

    >>> same_frequency(321142, 3212215)
    False

    >>> same_frequency(1212, 2211)
    True
    """
    l1 = list(str(num1))
    l2 = list(str(num2))
    d1 = {digit: l1.count(digit) for digit in l1}
    d2 = {digit: l2.count(digit) for digit in l2}
    return d1 == d2


if __name__ == "__main__":
    testmod(name="practice", verbose=True)

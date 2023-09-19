from doctest import testmod


def valid_parentheses(parens):
    """Are the parentheses validly balanced?

    >>> valid_parentheses("()")
    True

    >>> valid_parentheses("()()")
    True

    >>> valid_parentheses("(()())")
    True

    >>> valid_parentheses(")()")
    False

    >>> valid_parentheses("())")
    False

    >>> valid_parentheses("((())")
    False

    >>> valid_parentheses(")()(")
    False
    """
    c = 0
    for p in parens:
        if c < 0:
            return False
        if p == "(":
            c += 1
        elif p == ")":
            c -= 1
        else:
            pass
    return c == 0


if __name__ == "__main__":
    testmod(name="practice", verbose=True)

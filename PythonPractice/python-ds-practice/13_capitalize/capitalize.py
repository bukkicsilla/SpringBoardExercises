from doctest import testmod


def capitalize(phrase):
    """Capitalize first letter of first word of phrase.

    >>> capitalize('python')
    'Python'

    >>> capitalize('only first word')
    'Only first word'
    """
    return phrase.capitalize()


if __name__ == "__main__":
    testmod(name="practice", verbose=True)

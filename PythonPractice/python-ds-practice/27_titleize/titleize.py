from doctest import testmod


def titleize(phrase):
    """Return phrase in title case (each word capitalized).

    >>> titleize('this is awesome')
    'This Is Awesome'

    >>> titleize('oNLy cAPITALIZe fIRSt')
    'Only Capitalize First'
    """
    lst = phrase.split(" ")
    lst_lower = [w.lower().capitalize() for w in lst]
    result = " ".join(lst_lower)
    return result


if __name__ == "__main__":
    testmod(name="practice", verbose=True)

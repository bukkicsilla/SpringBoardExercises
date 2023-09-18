from doctest import testmod


def flip_case(phrase, to_swap):
    """Flip [to_swap] case each time it appears in phrase.

    >>> flip_case('Aaaahhh', 'a')
    'aAAAhhh'

    >>> flip_case('Aaaahhh', 'A')
    'aAAAhhh'

    >>> flip_case('Aaaahhh', 'h')
    'AaaaHHH'

    """
    lst = [
        c.lower() if to_swap.upper() == c else c.upper() if to_swap.lower() == c else c
        for c in list(phrase)
    ]
    return "".join(lst)


if __name__ == "__main__":
    testmod(name="practice", verbose=True)

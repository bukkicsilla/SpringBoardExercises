from doctest import testmod


def is_palindrome(phrase):
    """Is phrase a palindrome?

    Return True/False if phrase is a palindrome (same read backwards and
    forwards).

        >>> is_palindrome('tacocat')
        True

        >>> is_palindrome('noon')
        True

        >>> is_palindrome('robert')
        False

    Should ignore capitalization/spaces when deciding:

        >>> is_palindrome('taco cat')
        True

        >>> is_palindrome('Noon')
        True
    """
    newPhrase = [c for c in list(phrase.lower()) if c != " "]
    return newPhrase == newPhrase[::-1]


if __name__ == "__main__":
    testmod(name="practice", verbose=True)

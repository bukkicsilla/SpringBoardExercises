from doctest import testmod


def single_letter_count(word, letter):
    """How many times does letter appear in word (case-insensitively)?

    >>> single_letter_count('Hello World', 'h')
    1

    >>> single_letter_count('Hello World', 'z')
    0

    >>> single_letter_count("Hello World", 'l')
    3
    """
    return word.count(letter) + word.count(letter.upper())


if __name__ == "__main__":
    testmod(name="practice", verbose=True)

from doctest import testmod


def vowel_count(phrase):
    """Return frequency map of vowels, case-insensitive.

    >>> vowel_count('rithm school')
    {'i': 1, 'o': 2}

    >>> vowel_count('HOW ARE YOU? i am great!')
    {'o': 2, 'a': 3, 'e': 2, 'u': 1, 'i': 1}
    """
    d = {}
    v = "aeiouAEIOU"
    for char in phrase:
        if char in v:
            char = char.lower()
            d[char] = d.get(char, 0) + 1
    print(d)


if __name__ == "__main__":
    testmod(name="practice", verbose=True)

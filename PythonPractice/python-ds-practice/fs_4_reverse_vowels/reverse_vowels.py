from doctest import testmod


def reverse_vowels(s):
    """Reverse vowels in a string.

    Characters which re not vowels do not change position in string, but all
    vowels (y is not a vowel), should reverse their order.

    >>> reverse_vowels("Hello!")
    'Holle!'

    >>> reverse_vowels("Tomatoes")
    'Temotaos'

    >>> reverse_vowels("Reverse Vowels In A String")
    'RivArsI Vewols en e Streng'

    reverse_vowels("aeiou")
    'uoiea'

    reverse_vowels("why try, shy fly?")
    'why try, shy fly?''
    """
    vowels = "aeiouAEIOU"
    lst = list(s)
    vowel_list = []
    for char in lst:
        if char in vowels:
            vowel_list.append(char)
    vowel_list.reverse()
    new_list = []
    for char in lst:
        if char in vowels:
            new_list.append(vowel_list[0])
            vowel_list[:1] = ""
        else:
            new_list.append(char)
    st = "".join(new_list)
    return st


if __name__ == "__main__":
    testmod(name="practice", verbose=True)

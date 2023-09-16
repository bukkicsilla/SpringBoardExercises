def print_upper_words(words, letters={}):
    """It prints each word in uppercase, in case the word starts with one of the given letters."""
    for word in words:
        if word[0] in letters:
            print(word.upper())


print_upper_words(["hello", "hey", "goodbye", "yo", "yes", "eva", "event"], {"h", "y"})

"""Word Finder: finds random words from a dictionary.
"""


from random import choice
class WordFinder:
    """Word Finder
    >>> wf = WordFinder("words.txt")
    235886 words read
    """
    def __init__(self, path):
        '''read a list of words from a file'''
        file = open(path, "r")
        self.words = []
        for line in file:
            self.words.append(line[:-1])
        length_words = len(self.words)
        print(f"{length_words} words read")
    def random(self):
        '''choose a random word from the list'''
        return choice(self.words)

class SpecialWordFinder(WordFinder):
    '''read a list of special words from a file, does not contain blank lines or comments.
    >>> swf = SpecialWordFinder("specwords.txt")
    13 words read
    >>> swf.random() in ["apple", "banana", "cherry", "date", "fig", "guava", "papaya", "pear"]
    True

    '''
    def __init__(self, path):
        super().__init__(path)
        self.spec_words = [w for w in self.words if "#" not in w and w]
        #print(self.spec_words)
    def random(self):
        '''choose a random word from the special list'''
        return choice(self.spec_words)

wf = WordFinder("words.txt")
wf.random()
wf.random()
wf.random()
wf.random()
swf = SpecialWordFinder("specwords.txt")
swf.random()




"""Python serial number generator."""

class SerialGenerator:
    """Machine to create unique incrementing serial numbers.
    
    >>> serial = SerialGenerator(start=100)

    >>> serial.generate()
    100

    >>> serial.generate()
    101

    >>> serial.generate()
    102

    >>> serial.reset()

    >>> serial.generate()
    100
    """
    def __init__(self, start):
        '''Create a new serial object with start value start'''
        self.start = start
        self.next =  start

    def __repr__(self):
        '''String representation of the object'''
        return f"<SerialGenerator start={self.start} next={self.next}>"
    
    def generate(self):
        '''Give the next incremented value'''
        print(self.next)
        self.next = self.next+1
    
    def reset(self):
        '''Start the generator at start again'''
        self.next = self.start

serial = SerialGenerator(start=100)

print(serial)
serial.generate()
serial.generate()
serial.generate()
serial.generate()
print(serial)
serial.reset()
serial.generate()
print(serial)


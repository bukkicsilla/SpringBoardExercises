class Node:
    def __init__(self, val, next=None):
        self.val = val
        self.next = next

    def __repr__(self):
        return f"<Node in SLL: val: {self.val} , next: {self.next}>"

class SLinkedList:
    def __init__(self, vals, head=None, tail=None):
        self.head = head
        self.tail = tail
        self.length = 0
        self.vals = vals
        for val in vals:
            self.push(val)

    def traverse(self):
        """traverse(): print all the values in the linked list in order from head to tail."""
        print("***************************************")
        current = self.head
        while current:
            print(current.val)
            current = current.next
        print("***********************************")
        return self


    def _get_node(self, idx):
        """_get_node(idx) get node at given index."""
        current = self.head
        count = 0
        while current and count != idx:
            count += 1
            current = current.next
        return current
    

    def push(self, val):
        """push(val): add new value to end of list."""
        new_node = Node(val)
        if not self.head:
          self.head = new_node
        else:
            self.tail.next = new_node
        self.tail = new_node
        self.length += 1
        return self

    def unshift(self, val):
        """unshift(val): add new value to start of list."""
        new_node = Node(val)
        if not self.head:
            self.tail = new_node
        else:
            new_node.next = self.head
        self.head = new_node
        self.length += 1
        return self
    


    def pop(self):
        """pop(): return & remove last item."""
        if not self.head:
            return None
        current = self.head
        last = self.head
        while current.next:
            last = current
            current = current.next
        last.next = None
        self.tail = last
        self.length -= 1
        if not self.length:
            self.head = None
            self.tail = None
        return current.val


    def shift(self):
        """shift(): return & remove first item."""
        if not self.head:
            return None
        current = self.head
        self.head = self.head.next
        self.length -= 1
        if not self.length:
            self.tail = None
        return current.val
    

    def get_at(self, idx):
        """get_at(idx): get val at idx."""
        if idx < 0 or idx >= self.length:
            return None
        current = self.head
        counter = 0;
        while counter < idx:
            current = current.next
            counter += 1
        return current.val


    def set_at(self, idx, val):
        """set_at(idx, val): set val at idx to val"""    
        if idx < 0 or idx >= self.length:
            return None
        #current = self.head
        #counter = 0
        #while counter < idx:
            #current = current.next
            #counter += 1
        
        current = self._get_node(idx)
        current.val = val
        return current.val


    def insert_at(self, idx, val):
        """insert_at(idx, val): add node w/val before idx. """
        new_node = Node(val)
        if idx < 0 or idx > self.length:
            return None
        if idx == 0:
            return self.unshift(val)
        if idx == self.length:
            return self.push(val)
        #current = self.head
        #counter = 0
        #while counter < idx - 1:
        #current = current.next
        #counter += 1

        prev = self._get_node(idx - 1)
        new_node.next = prev.next
        prev.next = new_node
        self.length += 1
        return self
    

    def remove_at(self, idx):
        """remove_at(idx): return & remove item at idx"""
        if idx < 0 or idx >= self.length:
            return None
        if idx == 0:
            return self.shift()
        if idx == self.length - 1:
            return self.pop()
        prev = self._get_node(idx - 1)
        removed_node = prev.next
        prev.next = removed_node.next
        self.tail = prev
        self.length -= 1
        return removed_node.val


    def average(self):
        """average(): return an average of all values in the list"""
        if self.length == 0:
            return 0
        sum = 0
        current = self.head
        while current:
            sum += current.val
            current = current.next
        return sum / self.length

n1 = Node("Moomoo")
n2 = Node("Ginger")
n3 = Node("Donut")

sll = SLinkedList([])
#sll.push("Moomoo").push("Ginger").push("Donut").traverse()
sll = SLinkedList([1,2,3,4,5])
#sll.unshift(0)
sll.traverse()

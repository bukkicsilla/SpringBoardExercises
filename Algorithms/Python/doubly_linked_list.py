class Node:
    def __init__(self, val, next=None, prev=None):
        self.val = val
        self.next = next
        self.prev = prev

    def __repr__(self):
        return f"<Node in DLL: val: {self.val}>"
    
class DLinkedList:
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
        self.length += 1
        if not self.head:
            self.head = new_node
            self.tail = new_node
        else:
            new_node.prev = self.tail
            self.tail.next = new_node
            self.tail = new_node
        return self


    def unshift(self, val):
        """unshift(val): add new value to start of list."""
        new_node = Node(val)
        if not self.head:
            self.head = new_node
            self.tail = new_node
        else:
            self.head.prev = new_node
            new_node.next = self.head
            self.head = new_node
        self.length += 1
        return self


    def pop(self):
        """pop(): return & remove last item."""
        if not self.head:
            return None
        current = self.tail
        if self.length == 1:
            self.head = None
            self.tail = None
        else:
            self.tail = current.prev
            self.tail.next = None
            current.prev = None
        self.length -= 1
        return current.val


    def shift(self):
        """shift(): return & remove first item. """
        if not self.head:
            return None
        oldHead = self.head
        if self.length == 1:
            self.head = 0
            self.tail = 0
        else:
            self.head = oldHead.next
            self.head.prev = None
            oldHead.next = None
        self.length -= 1
        return oldHead.val
    

    def get_at(self, idx):
        """get_at(idx): get val at idx. """
        if idx < 0 or idx >= self.length:
            return None
        #current = None
        if idx < self.length / 2:
            current = self.head
            for i in range(idx):
                current = current.next
        else:
            current = self.tail
            counter = self.length - 1;
            while counter > idx:
                current = current.prev
                counter -= 1
        return current.val


    def set_at(self, idx, val):
        """set_at(idx, val): set val at idx to val """
        if idx < 0 or idx >= self.length:
            return None
        current = self._get_node(idx)
        current.val = val
        return current.val
    

    def insert_at(self, idx, val):
        """insert_at(idx, val): add node w/val before idx."""
        if idx < 0 or idx > self.length: 
            raise ValueError("Invalid index")
        if idx == self.length:
            return self.push(val)
        if not idx:
            return self.unshift(val)
        before_node = self._get_node(idx - 1)
        after_node = before_node.next
        new_node = Node(val)
        new_node.next = after_node
        new_node.prev = before_node
        before_node.next = new_node
        after_node.prev = new_node
        self.length += 1
        return self


    def remove_at(self, idx):
        """remove_at(idx): return & remove item at idx."""
        if idx < 0 or idx >= self.length:
            raise ValueError("Invalid index")
        if not idx:
            return self.shift()
        if idx == self.length - 1:
            return self.pop()
        removed_node = self._get_node(idx)
        before_node = removed_node.prev
        after_node = removed_node.next
        before_node.next = after_node
        after_node.prev = before_node
        removed_node.next = None
        removed_node.prev = None
        return removed_node.val


    def average(self):
        """average(): return an average of all values in the list"""
        if not self.length:
            return 0
        sum = 0
        current = self.head
        while current:
            sum += current.val
            current = current.next
        return sum / self.length
    
dll = DLinkedList(["Fire", "Water", "Air"])
dll.unshift("Earth");
dll.traverse()
#print(dll.get_at(3))
#dll.set_at(1, "Cosmos")
#dll.insert_at(4, "Cosmos")
#dll.remove_at(1)
dll.traverse()
#numbers = DLinkedList([1, 2, 3, 4, 5])
#print(numbers.average())

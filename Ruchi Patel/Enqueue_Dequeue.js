// Implement enqueue and dequeue using only two stacks
    let stack1 = [];
    let stack2 = [];
  
    function Enqueue(element) {
        stack1.push(element);
    }
  
    function Dequeue() {
        if (stack2.length === 0) {
            if (stack1.length === 0) {
                
            while (stack1.length > 0) {
                let x = stack1.pop();
                stack2.push(x);
            }
        }
    }
  
    Enqueue("a");
    Enqueue("b");
    Enqueue("c");
    Dequeue();
    Dequeue();
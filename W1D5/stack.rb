class Stack
    attr_reader :stack
    def initialize
        @stack = []
    end

    def push(el)
        @stack << el
    end

    def pop
        @stack.pop
    end

    def peek
        @stack.last
    end
end
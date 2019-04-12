require "byebug"
class Map
    def initialize
        @key_vals = []
    end

    def set(key, val)
        if @key_vals.none?{|kv_pair| kv_pair.first == key}
            @key_vals << [key, val]
        else
            @key_vals.each_with_index do |kv_pair, idx|
                if kv_pair.first == key
                    @key_vals[idx] = [key, val]
                end
            end
        end
    end

    def get(key)
        @key_vals.select {|kv_pair| kv_pair.first == key}
    end

    def delete(key)
        @key_vals.each do |kv_pair|
            if kv_pair.first == key
                @key_vals -= kv_pair
            end
        end
    end

    def show
        @key_vals
    end
end
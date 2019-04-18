fish = ['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish', 'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh']
# => "fiiiissshhhhhh"
def sluggish(arr)
    longest_fish = nil
    arr.each_with_index do |fish1, idx1|
        arr.each_with_index do |fish2, idx2|
            if fish1 > fish2
                longest_fish = fish1
            else
                longest_fish = fish2
            end
        end
    end
    longest_fish
end

p sluggish(fish)


def dominant(arr, &prc)
    return arr if arr.length <= 1
    prc ||= Proc.new {|a, b| a <=> b}
    mid = arr.length / 2
    left = arr.take(mid)
    right = arr.drop(mid)

    left_sorted = dominant(left, &prc)
    right_sorted = dominant(right, &prc)

    merge(left_sorted, right_sorted, &prc)
end

def merge(left, right, &prc)
    sorted = []

    until left.empty? || right.empty?
        case prc.call(left.first.length, right.first.length)
        when -1
            sorted << left.shift
        when 1
            sorted << right.shift
        when 0
            sorted << right.shift
        end
    end

    sorted.concat(left)
    sorted.concat(right)
    sorted
end

p dominant(fish)

def clever(arr)
    longest = arr[0]
    arr.each do |ele|
        if ele.length > longest.length
            longest = ele
        end
    end
    longest
end

p clever(fish)


tiles_array = ["up", "right-up", "right", "right-down", "down", "left-down", "left",  "left-up" ]

def slow_dance(dir, arr)
    arr.each_with_index do |ele, i|
        return i if ele == dir
    end
end

p slow_dance("up", tiles_array)
p slow_dance("right-down", tiles_array)

tiles_hash = {"up" => 0, "right-up" => 1, "right" => 2, "right-down" => 3, "down" => 4, "left-down" => 5, "left" => 6,  "left-up" => 7 }

def fast_dance(dir, hash)
    return hash[dir]
end

p fast_dance("up", tiles_hash)
p fast_dance("right-down", tiles_hash)
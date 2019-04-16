require "byebug"

class Board
  attr_accessor :cups

  def initialize(name1, name2)
    @player1 = name1
    @player2 = name2
    @cups = Array.new(14) {Array.new}
    self.place_stones
  end

  def place_stones
    # debugger
    (0..5).each do |i|
      4.times {cups[i] << :stone}
    end

    (7..12).each do |i|
      4.times {cups[i] << :stone}
    end
    # helper method to #initialize every non-store cup with four stones each
  end

  def valid_move?(start_pos)
    raise "Invalid starting cup" if start_pos > 14
    raise "Starting cup is empty" if cups[start_pos].empty?
    true
  end

  def make_move(start_pos, current_player_name)
    cups[start_pos] = []
    i = (start_pos + 1) % 13
    while i <= (start_pos + 4)
      case current_player_name == @player1
      when true
        cups[i] << :stone if (0..12).include?(i)
      when false
        cups[i] << :stone if (0..5).include?(i) || (7..13).include?(i)
      end
      i += 1
    end
    render
    # debugger
    next_turn(i, current_player_name)
  end

  def next_turn(ending_cup_idx, current_player_name)
    # helper method to determine whether #make_move returns :switch, :prompt, or ending_cup_idx
    case ending_cup_idx
      when 6 && current_player_name == @player1
        return :prompt
      when 13 && current_player_name == @player2
        return :prompt
      end
    
    return :switch if cups[ending_cup_idx].empty? && (ending_cup_idx != 6 || ending_cup_idx != 13)  
    return ending_cup_idx if !cups[ending_cup_idx].empty? && (ending_cup_idx != 6 || ending_cup_idx != 13)
  
  end

  def render
    print "      #{@cups[7..12].reverse.map { |cup| cup.count }}      \n"
    puts "#{@cups[13].count} -------------------------- #{@cups[6].count}"
    print "      #{@cups.take(6).map { |cup| cup.count }}      \n"
    puts ""
    puts ""
  end

  def one_side_empty?
  end

  def winner
  end
end

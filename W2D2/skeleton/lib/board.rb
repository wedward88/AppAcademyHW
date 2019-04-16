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
    stones_in_hand = []
    cups[start_pos].count.times {stones_in_hand << cups[start_pos].shift}
    i = start_pos % 14
    until stones_in_hand.empty?
      i =  (i + 1) % 14
      case current_player_name == @player1
      when true
        cups[i] << stones_in_hand.shift if (0..12).include?(i)
      when false
        cups[i] << stones_in_hand.shift if (0..5).include?(i) || (7..13).include?(i)
      end
    end
    render
    # debugger
    return next_turn(i, current_player_name)
  end

  def next_turn(ending_cup_idx, current_player_name)
    # helper method to determine whether #make_move returns :switch, :prompt, or ending_cup_idx
    # debugger
    
    own_point_cup = 6 if current_player_name == @player1
    own_point_cup = 13 if current_player_name == @player2
    own_cups = []
    own_cups += (0..12).to_a if current_player_name == @player1
    own_cups += (0..5).to_a + (7..13).to_a if current_player_name == @player2
    
    if cups[ending_cup_idx].count == 1 && own_point_cup == ending_cup_idx
        return :prompt
    elsif cups[ending_cup_idx].count == 1
        return :switch
    else
        return ending_cup_idx
    end

  end

  def render
    print "      #{@cups[7..12].reverse.map { |cup| cup.count }}      \n"
    puts "#{@cups[13].count} -------------------------- #{@cups[6].count}"
    print "      #{@cups.take(6).map { |cup| cup.count }}      \n"
    puts ""
    puts ""
  end

  def one_side_empty?
    return true if cups[0..5].all? {|cup| cup.empty?} || cups[7..12].all? {|cup| cup.empty?}
    false
  end

  def winner
    if cups[6].count > cups[13].count
      return @player1
    elsif cups[6].count < cups[13].count
      return @player2
    else
      return :draw
    end
  end
end

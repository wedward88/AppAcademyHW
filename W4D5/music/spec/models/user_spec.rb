require 'rails_helper'

RSpec.describe User, type: :model do
  it { should validate_presence_of(:email) }
  it { should validate_presence_of(:password_digest) }
  it { should validate_length_of(:password).is_at_least(6) }

  describe "methods" do
    our_user = User.new
    our_user.password=("password")
    # our_user.reset_session_token!
    # our_user.email = "larry@bird.com"
   
    it "#is_password? should successfully check the user's password" do
      expect(our_user.is_password?("password")).to eq(true)
    end

    # it "#reset_session_token! should change user's session token" do
    #   our_user = double("larry")
    #   current_token = our_user.session_token
    #   expect(our_user.reset_session_token!).to_not eq(current_token)
    # end

  end



end





# is_password?, #reset_session_token, and ::find_by_credentials
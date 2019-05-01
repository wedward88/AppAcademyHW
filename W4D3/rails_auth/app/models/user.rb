class User < ApplicationRecord
    attr_reader :password
    validates :username, :session_token, presence: true
    validates :password_digest, presence: { message: 'Password can\'t be blank'}
    validates :password, length: { minimum: 6, allow_nil: true }

    after_initialize :generate_session_token

     def self.generate_session_token
        SecureRandom::urlsafe_base64(16)
    end
end

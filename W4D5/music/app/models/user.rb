class User < ApplicationRecord
    validates :email, :session_token, :password_digest, presence: true
    validates :password, length: { minimum: 6 }, allow_nil: true
    attr_reader :password
    before_validation :ensure_session_token

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return nil unless user && user.is_password?(password)
        user
    end

    def reset_session_token!
        self.session_token = self.class.generate_session_token
        self.save!
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= SecureRandom::urlsafe_base64
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
        self.password_digest
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    private

    def self.generate_session_token
        SecureRandom::urlsafe_base64
    end
end
class Toy < ApplicationRecord
  validates :name, uniqueness: { scope: [:toyable, :name] }
  belongs_to :toyable, polymorphic: true
end

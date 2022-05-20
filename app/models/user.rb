class User < ApplicationRecord
    has_many :list_items
    has_many :games, through: :list_items

    has_secure_password
    validates :username, presence: true, uniqueness: true
    validates :password, presence: true, length: { minimum: 6 }
end

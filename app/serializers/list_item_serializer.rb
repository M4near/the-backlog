class ListItemSerializer < ActiveModel::Serializer
  attributes :id, :recommends, :completed, :deadline, :time_played
  has_one :user
  has_one :game
end

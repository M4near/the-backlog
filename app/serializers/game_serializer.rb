class GameSerializer < ActiveModel::Serializer
  attributes :id, :title, :genre, :image, :summary, :on_PC, :on_Xbox, :on_Playstation, :on_Switch
end

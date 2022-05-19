class CreateGames < ActiveRecord::Migration[6.1]
  def change
    create_table :games do |t|
      t.string :title
      t.string :genre
      t.string :image
      t.string :summary
      t.boolean :on_PC
      t.boolean :on_Xbox
      t.boolean :on_Playstation
      t.boolean :on_Switch

      t.timestamps
    end
  end
end

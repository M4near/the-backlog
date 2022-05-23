class CreateListItems < ActiveRecord::Migration[6.1]
  def change
    create_table :list_items do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :game, null: false, foreign_key: true
      t.boolean :recommends
      t.boolean :completed
      t.date :deadline
      t.integer :time_played
      t.integer :rank

      t.timestamps
    end
  end
end

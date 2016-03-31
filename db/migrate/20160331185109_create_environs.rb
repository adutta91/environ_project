class CreateEnvirons < ActiveRecord::Migration
  def change
    create_table :environs do |t|
      t.string :audio_url, null: false
      t.string :video_url, null: false
      t.string :image_url, null: false
      
      t.timestamps null: false
    end
  end
end

class CreateAlbums < ActiveRecord::Migration[5.2]
  def change
    create_table :albums do |t|
      t.string :title, null: false
      t.string :year, null: false
      t.boolean :live_album, null: false, default: false
      t.integer :band_id, null: false
    end

    add_index :albums, :band_id
  end
end


# An Album should:

# Not be called Record, as ActiveRecord uses record_id internally.
# Belong to a band (don't forget to add the association to Band also)
# Have a title, year
# Designate whether it is a live or studio album
# HINT: use a boolean paired with a reasonable default value
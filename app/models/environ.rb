class Environ < ActiveRecord::Base

  validates: :audio_url, :video_url, :image_url, presence: true

end

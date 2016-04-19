class Step < ActiveRecord::Base
  validates :body, :todo, presence: true

  belongs_to :todo

end

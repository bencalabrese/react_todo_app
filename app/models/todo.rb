class Todo < ActiveRecord::Base
  validates :title, :body, presence: true
  validates :done, inclusion: [true, false]

  after_initialize :ensure_done_value

  def ensure_done_value
    self.done = false if self.done.nil?
  end
end

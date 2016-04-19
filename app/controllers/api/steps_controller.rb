class Api::StepsController < ApplicationController
  def index
    steps = Step.find_by_todo_id(params[:todo_id])
    render json: steps
  end

  def create
    step = Step.create!(
      body: params[:step][:body],
      todo_id: params[:todo_id]
    )

    render json: step
  end

  def update
    step = Step.find(params[:id]).update!(step_params)
    render json: step
  end

  def destroy
    step = Step.find(params[:id]).destroy!
    render json: step
  end

  def step_params
    params.require(:step).permit(:body)
  end
end

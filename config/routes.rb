Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    resources :environs, only: [:index, :create, :show]
  end

end

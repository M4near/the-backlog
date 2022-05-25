Rails.application.routes.draw do
  
  resources :list_items, only: [:index, :create, :update, :show, :destroy]
  resources :games, only: [:index, :show, :create]
  resources :users, only: [:index, :create, :show]

  post "/login", to: "sessions#create"
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  delete "/logout", to: "sessions#destroy"
  # get "/gameslist", to: "games#index"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end

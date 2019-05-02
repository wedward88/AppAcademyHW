Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :users, only: [:new, :create, :show]
  resource :session, only: [:create, :destroy, :new]
  resources :bands do
    resources :albums, only: [:new]
  end
  resources :albums, only: [:create, :edit, :show, :destroy, :update]

end




# new_band_album GET    /bands/:band_id/albums/new(.:format)   albums#new
#         albums POST   /albums(.:format)                      albums#create
#     edit_album GET    /albums/:id/edit(.:format)             albums#edit
#          album GET    /albums/:id(.:format)                  albums#show
#                PATCH  /albums/:id(.:format)                  albums#update
#                PUT    /albums/:id(.:format)                  albums#update
#                DELETE /albums/:id(.:format)                  albums#destroy
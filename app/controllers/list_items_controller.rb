class ListItemsController < ApplicationController
        # before_action :authenticate_user, except: [:show, :index]
        # before_action :listitem_find, only: [:show, :edit, :update, :destroy]
        # before_action :authorize_listitem, only: [:update, :edit, :destroy]
    
        def index
            render json: ListItem.all
        end
    
        def create
            # byebug
            @listitem = @current_user.listitem.create!(listitem_params)
            render json: listitems, status: :created
        end
    
        def show
            #listitem = listitem_find
            render json: @listitem
        end
    
        def update
            #listitem = listitem_find
            @listitem.update!(listitem_params)
            render json: @listitem
        end
    
        def destroy 
            #listitem = @current_user.listitem_find
            @listitem.destroy
        end
    
        private
    
        def listitem_find
            @listitem = Comment.find(params[:id])
        end
    
        def listitem_params
            params.permit(:user_id, :game_id, :recommends, :completed, :deadline, :time_played, :rank)
        end
    
        # def correct_user
        #     listitem = Comment.find_by(id: params[:id])
        #     unless current_user?(listitem.user)
        #       redirect_to user_path(current_user)
        # end
    
        # def authorize_listitem
        #     unless @current_user == @listitem.user 
        #       redirect_to "/listitems"
        #     end
        #   end
end

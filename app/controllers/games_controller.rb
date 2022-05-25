class GamesController < ApplicationController

    before_action :game_find, only: [:show, :edit, :update, :destroy]
    before_action :authorize_game, only: [:update, :edit, :destroy]

    def index
        render json: Game.all
    end

    def show
        # game = findGame
        render json: game
    end
    
    def create
        # byebug
        @game = Game.create!(game_params)
        # render json: @games, status: :created
    end

private

    def findGame
        Game.find(params[:id])
    end

    def game_params
        params.require(:game).permit(:title, :genre, :image, :summary, :on_PC, :on_Xbox, :on_Playstation, :on_Switch)
    end

    def authorize_game
        unless @current_user == @game.user 
          redirect_to "/games"
        end
      end
end

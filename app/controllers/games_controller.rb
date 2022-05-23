class GamesController < ApplicationController

    def index
        render json: Game.all
    end

    def show
        game = findGame
        render json: game
    end

private

    def findGame
        Game.find(params[:id])
    end
end

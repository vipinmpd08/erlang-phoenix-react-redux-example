defmodule MevFrontexWeb.Router do
  use MevFrontexWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", MevFrontexWeb do
    pipe_through :browser

    get "/", PageController, :index

    get "/transactions-list", TransactionsController, :transactions 

  end

  # Other scopes may use custom stacks.
  # scope "/api", MevFrontexWeb do
  #   pipe_through :api
  # end
end

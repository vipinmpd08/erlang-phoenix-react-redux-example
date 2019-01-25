defmodule MevFrontexWeb.PageController do
  use MevFrontexWeb, :controller

  import MevFrontexWeb.Router.Helpers

  alias MevFrontex.Transactions
  def index(conn, params) do

    # Getting the transaction list from Repo using the search and sort options
    transactionsListFromRepo = Transactions.list_transactions(params)

    #Render it to UI
    render(conn, "index.html", transactions: transactionsListFromRepo)
  end

end

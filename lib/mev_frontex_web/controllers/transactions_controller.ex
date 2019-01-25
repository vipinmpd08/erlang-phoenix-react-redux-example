defmodule MevFrontexWeb.TransactionsController do
  use MevFrontexWeb, :controller

  import MevFrontexWeb.Router.Helpers
  alias MevFrontex.Transactions
 
  def transactions(conn, params) do

    # Getting the transaction list from Repo using the search and sort options
    transactionsListFromRepo = Transactions.list_transactions(params)

    #Render it as JSON
    render(conn, "transactions.json", transactions: transactionsListFromRepo)
  end

end

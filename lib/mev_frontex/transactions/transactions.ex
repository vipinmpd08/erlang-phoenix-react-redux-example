defmodule MevFrontex.Transactions do
  @moduledoc """
  The Transactions context.
  """

  import Ecto.Query, warn: false
  alias MevFrontex.Repo

  alias MevFrontex.Transactions.Transaction

  def list_transactions(params) do

    # Getting Input Values
    search_term = get_in(params, ["query"])
    sort_by = if get_in(params, ["sort_by"]) != nil, do: String.to_atom(get_in(params, ["sort_by"]))
    sort_type = get_in(params, ["sort_type"])

    #Applying Default values
    sort_by = if sort_by == nil, do: :date, else: String.to_atom(get_in(params, ["sort_by"]))
    sort_type = if sort_type == "desc", do: :desc, else: :asc

    # Search and Sort queries
    Transaction
    |> Transaction.search(search_term)
    |> order_by({^sort_type, ^sort_by}) 
    |> Repo.all()
  end

end

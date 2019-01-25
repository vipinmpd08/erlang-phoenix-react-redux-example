defmodule MevFrontex.Transactions.Transaction do
  use Ecto.Schema
  import Ecto.Changeset
  alias MevFrontex.Transactions.Transaction
  import Ecto.Query, only: [from: 2]

  schema "transactions" do
    field :date, :string
    field :ref_no, :string
    field :order_no, :string
    field :payment_type, :string
    field :total_amount, :string
    field :balance, :string
    field :status, :string
  end

  @doc false
  def changeset(%Transaction{} = transaction, attrs) do
    transaction
    |> cast(attrs, [:date, :ref_no, :order_no, :payment_type])
    |> validate_required([:date, :ref_no, :order_no, :payment_type])
  end

  def search(query, search_term) do
    wildcard_search = "%#{search_term}%"

    from transaction in query,
    where: ilike(transaction.date, ^wildcard_search),
    or_where: ilike(transaction.ref_no, ^wildcard_search),
    or_where: ilike(transaction.order_no, ^wildcard_search),
    or_where: ilike(transaction.payment_type, ^wildcard_search),
    or_where: ilike(transaction.status, ^wildcard_search)

    
  end

end
 
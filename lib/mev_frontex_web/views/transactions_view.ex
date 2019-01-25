defmodule MevFrontexWeb.TransactionsView do
  use MevFrontexWeb, :view

  def render("transactions.json", %{transactions: transactions}) do
    %{
        transactions: Enum.map(transactions, &transactions_json/1)
    }
  end

  def transactions_json(transaction) do
    %{
        date: transaction.date,
        ref_no: transaction.ref_no,
        order_no: transaction.order_no,
        payment_type: transaction.payment_type,
        total_amount: transaction.total_amount,
        balance: transaction.balance,
        status: transaction.status
    }
  end

end

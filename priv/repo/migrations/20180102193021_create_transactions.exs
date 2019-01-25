defmodule MevFrontex.Repo.Migrations.CreateTransactions do
  use Ecto.Migration

  def change do
    create table(:transactions) do
      add :date, :string
      add :ref_no, :string
      add :order_no, :string
      add :payment_type, :string
      add :total_amount, :string
      add :balance, :string
      add :status, :string
    end

  end
end

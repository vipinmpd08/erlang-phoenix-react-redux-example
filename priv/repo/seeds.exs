# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     MevFrontex.Repo.insert!(%MevFrontex.SomeModel{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.

alias MevFrontex.Repo
alias MevFrontex.Transactions.Transaction

# Just clearing all data first
Repo.query("TRUNCATE #{MevFrontex.Transactions.Transaction.__schema__(:source)}", [])

Repo.insert!(%Transaction{
  date: "2018/10/15",
  ref_no: "REF12345",
  order_no: "ORD123789",
  payment_type: "Credit",
  total_amount: "111.00",
  balance: "21.00",
  status: "Open"
})


Repo.insert!(%Transaction{
  date: "2018/10/16",
  ref_no: "AEF15647",
  order_no: "ORD674335",
  payment_type: "Credit",
  total_amount: "110.00",
  balance: "25.00",
  status: "Open"
})


Repo.insert!(%Transaction{
  date: "2018/10/17",
  ref_no: "DFK76512",
  order_no: "ORD567678",
  payment_type: "Debit",
  total_amount: "112.00",
  balance: "35.00",
  status: "Closed"
})


Repo.insert!(%Transaction{
  date: "2018/10/18",
  ref_no: "AEF12354",
  order_no: "ORD123098",
  payment_type: "Debit",
  total_amount: "115.00",
  balance: "21.00",
  status: "Open"
})


Repo.insert!(%Transaction{
  date: "2018/10/19",
  ref_no: "RTU87232",
  order_no: "ORD123897",
  payment_type: "Credit",
  total_amount: "117.00",
  balance: "22.00",
  status: "Open"
})


Repo.insert!(%Transaction{
  date: "2018/10/20",
  ref_no: "REF14567",
  order_no: "ORD123246",
  payment_type: "Debit",
  total_amount: "110.00",
  balance: "11.00",
  status: "Closed"
})


Repo.insert!(%Transaction{
  date: "2018/10/21",
  ref_no: "REL12823",
  order_no: "ORD173156",
  payment_type: "Debit",
  total_amount: "180.00",
  balance: "52.00",
  status: "Open"
})


Repo.insert!(%Transaction{
  date: "2018/10/22",
  ref_no: "AOK12323",
  order_no: "ORD123342",
  payment_type: "Debit",
  total_amount: "156.00",
  balance: "55.00",
  status: "Open"
})


Repo.insert!(%Transaction{
  date: "2018/10/23",
  ref_no: "PEK13234",
  order_no: "ORD125456",
  payment_type: "Debit",
  total_amount: "134.00",
  balance: "11.00",
  status: "Closed"
})



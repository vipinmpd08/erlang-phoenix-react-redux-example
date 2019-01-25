defmodule MevFrontexWeb.PageControllerTest do
  use MevFrontexWeb.ConnCase

  test "GET /", %{conn: conn} do
    conn = get(conn, "/")
    assert html_response(conn, 200) =~ "Customer List"
  end

end

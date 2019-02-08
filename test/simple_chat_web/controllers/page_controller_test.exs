defmodule SimpleChatWeb.PageControllerTest do
  use SimpleChatWeb.ConnCase

  test "GET /", %{conn: conn} do
    conn = get(conn, "/")
    assert html_response(conn, 200) =~ "SimpleChat"
  end
end

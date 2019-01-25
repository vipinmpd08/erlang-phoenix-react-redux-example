use Mix.Config

# We don't run a server during test. If one is required,
# you can enable the server option below.
config :mev_frontex, MevFrontexWeb.Endpoint,
  http: [port: 4002],
  server: false

# Print only warnings and errors during test
config :logger, level: :warn

# Configure your database
config :mev_frontex, MevFrontex.Repo,
  adapter: Ecto.Adapters.Postgres,
  username: "postgres",
  password: "postgres",
  database: "mev_frontex_dev",
  hostname: "localhost",
  pool: Ecto.Adapters.SQL.Sandbox

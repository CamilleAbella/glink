import * as app from "../app"

const table = new app.Table<{
  networkId: number
  userId: app.Snowflake
  reason?: string
  date: number
}>({
  name: "mutes",
  setup: (table) => {
    table
      .integer("networkId")
      .index()
      .references("id")
      .inTable("networks")
      .onDelete("CASCADE")
    table.string("userId")
    table.string("reason").nullable()
    table.date("date")
  },
})

export default table

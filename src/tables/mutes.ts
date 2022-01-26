import * as app from "../app.js"

export interface Mute {
  networkId: number
  userId: app.Snowflake
  reason?: string
  date: number
}

const table = new app.Table<Mute>({
  name: "mutes",
  description: "Represent a muted user",
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

import * as app from "../app"

const command: app.Command = {
  name: "unmute",
  networkOwner: true,
  positional: [
    {
      name: "userId",
      required: true,
    },
  ],
  async run(message) {
    const user = message.client.users.cache.get(message.positional.userId)

    if (!user) return message.channel.send("This user do not exists.")

    const muted = app.muted.get(user.id)

    if (!muted)
      return message.channel.send(`**${user.username}** is not muted.`)

    app.muted.delete(user.id)

    return message.channel.send(
      `You have successfully un-muted **${user.username}** from the "**${
        app.networks.get(message.author.id)?.displayName
      }**" network.`
    )
  },
}

module.exports = command
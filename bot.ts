import { Client, Message } from "discord.js";
import Intents from "discord.js";

const token = "YOUR_BOT_TOKEN";
const intents = new Intents.Intents();
intents.add(Intents.FLAGS.Guilds, Intents.FLAGS.GuildMessages);

const client = new Client({ intents });

const prefix = "!";

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("messageCreate", async (message: Message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === "redirect") {
    const targetUrl = args[0];
    if (!targetUrl) {
      message.channel.send("Please provide a URL to redirect to.");
      return;
    }

    const redirectUrl = `http://your-server-domain.com/redirect?url=${encodeURIComponent(
      targetUrl
    )}`;
    message.channel.send(`Here's your custom redirect link: ${redirectUrl}`);
  }
});

client.login(token);

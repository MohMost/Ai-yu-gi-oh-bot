import * as discord from "discord.js";
import { config } from "dotenv";

config();

//import environment variables from .env file
const BOT_TOKEN: any = process.env.BOT_TOKEN;
const CLIENT_ID: any = process.env.CLIENT_ID

//initialize the discord bot client
const client: any = new discord.Client({
  intents: [
    discord.GatewayIntentBits.Guilds,
    discord.GatewayIntentBits.GuildMessages,
    discord.GatewayIntentBits.MessageContent
  ]
});

//Login and start the bot
function start() {
  client.login(BOT_TOKEN);
  console.log(`Ai is successfully logged ┃✅`)
}
start();


const commands = [
  {
    name: 'events',
    description: 'displays the latest events of dual link',
  },
];

const rest = new discord.REST({ version: '10' }).setToken(BOT_TOKEN);

try {
  console.log('Started refreshing application (/) commands.');

  rest.put(discord.Routes.applicationCommands(CLIENT_ID), { body: commands });

  console.log('Successfully reloaded application (/) commands.');
} catch (error) {
  console.error(error);
}
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async (interaction: { isChatInputCommand: () => any; commandName: string; reply: (arg0: string) => any; }) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'events') {
    await interaction.reply("Link into the vraaaaaains!... oh hi, unfortunately im not ready yet MohMost is not done with me yet. Can't wait to help you become the duel master 🤗 !");
  }
});
import * as discord from "discord.js";
import { config } from "dotenv";

config();

const BOT_TOKEN: any = process.env.BOT_TOKEN;
const CLIENT_ID: any = process.env.CLIENT_ID

const client: any = new discord.Client({
  intents: [
    discord.GatewayIntentBits.Guilds,
    discord.GatewayIntentBits.GuildMessages,
    discord.GatewayIntentBits.MessageContent
  ]
});


function start() {
  client.login(BOT_TOKEN);
  console.log(`Ai is successfully logged ┃✅`)
  
}
start();


const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
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

  if (interaction.commandName === 'ping') {
    await interaction.reply('Pong!');
  }
});


// Load environment variables from .env file
require('dotenv').config();

// Require the necessary discord.js classes
const { Client, Events, GatewayIntentBits } = require('discord.js');

// Load environment variables
const token = process.env.DISCORD_BOT_TOKEN;
const userId = process.env.USER_ID;
const apiKey = process.env.AIRTABLE_TOKEN;
const airtableBaseId = process.env.AIRTABLE_BASE_ID;
const airtableTableId = process.env.AIRTABLE_TABLE_ID;

const axios = require('axios').default;

// Create a new client instance
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

// When the client is ready, run this code (only once)
client.once(Events.ClientReady, c => {
  console.log(`Ready! Logged in as ${c.user.tag}`);
});

// Listen for messages
client.on(Events.MessageCreate, message => {
  // If the message is from userId
  if (message.author.id === userId) {
    const messageContent = message.content.replace(/^\*+/, '');
    const parts = messageContent.split('--');
    const prompt = parts[0].trim();
    const messageLink = message.url;

    // Check if there's an attachment
    const firstAttachment = message.attachments.first();
    if (!firstAttachment) {
      console.error('Error: No attachment found in the message');
      return; // Exit the event handler
    }

    const imageLink = firstAttachment.url;

    // Send confirmation message
    message.channel.send(`Airjourney bot is working`);

    // Send data to Airtable API
    axios
      .post(
        `https://api.airtable.com/v0/${airtableBaseId}/${airtableTableId}`,
        {
          records: [
            {
              fields: {
                Prompt: prompt,
                Image: [{ url: imageLink }],
                'Message Link': messageLink,
              },
            },
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
          },
        }
      )
      .then(response => {
        console.log('Airtable API response:', response.data);
      })
      .catch(error => {
        console.error('Error sending data to Airtable API:', error);
      });
  }
});

// Log in to Discord with your client's token
client.login(token);

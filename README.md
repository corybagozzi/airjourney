# AirJourney
## Supercharge Your Midjourney to Airtable Workflow with AI-Powered Efficiency

[Midjourney](https://midjourney.com) is an awesome AI tool for ideation and building out a toolkit of images you can use for marketing, art, and design work.

One issue I have with it is that there is no way to store and categorize the images after I make them so I have to scroll through the site or [Discord](https://discord.com) and try to remember how long ago it was that I made that cool picture and what the prompt was. I wanted a way to get these images and prompts into an [Airtable](https://airtable.com) database, but copy/pasting and uploading images is way too tedious. To solve this I created a [Discord](https://discord.com) bot that listens to the channel in my personal [Discord](https://discord.com) server where I do my [Midjourney](https://midjourney.com) work. It then takes any image I create and send it automatically to the Airtable database that I created along with the prompt that was used and a few other details.

If you are struggling with the same issue, and want to supercharge your [Midjourney](https://midjourney.com) workflows, here are the steps to create you own Discord bot that sends your [Midjourney](https://midjourney.com) images and prompts to [Airtable](https://airtable.com).

## Prerequisites

Before you can use this bot, you need to have the following:

- Node.js installed on your system
- A Discord account with permission to manage a server and a channel with the Midjourney bot as a member
- An Airtable account with an API key

## Discord Application and Bot Setup

1. Go to the [Discord Developer Portal](https://discord.com/developers/applications) and log in with your Discord account.
2. Click on the "New Application" button in the top right corner.
3. Enter a name for your application, and then click "Create".
4. In the left sidebar, click on "Bot".
5. Click on the "Add Bot" button and confirm by clicking "Yes, do it!".
6. Under the "TOKEN" section, click on "Copy" to copy your bot's token. Save this for later use in the `.env` file.

To add the bot to your server, follow these steps:

1. In the left sidebar of your application, click on "OAuth2".
2. Scroll down to the "Scopes" section and check the "bot" box.
3. In the "Bot Permissions" section, check the boxes for "View Channels", "Send Messages", and "Read Message History".
4. Copy the generated URL from the "Scopes" section and open it in a new browser window.
5. Select your server and click on "Continue". Grant the bot the requested permissions and click on "Authorize".

## Airtable Setup

1. Log in to your Airtable account and create a new base.
2. Name your base and choose a template or start with a blank base.
3. Add the following columns to your table:
   - "Prompt" (Single line text)
   - "Image" (Attachment)
   - "Message Link" (URL)
4. Click on your Account menu in the top right corner, and then click on "API documentation".
5. In the API documentation, note down the base ID (found near the top of the page) and the table ID (found in the "List records" or "Create records" sections). Save these for later use in the `.env` file.
6. Create a Personal Access Token by going to your Account menu from your base and clicking on `Developer Hub`
7. Click `Create New Token` in the top right
-- name the token anything memorable
-- click`Add a scope` and add data.records:read and data.records:write
-- click `Add a base` and choose your base
-- click `Create token` and save the token somewhere safe for later use in the .env file

## Installation

To install the bot, follow these steps:

1. Clone the repository to your local machine:
```
git clone https://github.com/corybagozzi/airjourney.git
```

2. Navigate to the project directory:
```
cd airjourney
```

3. Install the required dependencies:
```
npm install
```

## Configuration

Create a `.env` file in the project root directory with the following variables:
```
DISCORD_BOT_TOKEN=Your Discord bot's token (from Discord Application and Bot Setup)
USER_ID=The User ID of the Midjourney Bot invited to your server's channel
AIRTABLE_TOKEN=Your Airtable Personal Access Token
AIRTABLE_BASE_ID=The ID of your Airtable base (from Airtable Setup)
AIRTABLE_TABLE_ID=The ID of the table where you want to store the data (from Airtable Setup)
```
## Usage

To start the bot, run the following command in the project directory:
```
node index.js
```

The bot will now listen for messages from the Midjourney Bot in the specified channel and send the data to your Airtable database.

When the bot receives a message from the specified user, it will extract the prompt, image attachment, and message link, then send this data to your Airtable table with the fields "Prompt", "Image", and "Message Link".

## Troubleshooting

If you encounter any issues while using the bot, please check the following:

1. Ensure that your `.env` file is properly configured with the correct credentials.
2. Verify that the bot has the necessary permissions to access the channel and read messages.
3. Check the logs for any error messages or warnings.

## Contributing

If you want to contribute to this project, feel free to submit a pull request or open an issue on GitHub. We appreciate your help!

## License

This project is licensed under the MIT License.

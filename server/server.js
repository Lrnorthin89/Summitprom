const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '../public')));

const DISCORD_BOT_TOKEN = 'YOUR_DISCORD_BOT_TOKEN';

async function getDiscordMessages(channelId) {
    try {
        const response = await axios.get(`https://discord.com/api/v9/channels/${channelId}/messages`, {
            headers: {
                'Authorization': `Bot ${DISCORD_BOT_TOKEN}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching Discord messages:', error);
        return [];
    }
}

app.get('/api/messages', async (req, res) => {
    const channelId = 'YOUR_CHANNEL_ID';
    const messages = await getDiscordMessages(channelId);
    res.json(messages);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

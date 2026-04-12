import discord
import os

# 🔥 Intents (TRÈS IMPORTANT)
intents = discord.Intents.default()
intents.message_content = True

client = discord.Client(intents=intents)

# ✅ Quand le bot démarre
@client.event
async def on_ready():
    print(f"Connecté en tant que {client.user}")

# ✅ Commandes
@client.event
async def on_message(message):
    if message.author.bot:
        return

    if message.content.lower() == "+ping":
        embed = discord.Embed(
            title="🏓 Pong !",
            description="**Ping reçu avec succès !**",
            color=discord.Color.blue()
        )
        embed.add_field(name="📡 Statut", value="Bot opérationnel", inline=False)
        embed.set_footer(text="Commande +ping")

        await message.channel.send(embed=embed)

# 🔐 Lancer le bot avec le TOKEN Railway
client.run(os.getenv("TOKEN"))

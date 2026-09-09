export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const webhook = process.env.DISCORD_WEBHOOK_URL;

  if (!webhook) {
    return res.status(500).json({
      error: "DISCORD_WEBHOOK_URL is not configured"
    });
  }

  const data = req.body || {};

  const userAgent =
    typeof data.userAgent === "string"
      ? data.userAgent.slice(0, 500)
      : "Unknown";

  const screen =
    typeof data.screen === "string"
      ? data.screen.slice(0, 100)
      : "Unknown";

  const referrer =
    typeof data.referrer === "string"
      ? data.referrer.slice(0, 500)
      : "Direct visit";

  const page =
    typeof data.page === "string"
      ? data.page.slice(0, 500)
      : "Unknown";

  // Get visitor IP from the server request
  const forwarded = req.headers["x-forwarded-for"];

  const ip =
    typeof forwarded === "string"
      ? forwarded.split(",")[0].trim()
      : req.socket?.remoteAddress || "Unknown";

  const visitTime = new Date().toISOString();

  // Approximate location based on IP
  let location = "Unknown";

  try {
    const response = await fetch(
      `https://ipapi.co/${encodeURIComponent(ip)}/json/`
    );

    if (response.ok) {
      const geo = await response.json();

      const parts = [
        geo.city,
        geo.region,
        geo.country_name
      ].filter(Boolean);

      if (parts.length > 0) {
        location = parts.join(", ");
      }
    }
  } catch (error) {
    console.error("Location lookup failed:", error);
  }

  const payload = {
    username: "Website Visitor",

    embeds: [
      {
        title: "🌐 New Website Visit",

        color: 5814783,

        fields: [
          {
            name: "Page",
            value: page,
            inline: false
          },
          {
            name: "Browser / Device",
            value: userAgent,
            inline: false
          },
          {
            name: "Screen Resolution",
            value: screen,
            inline: true
          },
          {
            name: "Approx. Location",
            value: location,
            inline: true
          },
          {
            name: "IP Address",
            value: ip,
            inline: true
          },
          {
            name: "Referrer",
            value: referrer,
            inline: false
          },
          {
            name: "Visit Time",
            value: visitTime,
            inline: false
          }
        ],

        footer: {
          text: "CCPorted visitor notification"
        },

        timestamp: visitTime
      }
    ],

    allowed_mentions: {
      parse: []
    }
  };

  try {
    const discordResponse = await fetch(webhook, {
      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify(payload)
    });

    if (!discordResponse.ok) {
      const errorText = await discordResponse.text();

      console.error("Discord webhook error:", errorText);

      return res.status(502).json({
        error: "Discord webhook failed"
      });
    }

    return res.status(200).json({
      success: true
    });

  } catch (error) {
    console.error("Discord request failed:", error);

    return res.status(500).json({
      error: "Failed to send Discord notification"
    });
  }
}

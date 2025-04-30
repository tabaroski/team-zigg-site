export default async function handler(req, res) {
  const clanTag = "%232R2POY2UY";
  const API_TOKEN = process.env.COC_API_TOKEN;

  try {
    const response = await fetch(`https://api.clashofclans.com/v1/clans/${clanTag}`, {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Erro ao acessar a API do Clash of Clans." });
  }
}
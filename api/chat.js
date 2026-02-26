// api/chat.js
export default async function handler(req, res) {
    const API_KEY = process.env.API_KEY; // 从 Vercel 后台获取 Key
    const API_URL = 'https://api520.pro/v1/chat/completions';

    if (req.method !== 'POST') {
        return res.status(405).json({ error: '仅支持 POST 请求' });
    }

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${API_KEY}`
            },
            body: JSON.stringify(req.body)
        });

        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: '服务器中转失败' });
    }
}

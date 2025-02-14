## DeepSeek API 使用指南

官方文档：https://api-docs.deepseek.com/zh-cn/

## 登录 Deepseek 开放平台

首先登录 [Deepseek 开放平台](https://platform.deepseek.com/)，获取 `api_key`，首次注册登录的用户， Deepseek 会赠送 10 块钱的 tokens 额度（先看看有没有，也有可能不送了，导致你的 `API_KEY` 不能用，没有额度的话得先充钱）。



## 创建并复制 API key

在 Deepseek 开放平台的左侧边栏找到 API Keys，点击它并在此创建一个 API Key，创建完成之后，将这个 API Key 复制下来，并保存在一个只有你知道的地方。

![img](https://pic.yupi.icu/yuyi/1739501532259-31ad32ae-9e52-4c6b-a631-4f7941af231d.png)

💡

请将此 API key 保存在安全且易于访问的地方。出于安全原因，你将无法通过 Deepseek 的开放平台管理界面再次查看它。如果你丟失了这个 key，将需要重新创建。

## 调用对话 API

在创建 API key 之后，你可以使用以下样例脚本的来访问 DeepSeek API。样例为非流式输出，您可以将 stream 设置为 true 来使用流式输出。

```bash
curl https://api.deepseek.com/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <DeepSeek API Key>" \
  -d '{
        "model": "deepseek-chat",
        "messages": [
          {"role": "system", "content": "You are a helpful assistant."},
          {"role": "user", "content": "Hello!"}
        ],
        "stream": false
      }'
```



```python
# Please install OpenAI SDK first: `pip3 install openai`

from openai import OpenAI

client = OpenAI(api_key="<DeepSeek API Key>", base_url="https://api.deepseek.com")

response = client.chat.completions.create(
    model="deepseek-chat",
    messages=[
        {"role": "system", "content": "You are a helpful assistant"},
        {"role": "user", "content": "Hello"},
    ],
    stream=False
)

print(response.choices[0].message.content)
```



```javascript
// Please install OpenAI SDK first: `npm install openai`

import OpenAI from "openai";

const openai = new OpenAI({
  baseURL: 'https://api.deepseek.com',
  apiKey: '<DeepSeek API Key>'
});

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "You are a helpful assistant." }],
    model: "deepseek-chat",
  });

  console.log(completion.choices[0].message.content);
}

main();
```
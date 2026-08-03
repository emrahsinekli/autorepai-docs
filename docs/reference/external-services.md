---
title: External services & privacy
description: Exactly which external services Auto RepAI connects to, what data is sent and when — OpenAI endpoints, Freemius, and the Pro providers. Your content never passes through Auto RepAI servers.
---

# External services & privacy

Auto RepAI is **bring-your-own-key**: AI requests go directly from your server to the provider you configured, on your own account. No content, prompt or key ever passes through Auto RepAI's servers. Nothing is sent anywhere without an explicit user action.

## Free plugin

### OpenAI (api.openai.com)

| Endpoint | When | Data sent |
|---|---|---|
| `/v1/chat/completions` | You click Generate / Repair / Edit | Your prompt and the content being processed |
| `/v1/images/generations` | Image generation | Your image prompt |
| `/v1/images/edits` | Only when you supply a reference image | Prompt + the reference image |
| `/v1/audio/speech` | Only when you enable "Convert to audio" in Auto Repair | The post title and content, for narration |
| `/v1/models` | Only when you click "Test Connection" | Your API key (verification only) |

When you give Auto Repair / Page Repair a **source URL**, your server fetches that page you typed — nothing else is sent in that step.

OpenAI: [privacy policy](https://openai.com/policies/privacy-policy) · [terms](https://openai.com/policies/terms-of-use)

### Freemius (wp.freemius.com, api.freemius.com, checkout.freemius.com)

The upgrade/licensing infrastructure. **Nothing is sent unless you opt in** on the activation screen or start a checkout. If you opt in: site URL, WordPress/PHP/plugin versions and admin email — for updates and support. Skip opt-in and the free plugin works fully, sending nothing. Your content and API keys are never sent to Freemius.
[Privacy](https://freemius.com/privacy/) · [Terms](https://freemius.com/terms/)

## Pro providers (only if you configure them)

Anthropic (api.anthropic.com), Google (generativelanguage.googleapis.com), OpenRouter (openrouter.ai), DeepSeek (api.deepseek.com), Stability (api.stability.ai), Replicate (api.replicate.com), Leonardo (cloud.leonardo.ai) — same pattern: your prompt/content to your chosen provider, on your key, only on explicit actions (or the schedules **you** enable). Reddit's public API is used read-only for Reddit Research / Brand Monitor. Pexels/Pixabay are contacted only if you add their keys for stock photos. Your own webhook/Slack URLs receive the JSON events you configure.

## Data stored on YOUR site

Generation history, settings, leads/tickets/chat logs (Pro) — all in your WordPress database. Leads and chats are included in WordPress's GDPR export/erase tools. Deleting the plugin removes everything it created.

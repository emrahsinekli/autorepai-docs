---
title: AI providers (Pro)
description: Connect Anthropic Claude, Google Gemini, OpenRouter, DeepSeek, Stability AI, Replicate and Leonardo alongside OpenAI — pick per task or per run.
---

# AI providers <span className="badge badge--pro">PRO</span>

Free works with every OpenAI model. Pro adds seven providers — each with its own key field and **Test Connection** button under **Settings → API Keys**.

| Provider | Best for | Example models |
|---|---|---|
| **Anthropic Claude** | Long-form quality, nuanced tone | Claude Sonnet, Opus, Haiku families |
| **Google Gemini** | Fast drafting, image generation | Gemini Flash/Pro, Gemini image models |
| **OpenRouter** | One key, hundreds of models | Any `vendor/model` id — Llama, Mistral, Qwen… |
| **DeepSeek** | Very low cost text | DeepSeek V3 (chat), R1 (reasoner) |
| **Stability AI** | Photorealistic images | SD 4 Ultra, SD 3.5 |
| **Replicate** | Flux image family | FLUX 2 Max/Pro/Flex |
| **Leonardo** | Stylized/consistent characters | Phoenix 2.0 |

## How selection works

- Set a **default provider** and per-provider default models in Settings.
- Nearly every tool has a **per-run picker** (e.g. draft with DeepSeek, polish with Claude).
- [Automations](/pro/automations) and [AI Forms](/pro/ai-forms) can pin a provider/model **per task or per form**.
- If a chosen provider has no key, tools fall back to your default provider instead of failing.

## Reddit credentials

Reddit blocks anonymous requests from many hosts. For [Reddit Research and Brand Monitor](/pro/analysis-tools), create a free "script" app at reddit.com/prefs/apps and paste the client id/secret in Settings — read-only, no Reddit password involved.

:::tip Cost strategy
A common setup: DeepSeek or GPT-4o Mini for bulk drafting, Claude or GPT-4o for customer-facing copy, Stability/Flux for hero images. Your [usage limits](/pro/usage-limits) cap the total regardless of mix.
:::

---
title: Usage limits, webhooks & settings transfer
description: Hard monthly AI spend/token caps (site-wide and per role), pre-run cost estimates, Zapier/Make/n8n event webhooks, Slack notifications, and one-click settings export/import between sites.
---

# Cost controls & operations <span className="badge badge--pro">PRO</span>

Pro treats your AI budget like production infrastructure: visible, capped, and portable.

## Monthly usage limits

Under **Settings → Advanced**:

| Limit | Behavior |
|---|---|
| **Monthly spend limit** ($) | Site-wide 30-day cap. When reached, **every** AI action is blocked with a clear message until the window rolls. `0` disables. |
| **Monthly token limit** | Same, in tokens. |
| **Per-role limits** (JSON) | e.g. `{"author":{"cost":5,"tokens":100000}}` — authors can draft freely but can't outspend their allowance. |

Limits are enforced at the single point every tool passes through — nothing bypasses them, including autopilots and visitor-facing AI.

## Pre-run cost estimates

Batch triggers (Bulk Content, Repair All, Automations run-now, autopilot enabling) show a **confirmation modal with the estimated cost** before anything is spent — based on the item count and your current model's pricing.

## Event webhooks

Set a **webhook URL** (Zapier / Make / n8n compatible) and Auto RepAI POSTs JSON on:
`content_generated`, `form_submitted`, `automation_item_completed`.
Use it to notify Slack, append to a content-calendar sheet, or trigger downstream publishing steps. A separate **Slack webhook** field posts AI Form submissions directly to a channel.

## Settings export/import

Roll your configuration across sites (the agency workflow):

1. **Settings → Advanced → Export settings (JSON)** downloads your configuration — models, defaults, limits, [white-label branding](/pro/reports-white-label), chatbot settings.
2. On the next site: **Import settings**, pick the file, confirm.

**Security by design:** API keys, Reddit credentials and webhook URLs are **never exported** and **never overwritten** by an import — each site keeps its own secrets. Invalid files are rejected with a clear message.

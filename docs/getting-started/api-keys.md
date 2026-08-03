---
title: Connect your API keys
description: Get an OpenAI API key, add it to Auto RepAI, test the connection, and understand costs. Pro users can also connect Claude, Gemini, OpenRouter, DeepSeek, Stability, Replicate and Leonardo.
---

# Connect your API keys

Auto RepAI is a **bring-your-own-key (BYOK)** plugin: every AI call goes directly from your server to the provider, billed to your own account. The free plugin works with **OpenAI**; [Pro](/pro/providers) adds seven more providers.

## Step 1 — Create an OpenAI API key

1. Sign in (or sign up) at [platform.openai.com](https://platform.openai.com/).
2. Open **API keys** and click **Create new secret key**.
3. Copy the key — it starts with `sk-` and is shown only once.
4. Add a small amount of credit under **Billing** (a few dollars goes a long way: a full blog post typically costs a few cents).

## Step 2 — Add the key to Auto RepAI

1. In WordPress, go to **Auto RepAI → Settings → API Keys**.
2. Paste the key into the **OpenAI API Key** field.
3. Click **Save Settings**.

Saved keys are stored in your WordPress database and displayed **masked** (`********`) afterwards — leaving the field masked and saving again keeps the stored key.

## Step 3 — Test the connection

Click **Test OpenAI Connection** under the key field. You should see **"Connection successful!"**. If not, see [Troubleshooting](/reference/troubleshooting#api-connection-issues).

## Choosing models

On the **Models** tab you can pick the default text model (GPT-4o, GPT-4o Mini, the GPT-5.x family…) and the image model (GPT Image). OpenAI models are **never restricted** in the free plugin — new models appear in the dropdowns as we ship updates. Most tools also let you override the model per run.

## Understanding costs

- Every generation shows its **token usage and estimated cost**; the Dashboard and **Settings → Advanced** show totals per user and site-wide (30 days).
- Batch actions (Bulk Content, Repair All, autopilots) show a **cost estimate confirmation** before spending.
- [Pro](/pro/usage-limits) adds hard monthly spend/token limits, including per-role limits.

:::caution Keep keys private
Never paste API keys into support emails or public forums. If a key leaks, revoke it in the provider dashboard and create a new one — then update it in Settings.
:::

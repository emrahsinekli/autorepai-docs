---
title: Run AI locally (Ollama, LM Studio)
description: Point AISiteVolt at a model running on your own machine — no API key, no per-word cost, and no prompt ever leaves your server. Works with Ollama, LM Studio, vLLM and LiteLLM.
keywords: [ollama wordpress, local ai wordpress, lm studio wordpress, self-hosted ai, private ai wordpress, free ai content]
---

# Run AI locally (Ollama, LM Studio)

AISiteVolt can talk to a model running **on your own machine** instead of a cloud
provider. There is no API key to buy, no per-word cost, and no prompt or article
ever leaves your server.

This is in the **free plugin** — nothing here needs Pro.

:::tip When this is the right choice
Building a site locally, working with client material you'd rather not send to a
third party, generating a lot of draft content, or simply not wanting a metered
bill while you experiment.
:::

## What you need

Any server that speaks the OpenAI chat API. The common ones:

| Tool | Default address | Notes |
| --- | --- | --- |
| [Ollama](https://ollama.com) | `http://localhost:11434` | Easiest starting point on Mac, Windows and Linux |
| [LM Studio](https://lmstudio.ai) | `http://localhost:1234` | Desktop app with a model browser; enable the local server |
| vLLM | `http://localhost:8000` | For serious hardware and concurrent requests |
| LiteLLM | varies | A gateway in front of many providers at once |

## Step 1 — Install a model

With Ollama, one command pulls a model:

```bash
ollama pull llama3.2
```

Small models (3B–8B) are fast on ordinary laptops and perfectly capable of
outlines, product copy, FAQ sections and rewrites. Larger models (14B and up)
write noticeably better long-form articles but need more memory.

Check it is running:

```bash
curl http://localhost:11434/v1/models
```

## Step 2 — Point AISiteVolt at it

1. In WordPress, go to **AISiteVolt → Settings → API Keys**.
2. Find the **Local AI server** section.
3. **Server URL** — `http://localhost:11434` (the `/v1` part is added for you).
4. **Model name** — exactly as your server names it, e.g. `llama3.2:latest`.
5. **API key** — leave empty. Local servers don't use one.
6. Click **Test local server**.

A successful test reports the models the server actually has installed, for
example: *Connected. 3 model(s) available: llama3.2:latest, qwen2.5:14b,
mistral-nemo:12b*.

Then click **Save Settings**.

## Step 3 — Use it

Open **AISiteVolt → Content Generator** and pick **Local AI server** in the
provider list. The model dropdown fills itself from your server, so pulling a new
model in Ollama makes it selectable here without touching the plugin.

Generate as usual. The entry in **AISiteVolt → History** will show a cost of
**0** — because there was nothing to bill.

## Building a whole site offline

This pairs well with local development. A typical agency workflow:

1. Spin the site up locally (for example in [Studio](https://developer.wordpress.com/studio/), the free local WordPress app).
2. Run Ollama on the same machine.
3. Use **Bulk Content** to turn a topic list into drafts, and **Content Repair** to
   tighten what's already there — all offline, at no cost, with the client's
   material never leaving your laptop.
4. Switch the provider to OpenAI later if you want a stronger model for the
   pieces that matter most.

:::caution Moving a local site to production
Images generated locally are stored with a local URL such as
`http://localhost:8881/wp-content/uploads/...`. That is normal for any local
WordPress site — remember to run a proper search-replace for the site URL when
you migrate, or the images will break. Migration tools do this for you.
:::

## What local models can and can't do here

| Works | Doesn't |
| --- | --- |
| Content Generator, Bulk Content, Content Repair, GEO rewrites, product copy — anything text | **Image generation** — use OpenAI for that |
| Any model your server exposes | Audio transcription and speech |

Text is where local models shine. Image models are a different kind of server and
AISiteVolt keeps image generation on the providers that support it.

## Troubleshooting

**"No local model name is configured yet."** The model field is empty, or the name
doesn't match. Run `ollama list` and copy the name exactly, tag included.

**"The server did not return a model list."** The server isn't reachable at that
address. Check it is running, and that the port matches.

**Connection works but generation is slow.** Small models are far quicker; a 3B
model on a laptop answers in seconds, a 30B model may take minutes. Model size,
not the plugin, is the bottleneck.

**Running Ollama on another machine.** Use its LAN address (for example
`http://192.168.1.20:11434`) and make sure Ollama listens on the network
(`OLLAMA_HOST=0.0.0.0`).

## See also

- [Connect your API keys](/getting-started/api-keys) — the cloud provider setup
- [Write your first article](/getting-started/first-article)
- [Bulk Content](/content-tools/bulk-content) — the fastest way to use a local model

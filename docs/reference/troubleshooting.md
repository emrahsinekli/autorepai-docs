---
title: Troubleshooting
description: Fix the most common Auto RepAI issues — API connection errors, empty generations, missing menu items, slow responses, chatbot problems and importer quirks.
---

# Troubleshooting

## API connection issues

**"Invalid API key or insufficient permissions"**
1. Re-copy the key from your provider dashboard (no leading/trailing spaces) and save again.
2. OpenAI keys need available **billing credit** — check platform.openai.com → Billing.
3. Project-scoped keys must have model access enabled for the models you selected.

**"Connection failed (HTTP …)"**
- 429 = rate/credit limit at the provider; wait or add credit.
- 5xx = provider outage; check their status page.
- Timeouts on shared hosting: try again — long generations occasionally exceed strict host timeouts; shorter max-tokens helps.

## Generation problems

**"Please enter an API key first"** — the tool's selected provider has no saved key; either add one or switch the run's provider to OpenAI.

**Empty or cut-off article** — raise **Max Tokens** in [Settings → Defaults](/getting-started/settings); very long "Comprehensive" articles need 4000+.

**"AI returned an unexpected format"** — rare model hiccup on structured tasks; clicking the action again almost always succeeds.

## Interface problems

**No Auto RepAI menu** — the plugin is network-installed but not activated on this site, or your role lacks access (most screens need editor/admin capabilities).

**A button does nothing** — check the browser console for a JavaScript conflict from another plugin; test with other plugins temporarily disabled. Auto RepAI loads its scripts only on its own screens, so conflicts are rare.

## Chatbot (Pro)

**Bot answers "I'm not sure…" to things it should know** — the fact isn't in your [Knowledge Base](/pro/knowledge-base); add a KB entry or index the relevant page as AI Reference.

**Visitors report "taking a short break" message** — the chatbot's daily budget cap was reached (you were emailed once); raise the cap or wait for the daily rollover.

## Importers (Pro)

**YouTube transcript unavailable** — some videos have no transcript, and YouTube blocks transcript fetches from some datacenter IPs; try another video or add the content via the [Notebook](/pro/importers#ai-notebook).

**Reddit results empty** — add [Reddit app credentials](/pro/providers#reddit-credentials); anonymous Reddit access is blocked from many hosts.

## Still stuck?

Email **support@autorepai.com** with: your WordPress + PHP versions, the tool and exact action, and the error text. Screenshots help enormously.

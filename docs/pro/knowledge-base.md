---
title: Knowledge Base & semantic grounding
description: Teach the AI your facts — curated Q&A entries plus semantic indexing of your own posts (hybrid RAG) so the chatbot and content tools answer with your terminology, prices and policies.
---

# Knowledge Base <span className="badge badge--pro">PRO</span>

The Knowledge Base (KB) is how you stop AI from guessing. Whatever you put here — delivery times, prices, policies, product facts, brand voice — grounds the [chatbot](/pro/chatbot) and the content tools.


![The Knowledge Base screen with bulk indexing](/img/screenshots/knowledge-base.png)
## Curated entries

1. Go to **Auto RepAI → Knowledge Base**.
2. Add entries as title + content ("Shipping times", "Barista Pro 900 specs", "Return policy"…).
3. That's it — the chatbot and generators pull the most relevant entries into every request.

Curated entries always win: they are your explicit facts.

## Semantic grounding from your posts (hybrid RAG)

Beyond manual entries, Pro can index your **own posts and pages** as reference material:

- **Per post** — in the editor, tick **"AI Reference"** in the Auto RepAI meta box; the post is chunked and embedded (OpenAI `text-embedding-3-small`) on save.
- **In bulk** — on the Knowledge Base page, select posts and click **Index selected posts** (with a cost preview; embeddings are very cheap).

At question time, retrieval is **hybrid**: your curated KB entries first, then the most semantically relevant post chunks — with a relevance floor so an off-topic chunk never drowns out your explicit facts.

## What grounding changes

Without KB: *"I'm not sure about delivery times…"*
With KB: *"Standard delivery is 2–4 business days; express orders placed before 14:00 ship same day."*

The same grounding feeds the **Content Generator**, so new articles use your terminology and never contradict your documented facts.

:::tip What to index
Index evergreen reference pages (services, policies, product guides) — not news posts. Re-index a post after major edits by saving it again with "AI Reference" ticked.
:::

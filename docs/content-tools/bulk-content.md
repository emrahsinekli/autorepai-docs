---
title: Bulk Content
description: Turn a topic list into a queue of AI-written drafts with SEO metadata — unlimited in the free plugin. Pro adds CSV import with categories, authors, post types and scheduled publishing.
---

# Bulk Content <span className="badge badge--free">FREE</span>

**Auto RepAI → Bulk Content** produces a whole content calendar in one sitting: paste topics, get drafts.


![The Bulk Content screen](/img/screenshots/bulk-content.png)
## Step by step

1. **Add topics**, one per line. Optionally append a focus keyword after a pipe:
   ```text
   How to start a balcony garden | balcony garden
   Best budget standing desks
   10 breakfast ideas for busy mornings
   ```
2. Choose **Save as**: Draft (recommended) or Published.
3. Keep **Generate SEO metadata** on to get a meta description, focus keyword and tags per post.
4. Click **Start Batch**. A **cost estimate** is shown first — confirm to proceed.
5. Watch the queue: each row shows status, cost and an **Edit** link when done.

There is **no cap** on batch size in the free plugin — the whole list runs.

## CSV import <span className="badge badge--pro">PRO</span>

Pro replaces the plain list with a real editorial pipeline. Upload a CSV with columns:

| Column | Purpose |
|---|---|
| `topic` | Required — the article subject |
| `keyword` | Focus keyword |
| `category_id` | Assign a category |
| `author_login` | Attribute to a specific author (requires editor rights) |
| `post_type` | e.g. `post` or `page` |
| `schedule_date` | `YYYY-MM-DD HH:MM` — posts are scheduled, not just drafted |

Rows honor WordPress permissions: assigning other authors needs `edit_others_posts`, scheduling needs `publish_posts`.

:::tip Review before publishing
Generate to **Draft** and skim each post. Ten minutes of human editing per post is the difference between content that ranks and content that reads generated.
:::

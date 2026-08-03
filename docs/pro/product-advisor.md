---
title: AI Product Advisor
description: A storefront widget where visitors describe what they need and your AI recommends up to three matching WooCommerce products — with images, prices and a one-line reason each.
---

# AI Product Advisor <span className="badge badge--pro">PRO</span>

The Product Advisor is a conversion tool for WooCommerce stores: instead of forcing visitors to guess your category tree, they **describe what they need** and the AI picks the best products from your catalog.


![The AI Product Advisor on a storefront](/img/screenshots/product-advisor.png)
## Add it to your store

Place the shortcode on any page (a landing page, the shop sidebar area, a "help me choose" page):

```text
[autore82_product_advisor]
```

That's the whole setup — it uses your default provider/model and your live catalog.

## What visitors see

1. A single question: *"What are you looking for?"* with a text box.
2. They type e.g. *"a durable everyday backpack for a laptop and gym gear"*.
3. Up to **three product cards** appear: image, title, price and a one-line reason why it fits — each linking to the product page.

The AI chooses **only from your real products** (recent, in-catalog items are offered to it; invented products are impossible by design). Answers come back in the visitor's language.

## Built-in protection

- **Same-origin + honeypot + per-IP rate limiting** (5/min) — the endpoint can't be farmed by bots.
- No visitor data is stored; the request text goes to your AI provider only.
- Usage is logged to History so the cost is visible; your [monthly limits](/pro/usage-limits) apply.

:::tip Placement
Put it where indecision happens: the empty-search result page, category pages with 50+ products, or a dedicated "Gift finder" landing page you can link in campaigns.
:::

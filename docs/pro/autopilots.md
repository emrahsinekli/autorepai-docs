---
title: Autopilots
description: Schedule AI repair across your site — the AI Visibility (GEO) autopilot, accessibility autopilot, WooCommerce catalog autopilot and the weekly GEO email report.
---

# Autopilots <span className="badge badge--pro">PRO</span>

Autopilots are the "system, not a tool" part of Pro: small scheduled runs that keep your site repaired without you thinking about it. All of them respect your [monthly spend limits](/pro/usage-limits) and show a **cost estimate** when you enable them.

## AI Visibility (GEO) autopilot

On **Auto RepAI → AI Visibility**:

1. Enable the autopilot; choose **daily / twice daily / weekly**.
2. Set **posts per run** (1–10) and the **score threshold** (fix posts scoring below it).
3. Each run scans, picks the weakest posts, writes the direct answer + FAQ + schema, and logs the before → after scores on the page. Repaired posts are skipped for 30 days.

## Weekly GEO email report

Tick **"Email me a weekly GEO report"** to get the site average, the five weakest posts (with edit links) and recent autopilot activity in your inbox every week.

## Accessibility autopilot

On **Auto RepAI → Accessibility Repair**: same pattern — frequency, posts per run, threshold — repairing alt text, link text, heading order and table headers on your least accessible content. See [Accessibility](/accessibility/accessibility-scanner).

## WooCommerce catalog autopilot

On **Auto RepAI → WooCommerce AI**: rewrites thin product copy daily or weekly, skipping healthy and recently repaired products. See [WooCommerce AI](/woocommerce/product-scanner#catalog-autopilot-pro).

## GEO trend recording

Independent of the fixer, Pro records a **daily snapshot** of your site-wide GEO score (pure local math, no AI cost) and charts it on the AI Visibility page — with the 28-day delta surfacing in [reports](/pro/reports-white-label).

:::info Safety behaviors
Every autopilot stops its run on a provider error instead of retrying into your bill, honors the site-wide and per-role limits, and logs its activity where you enabled it.
:::

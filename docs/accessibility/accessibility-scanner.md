---
title: Accessibility scanner (WCAG / EAA)
description: Score posts and pages against common WCAG 2.1 criteria relevant to the European Accessibility Act — missing alt text, vague links, heading order, header-less tables. Pro repairs findings with AI, manually or on autopilot.
---

# Accessibility Repair <span className="badge badge--free">FREE scanner</span> <span className="badge badge--pro">PRO repair</span>

The **European Accessibility Act (EAA)** and **WCAG 2.1** expect your content to be usable by everyone. Auto RepAI scores each post and page against the most common content-level problems — and Pro repairs the fixable ones with AI.


![The Accessibility Repair screen](/img/screenshots/accessibility.png)
## Scan (free)

1. Go to **Auto RepAI → Accessibility Repair**.
2. Click **Scan Posts & Pages**.
3. Each item gets a **0–100 score** with its findings:

| Finding | WCAG criterion |
|---|---|
| Images missing alt text | 1.1.1 Non-text Content |
| Unhelpful alt text ("image", "photo") | 1.1.1 |
| Vague link text ("click here", "read more") | 2.4.4 Link Purpose |
| Empty links or buttons | 4.1.2 Name, Role, Value |
| Skipped heading levels (H2 → H4) | 1.3.1 Info and Relationships |
| More than one H1 | 1.3.1 |
| Tables without header cells | 1.3.1 |

4. If your site has **no document language** set, a one-click fix sets the WordPress site language option (changeable any time under Settings → General).

## Repair with AI <span className="badge badge--pro">PRO</span>

One click per post: the AI writes descriptive alt text, rewrites vague links so their destination is clear, fixes heading order, demotes extra H1s and adds table headers — then rescores. Typical result: a 56 becomes a 100.

## Accessibility autopilot <span className="badge badge--pro">PRO</span>

Enable the autopilot to keep content accessible continuously: choose daily/weekly, posts per run and a score threshold — the least accessible posts are repaired automatically and the activity is logged on the page.

:::caution Scope honestly
This is an automated **content** review — color contrast, keyboard navigation, focus states, forms and third-party widgets still need manual testing. The Pro [EAA report](/pro/reports-white-label) states this out-of-scope list explicitly, so client expectations stay correct.
:::

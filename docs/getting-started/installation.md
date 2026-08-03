---
title: Installation
description: How to install the free Auto RepAI plugin from WordPress.org, activate it, and verify everything works — step by step, with system requirements.
---

# Installation

Auto RepAI installs like any WordPress plugin and takes about two minutes.

## Requirements

| Requirement | Minimum |
|---|---|
| WordPress | 5.8 or newer |
| PHP | 7.4 or newer |
| An OpenAI account | Free to create — you pay OpenAI only for what you use |
| WooCommerce (optional) | Only for the store tools |

## Install from the WordPress dashboard (recommended)

1. In your WordPress admin, go to **Plugins → Add New Plugin**.
2. Search for **"Auto RepAI"**.
3. Click **Install Now**, then **Activate**.
4. A new **Auto RepAI** menu appears in your admin sidebar.

## Install by uploading the ZIP

1. Download the plugin ZIP from [WordPress.org](https://wordpress.org/plugins/auto-repai-ai-content-generator/).
2. Go to **Plugins → Add New Plugin → Upload Plugin**.
3. Choose the ZIP file, click **Install Now**, then **Activate**.

## Verify the installation

1. Click **Auto RepAI** in the admin sidebar — the **Dashboard** opens with usage stats (all zeros for now) and shortcuts to every tool.
2. Continue to [Connect your API key](/getting-started/api-keys) — nothing generates until a key is saved.

:::info Free vs Pro are the same plugin slug
The free plugin comes from WordPress.org. If you later upgrade to [Pro](/pro/overview), the Professional build is delivered through Freemius as an in-place upgrade — same menu, same settings, no double installation and nothing to migrate.
:::

## Updating

Updates arrive through the normal WordPress **Plugins** screen. Your settings, API keys and history are preserved across updates.

## Uninstalling

Deactivating keeps all data. **Deleting** the plugin from the Plugins screen removes everything it created: its database tables, options, scheduled tasks and post meta. Your posts, products and their content are never touched.

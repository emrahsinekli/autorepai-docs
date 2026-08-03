// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    'index',
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'getting-started/installation',
        'getting-started/api-keys',
        'getting-started/first-article',
        'getting-started/settings',
      ],
    },
    {
      type: 'category',
      label: 'Content Tools',
      items: [
        'content-tools/content-generator',
        'content-tools/image-generator',
        'content-tools/auto-repair',
        'content-tools/quick-ai-edit',
        'content-tools/bulk-content',
        'content-tools/health-report',
      ],
    },
    {
      type: 'category',
      label: 'SEO & AI Visibility (GEO)',
      items: [
        'seo-geo/ai-visibility',
        'seo-geo/llms-txt',
        'seo-geo/seo-integrations',
      ],
    },
    {
      type: 'category',
      label: 'WooCommerce',
      items: [
        'woocommerce/product-scanner',
        'woocommerce/image-alt-scanner',
      ],
    },
    {
      type: 'category',
      label: 'Accessibility',
      items: ['accessibility/accessibility-scanner'],
    },
    {
      type: 'category',
      label: 'Auto RepAI Pro',
      items: [
        'pro/overview',
        'pro/providers',
        'pro/autopilots',
        'pro/chatbot',
        'pro/knowledge-base',
        'pro/automations',
        'pro/ai-forms',
        'pro/product-advisor',
        'pro/reports-white-label',
        'pro/internal-linker',
        'pro/importers',
        'pro/lead-management',
        'pro/analysis-tools',
        'pro/workflow-studio',
        'pro/usage-limits',
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      items: [
        'reference/faq',
        'reference/troubleshooting',
        'reference/external-services',
        'reference/changelog',
      ],
    },
  ],
};

export default sidebars;

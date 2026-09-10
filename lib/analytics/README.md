# PostHog Analytics

## Setup (required from you)

1. Create a project at [PostHog](https://posthog.com) (US or EU region).
2. Copy your **Project API Key** (`phc_...`) from **Project Settings → Project API Key**.
   - Do **not** use a Personal API key (`phx_...`) - that is for the REST API only and will not capture events.
3. Add to `.env.local`:

```env
NEXT_PUBLIC_POSTHOG_KEY=phc_your_key_here
NEXT_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com
```

Use `https://eu.i.posthog.com` if your project is in the EU.

4. Add the same variables in **Vercel → Project → Settings → Environment Variables**.
5. Redeploy.

Analytics is disabled when `NEXT_PUBLIC_POSTHOG_KEY` is missing (safe for local dev).

## Recommended PostHog dashboard setup

Enable in PostHog project settings:

- **Web analytics** - pageviews, referrers, UTM campaigns
- **Session replay** - especially for `/cash-balance-calculator` funnel
- **Autocapture** - optional supplement to custom events below

## Event catalog

Every custom event includes automatic context: `page_path`, `page_category`, `funnel_stage`, and `service_name` (when applicable).

| Event | When it fires | Key properties |
|-------|---------------|----------------|
| `$pageview` | Route change (automatic) | URL, query params |
| `cta_clicked` | Primary/secondary CTA click | `cta_text`, `cta_location`, `destination` |
| `nav_clicked` | Navbar or footer link | `nav_item`, `destination`, `nav_location` |
| `service_card_clicked` | Homepage service card | `service_name`, `source`, `destination` |
| `cash_balance_promo_clicked` | Homepage promo block | `link_type`, `source`, `destination` |
| `calculator_started` | First calculator input change | `source` |
| `calculator_completed` | "Book My Free 30-Min Review" | income, age, tax savings, etc. |
| `calculator_booking_viewed` | Step 2 (Calendly) shown | `additional_tax_savings`, `lifetime_tax_savings` |
| `calculator_back_clicked` | Back to step 1 | `source` |
| `investment_tab_changed` | Strategy tab switch | `tab_name` |
| `portal_link_clicked` | External portal link | `portal_type`, `label`, `external_url` |
| `calendly_viewed` | Calendly embed in viewport | `location` |
| `mobile_menu_opened` | Mobile nav opened | `nav_location` |
| `services_menu_opened` | Desktop services dropdown | `nav_location` |
| `external_link_clicked` | External URL or mailto | `label`, `external_url`, `link_location`, `link_type` |

## Funnel stages (auto-attached)

| Stage | Pages |
|-------|-------|
| `awareness` | Homepage |
| `consideration` | Service pages, Cash Balance Plans |
| `conversion` | Cash Balance Calculator |
| `client` | Client Portal |
| `legal` | Disclosures, Privacy |

## Privacy note

Consider adding a cookie consent banner before enabling full tracking - your privacy policy mentions cookies. PostHog supports opt-in via `opt_out_capturing_by_default` if needed.

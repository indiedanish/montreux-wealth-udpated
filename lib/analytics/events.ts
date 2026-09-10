/** PostHog event names — keep in sync with your PostHog project action definitions. */
export const ANALYTICS_EVENTS = {
  /** User clicked a primary or secondary CTA */
  CTA_CLICKED: 'cta_clicked',
  /** Navbar or footer navigation */
  NAV_CLICKED: 'nav_clicked',
  /** Service card on homepage */
  SERVICE_CARD_CLICKED: 'service_card_clicked',
  /** Cash Balance promo block interaction */
  CASH_BALANCE_PROMO_CLICKED: 'cash_balance_promo_clicked',
  /** First interaction with calculator inputs */
  CALCULATOR_STARTED: 'calculator_started',
  /** User clicked continue to booking with results */
  CALCULATOR_COMPLETED: 'calculator_completed',
  /** Step 2 booking view on calculator funnel */
  CALCULATOR_BOOKING_VIEWED: 'calculator_booking_viewed',
  /** User returned to step 1 from booking */
  CALCULATOR_BACK_CLICKED: 'calculator_back_clicked',
  /** Investment management strategy tab change */
  INVESTMENT_TAB_CHANGED: 'investment_tab_changed',
  /** External client portal link clicked */
  PORTAL_LINK_CLICKED: 'portal_link_clicked',
  /** Calendly embed scrolled into view */
  CALENDLY_VIEWED: 'calendly_viewed',
  /** Mobile nav opened */
  MOBILE_MENU_OPENED: 'mobile_menu_opened',
  /** Services dropdown opened (desktop) */
  SERVICES_MENU_OPENED: 'services_menu_opened',
  /** External link or mailto clicked */
  EXTERNAL_LINK_CLICKED: 'external_link_clicked',
} as const;

export type AnalyticsEventName = (typeof ANALYTICS_EVENTS)[keyof typeof ANALYTICS_EVENTS];

export type FunnelStage = 'awareness' | 'consideration' | 'conversion' | 'client' | 'legal';

export type PageCategory =
  | 'home'
  | 'service'
  | 'campaign'
  | 'calculator'
  | 'legal'
  | 'portal';

export function getPageContext(pathname: string): {
  page_path: string;
  page_category: PageCategory;
  funnel_stage: FunnelStage;
  service_name?: string;
} {
  if (pathname === '/') {
    return { page_path: pathname, page_category: 'home', funnel_stage: 'awareness' };
  }
  if (pathname.startsWith('/cash-balance-calculator')) {
    return { page_path: pathname, page_category: 'calculator', funnel_stage: 'conversion' };
  }
  if (pathname.startsWith('/cash-balance-plans')) {
    return { page_path: pathname, page_category: 'campaign', funnel_stage: 'consideration' };
  }
  if (
    pathname.startsWith('/investment-management') ||
    pathname.startsWith('/financial-planning') ||
    pathname.startsWith('/accounting-tax')
  ) {
    const service = pathname.slice(1).replace(/-/g, '_');
    return {
      page_path: pathname,
      page_category: 'service',
      funnel_stage: 'consideration',
      service_name: service,
    };
  }
  if (pathname.startsWith('/client-portal')) {
    return { page_path: pathname, page_category: 'portal', funnel_stage: 'client' };
  }
  return { page_path: pathname, page_category: 'legal', funnel_stage: 'legal' };
}

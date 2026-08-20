/* =============================================================
   Interactive Pricing Tier Slider Card — EaseMotion
   Vanilla JS Calculator Logic
   ============================================================= */

document.addEventListener('DOMContentLoaded', () => {
  const slider = document.getElementById('usageSlider');
  const sliderFill = document.getElementById('sliderFill');
  const billingSwitch = document.getElementById('billingSwitch');

  const userCountEl = document.getElementById('userCount');
  const priceAmountEl = document.getElementById('priceAmount');
  const pricePeriodEl = document.getElementById('pricePeriod');
  const billingSubtitleEl = document.getElementById('billingSubtitle');

  const tierBadgeEl = document.getElementById('tierBadge');
  const tierNameEl = document.getElementById('tierName');

  const feat1El = document.getElementById('feat1');
  const feat2El = document.getElementById('feat2');
  const feat3El = document.getElementById('feat3');
  const feat4El = document.getElementById('feat4');

  if (!slider || !billingSwitch) return;

  /**
   * Pricing Tier Configurations
   */
  const TIER_DATA = [
    {
      maus: '10,000 MAUs',
      mauRaw: 10000,
      monthlyPrice: 19,
      tierName: 'Starter Tier',
      badgeColor: '#10b981',
      feat1: 'Up to 10,000 active users included',
      feat2: 'Basic real-time analytics & reporting',
      feat3: '99.5% Uptime SLA',
      feat4: 'Standard email support (24h response)'
    },
    {
      maus: '25,000 MAUs',
      mauRaw: 25000,
      monthlyPrice: 29,
      tierName: 'Growth Tier',
      badgeColor: '#06b6d4',
      feat1: 'Up to 25,000 active users included',
      feat2: 'Standard analytics & custom event logs',
      feat3: '99.9% Uptime SLA guarantee',
      feat4: 'Priority email & chat support'
    },
    {
      maus: '50,000 MAUs',
      mauRaw: 50000,
      monthlyPrice: 49,
      tierName: 'Pro Tier',
      badgeColor: '#34d399',
      feat1: 'Up to 50,000 active users included',
      feat2: 'Advanced real-time analytics & reporting',
      feat3: '99.9% SLA uptime guarantee',
      feat4: '24/7 Priority support channel'
    },
    {
      maus: '100,000 MAUs',
      mauRaw: 100000,
      monthlyPrice: 89,
      tierName: 'Business Tier',
      badgeColor: '#818cf8',
      feat1: 'Up to 100,000 active users included',
      feat2: 'Full raw data export & webhooks',
      feat3: '99.99% SLA uptime guarantee',
      feat4: 'Dedicated account manager'
    },
    {
      maus: '500,000 MAUs',
      mauRaw: 500000,
      monthlyPrice: 249,
      tierName: 'Enterprise Tier',
      badgeColor: '#c084fc',
      feat1: '500,000+ active users & custom scale',
      feat2: 'Custom AI insights & audit logging',
      feat3: '99.999% SLA & custom contracts',
      feat4: '1-on-1 Dedicated TAM & phone support'
    }
  ];

  /**
   * Recalculate and update DOM elements based on slider & billing state
   */
  function updatePricing() {
    const stepIndex = parseInt(slider.value, 10);
    const tier = TIER_DATA[stepIndex];
    const isAnnual = billingSwitch.checked;

    // 1. Calculate Fill Percentage
    const maxIndex = TIER_DATA.length - 1;
    const percent = (stepIndex / maxIndex) * 100;

    // Update CSS custom property for smooth track fill
    document.documentElement.style.setProperty('--fill-percent', `${percent}%`);
    if (sliderFill) {
      sliderFill.style.width = `${percent}%`;
    }

    // 2. Update Price Calculation (20% discount on annual)
    let finalPrice = tier.monthlyPrice;
    if (isAnnual) {
      finalPrice = Math.round(tier.monthlyPrice * 0.8);
    }

    // Trigger subtle bump animation on price change
    priceAmountEl.classList.add('price-update');
    setTimeout(() => {
      priceAmountEl.classList.remove('price-update');
    }, 150);

    priceAmountEl.textContent = finalPrice;
    userCountEl.textContent = tier.maus;

    // 3. Update Period & Subtitle
    if (isAnnual) {
      pricePeriodEl.textContent = '/ month';
      billingSubtitleEl.textContent = `Billed annually ($${finalPrice * 12}/yr). Save 20%!`;
    } else {
      pricePeriodEl.textContent = '/ month';
      billingSubtitleEl.textContent = 'Billed monthly. Cancel anytime.';
    }

    // 4. Update Tier Badge Name & Color
    tierNameEl.textContent = tier.tierName;
    const dot = tierBadgeEl.querySelector('.tier-badge__dot');
    if (dot) {
      dot.style.background = tier.badgeColor;
      dot.style.boxShadow = `0 0 8px ${tier.badgeColor}`;
    }

    // 5. Update Feature List Items
    feat1El.textContent = tier.feat1;
    feat2El.textContent = tier.feat2;
    feat3El.textContent = tier.feat3;
    feat4El.textContent = tier.feat4;

    // 6. Update Accessibility Attributes
    slider.setAttribute('aria-valuenow', tier.mauRaw);
    slider.setAttribute('aria-valuetext', `${tier.maus}, $${finalPrice} per month, ${tier.tierName}`);
  }

  // Event Listeners
  slider.addEventListener('input', updatePricing);
  billingSwitch.addEventListener('change', updatePricing);

  // Initialize on load
  updatePricing();
});

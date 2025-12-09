# Multi-Page Migration Analysis: RuPay & Mayura Credit Cards

## Overview

This document provides a comprehensive comparative analysis of two IDFC First Bank credit card landing pages for migration to AEM Edge Delivery Services.

**Pages Analyzed:**
1. **RuPay Credit Card** - `/credit-card/rupay-credit-card`
2. **Mayura Metal Credit Card** - `/credit-card/metal-credit-card/mayura`

---

## Page Comparison Summary

### Page 1: RuPay Credit Card

**URL:** https://www.idfcfirst.bank.in/credit-card/rupay-credit-card
**Template:** idfc-first-bank-rupay-cc-optimized-template
**Target Audience:** Mass market, UPI users, digital-first customers
**Key Theme:** UPI payments, rewards, cashback, digital convenience
**Visual Style:** Dark gradients, purple accents, modern 3D illustrations
**Images:** 86 assets

**Key Features:**
- Digital-only card (no physical card)
- UPI integration focus
- Up to 3X rewards on UPI
- Instant digital issuance
- Lifetime membership: ₹199 + GST

### Page 2: Mayura Metal Credit Card

**URL:** https://www.idfcfirst.bank.in/credit-card/metal-credit-card/mayura
**Template:** heritage-metal-cc-template
**Target Audience:** Premium customers, frequent travelers, luxury segment
**Key Theme:** Metal card, travel benefits, lounge access, golf privileges, zero forex
**Visual Style:** Dark navy/black backgrounds, gold/bronze accents, heritage motifs, premium aesthetic
**Images:** 96 assets

**Key Features:**
- Physical metal card
- 60X reward points
- Zero forex markup
- Airport lounge access
- Golf course access
- Premium joining fee structure

---

## Visual & Design Comparison

| Aspect | RuPay Card | Mayura Card |
|--------|------------|-------------|
| **Color Palette** | Black, Purple gradients (#6B46C1), Red (#9D1D27) | Navy blue, Gold/Bronze, Black, Premium textures |
| **Hero Style** | Dark gradient with 3D card stack | Dark with metal card showcase, heritage patterns |
| **Typography** | Modern, bold, digital-friendly | Elegant, sophisticated, premium feel |
| **Imagery** | 3D illustrations, modern icons | Traditional Indian motifs (peacock/Mayura), luxury visuals |
| **Background Patterns** | Clean gradients, minimal textures | Rich heritage patterns, Indian cultural elements |
| **Card Presentation** | Digital card stack (multiple cards) | Single metal card with close-up details |
| **Overall Tone** | Tech-forward, youthful, accessible | Premium, heritage, exclusive |

---

## Page Structure Comparison

### Common Sections (Both Pages)

1. ✅ **Hero Section** - Product introduction with CTA
2. ✅ **Features/Benefits Cards** - Multi-column card layout
3. ✅ **Rewards Section** - Highlight rewards program
4. ✅ **How It Works/Process Steps** - Step-by-step guide
5. ✅ **Blog Posts Section** - Related blog carousel
6. ✅ **FAQ Section** - Accordion-style Q&A
7. ✅ **Related Products** - Other credit card options
8. ✅ **Sticky CTA** - Persistent apply button
9. ✅ **Header & Footer** - Standard navigation

### Unique to RuPay Page

1. **Link to UPI Section** - Detailed UPI linking guide with phone mockups
2. **UPI Apps Banner** - Showcase of compatible UPI apps with QR codes
3. **Pay Using UPI Icons** - Simple payment method icons
4. **Testimonials** - Customer testimonials carousel
5. **UPI Partner Logos** - Large grid of UPI acceptance partners

### Unique to Mayura Page

1. **The Concept Section** - Cultural significance of "Mayura" (peacock) with heritage imagery
2. **Tier of Rewards** - Detailed reward tier breakdown (60X multiplier)
3. **Metal Card Showcase** - Physical card features and benefits
4. **Travel Benefits** - Lounge access, golf privileges, travel insurance
5. **Forex Benefits** - Zero markup on foreign transactions
6. **Fees & Charges Calculator** - Interactive calculator for fees
7. **Important Documents** - Document requirements section
8. **Welcome Benefits** - Joining offers and perks

---

## Content Structure Comparison

### Hero Section

**RuPay:**
```
- Headline: "Your UPI, FIRST RuPay Credit Card now rewards..."
- Focus: Digital convenience, UPI integration
- CTA: "Open Your First UPI Credit Card Account"
- Visual: 3D card stack with decorative graphics
```

**Mayura:**
```
- Headline: "Mayura Metal Card" with Hindi/English logo
- Focus: Premium metal card, luxury lifestyle
- CTA: "Apply Now"
- Visual: Metal card with heritage peacock motif background
```

### Features Section

**RuPay (3 columns):**
- Digital-only card
- UPI rewards
- Secure payments

**Mayura (3-4 columns):**
- 60X reward points
- Zero forex markup
- Lounge access
- Golf privileges
- Metal card benefits
- Travel insurance

### Rewards Section

**RuPay:**
- Up to 3X rewards on UPI
- 100% cashback on first 4 UPI transactions
- EMI conversion
- AutoPay feature

**Mayura:**
- 60X reward points on premium categories
- Tiered reward structure
- Luxury brand partnerships
- Reward redemption options

---

## Block Mapping for Both Pages

### Shared Block Requirements

| Section Type | Block | Variants Needed |
|--------------|-------|-----------------|
| Hero | `hero` | `hero-rupay`, `hero-mayura` |
| Feature Cards | `cards` | `cards-standard`, `cards-premium` |
| Rewards | `cards` | `cards-rewards-rupay`, `cards-rewards-mayura` |
| Steps/Process | `steps` | Reuse existing |
| Blog Carousel | `pl-swipper-blogs` | Reuse existing |
| FAQ | `faq-accordion` | Reuse existing |
| Related Products | `cards` | `cards-related-products` |
| Sticky CTA | `sticky-cta` | Reuse existing |

### RuPay-Specific Blocks

| Section | Block | Notes |
|---------|-------|-------|
| Link to UPI Guide | `steps` + `columns` | Combination block |
| UPI Apps Banner | `mid-banner` | `mid-banner-upi-apps` variant |
| UPI Icons | `columns` | Simple icon grid |
| Testimonials | `swipper-card` | Reuse existing |
| UPI Partner Logos | `columns` | Logo grid |

### Mayura-Specific Blocks

| Section | Block | Notes |
|---------|-------|-------|
| The Concept | `columns` or custom | Heritage storytelling section |
| Tier of Rewards | `tabs` or custom table | Complex reward structure |
| Metal Card Showcase | `banner` or custom | Product detail showcase |
| Travel Benefits | `cards` | Travel-focused variant |
| Fees Calculator | `form` or custom | Interactive calculator |
| Important Documents | `columns` or `cards` | Document grid |
| Welcome Benefits | `banner` or `cards` | Highlight joining perks |

---

## Common Patterns Identified

### 1. Hero Pattern
Both pages use a dark hero section with:
- Product name/logo
- Key value proposition
- Primary CTA button
- Product image (card)
- Decorative background elements

**Recommendation:** Create a flexible `hero` block with variants for both styles.

### 2. Benefits/Features Pattern
Both pages use multi-column card layouts:
- Icon/image
- Heading
- Description
- Optional CTA

**Recommendation:** Use existing `cards` block with styling variants.

### 3. Rewards Showcase Pattern
Both pages highlight rewards prominently:
- Visual representation (icons/images)
- Reward multiplier/amount
- Description of earning criteria

**Recommendation:** Create `cards-rewards` variant with flexible theming.

### 4. Process/Steps Pattern
Both pages explain "how it works":
- Sequential steps
- Icons/visuals
- Brief descriptions

**Recommendation:** Use existing `steps` block (works for both).

### 5. Social Proof Pattern
- Blog posts (both pages)
- Testimonials (RuPay only)

**Recommendation:** Use `pl-swipper-blogs` and `swipper-card` blocks.

### 6. FAQ Pattern
Standard accordion format on both pages.

**Recommendation:** Use existing `faq-accordion` block.

---

## Reusability Analysis

### High Reusability (90-100%)

These blocks can be shared with minimal customization:

1. ✅ **steps** - Works for both pages as-is
2. ✅ **faq-accordion** - Works for both pages as-is
3. ✅ **pl-swipper-blogs** - Works for both pages as-is
4. ✅ **sticky-cta** - Works for both pages as-is
5. ✅ **columns** - Works for both pages as-is
6. ✅ **header** - Shared across site
7. ✅ **footer** - Shared across site

### Medium Reusability (50-90%)

These blocks need variants but share core structure:

1. ⚠️ **hero** - Needs 2 variants (rupay, mayura)
2. ⚠️ **cards** - Needs 3-4 variants (standard, rewards-rupay, rewards-mayura, premium)
3. ⚠️ **banner** / **mid-banner** - Needs variants for different content types

### Low Reusability (< 50%)

These sections are very specific to one page:

1. ❌ **UPI linking guide** (RuPay only) - Use combination of existing blocks
2. ❌ **Heritage concept section** (Mayura only) - Custom or adapted block
3. ❌ **Fees calculator** (Mayura only) - Custom interactive block
4. ❌ **Metal card showcase** (Mayura only) - Custom product showcase

---

## Block Variant Strategy

### Variant Creation Priority

**Phase 1: Core Variants (Required for Both Pages)**
1. `hero-rupay` - Digital card theme
2. `hero-mayura` - Premium metal card theme
3. `cards-rewards` - Base rewards card layout

**Phase 2: Page-Specific Variants**
1. `cards-premium` - Premium benefits styling (Mayura)
2. `mid-banner-upi-apps` - UPI apps showcase (RuPay)
3. `banner-heritage` - Cultural heritage section (Mayura)

**Phase 3: Enhancement Variants**
1. `cards-travel` - Travel benefits (Mayura)
2. `tabs-rewards-tier` - Reward tier breakdown (Mayura)
3. Custom calculator block (Mayura)

---

## Content Authoring Templates

### Template 1: RuPay Digital Card Page

```markdown
Metadata
---
Title: Apply for RuPay Credit Card - Easy UPI Payments & Rewards
Template: default
Theme-Color: #9D1D27
---

Hero (Rupay)
| Heading | Subheading | CTA | Image |
| Your UPI, FIRST RuPay Credit Card | Get up to 3X rewards | Apply Now | [card-image] |

Cards (3-col)
| Icon | Title | Description |
| [icon1] | Digital Only | No physical card |
| [icon2] | UPI Rewards | Earn on every scan |
| [icon3] | Secure | Two-factor auth |

Cards (Rewards)
| Icon | Title | Description |
| [icon1] | 3X Rewards | Triple points on UPI |
| [icon2] | Cashback | 100% on first 4 transactions |
| [icon3] | EMI | Convert to easy EMIs |
| [icon4] | AutoPay | Recurring payments |

Steps
| Step | Icon | Title | Description |
| 1 | [icon] | Download App | Get IDFC app |
| 2 | [icon] | Complete KYC | Video verification |
| 3 | [icon] | Apply | Fill form |
| 4 | [icon] | Approval | Instant digital card |
| 5 | [icon] | Link UPI | Start using |

[Additional sections...]
```

### Template 2: Mayura Premium Card Page

```markdown
Metadata
---
Title: Get Mayura Metal Card: 0 Forex, Lounge Access & 60x Rewards
Template: default
Theme-Color: #1a237e
---

Hero (Mayura)
| Heading | Subheading | CTA | Image |
| Mayura Metal Card | Premium rewards, zero forex | Apply Now | [metal-card-image] |

Cards (Premium - 4-col)
| Icon | Title | Description |
| [icon1] | 60X Rewards | Premium spending |
| [icon2] | Zero Forex | International transactions |
| [icon3] | Lounge Access | Airport luxury |
| [icon4] | Golf Access | Premium courses |

Banner (Heritage)
| Image | Content |
| [peacock-motif] | The Mayura (peacock) represents grace and beauty in Indian culture... |

Cards (Travel Benefits)
| Icon | Title | Description |
| [icon1] | Lounge Access | Domestic & international |
| [icon2] | Golf | Premium courses |
| [icon3] | Insurance | Travel coverage |

[Additional sections...]
```

---

## Image Asset Summary

### RuPay Page
- **Total Images:** 86
- **Key Assets:** 3D illustrations, UPI app logos, modern icons, phone mockups
- **Style:** Flat design, gradients, modern 3D
- **Color Scheme:** Purple, black, red

### Mayura Page
- **Total Images:** 96
- **Key Assets:** Metal card photos, heritage patterns, peacock motifs, luxury visuals
- **Style:** Photographic, traditional patterns, premium textures
- **Color Scheme:** Navy, gold, bronze, black

### Shared Assets
- Header/footer elements
- IDFC First Bank logo
- Related product icons
- Blog post thumbnails
- Some UI icons

**Optimization Strategy:**
- Create shared asset library for common elements
- Optimize page-specific assets separately
- Use WebP format with PNG fallback
- Implement lazy loading for below-fold images

---

## Migration Strategy: Two-Page Approach

### Option A: Sequential Migration (Recommended)

**Week 1: RuPay Page**
- Simpler page structure
- Fewer custom elements
- Good proof of concept
- Test block reusability

**Week 2-3: Mayura Page**
- Leverage learnings from RuPay
- Reuse validated blocks
- Focus on premium styling
- Create Mayura-specific blocks

**Benefits:**
- Lower risk
- Iterative learning
- Clear validation points
- Better resource allocation

### Option B: Parallel Migration

**Week 1-2: Both Pages Simultaneously**
- Identify common patterns first
- Build shared blocks
- Create variants in parallel
- Test both together

**Benefits:**
- Faster overall completion
- Consistent approach
- Better pattern identification
- More efficient resource use

**Challenges:**
- Higher coordination overhead
- Risk of duplicated work
- More complex testing

---

## Unified Block Library Requirements

Based on both pages, here's the complete block library needed:

### Existing Blocks (Reuse As-Is)
1. ✅ `steps`
2. ✅ `faq-accordion`
3. ✅ `pl-swipper-blogs`
4. ✅ `sticky-cta`
5. ✅ `columns`
6. ✅ `header`
7. ✅ `footer`
8. ✅ `swipper-card`
9. ✅ `tabs`
10. ✅ `form`

### New Variants Needed
1. 🎨 `hero-rupay`
2. 🎨 `hero-mayura`
3. 🎨 `cards-rewards-rupay`
4. 🎨 `cards-rewards-mayura`
5. 🎨 `cards-premium`
6. 🎨 `mid-banner-upi-apps`
7. 🎨 `banner-heritage`

### Optional New Blocks
1. 🆕 `calculator` (for Mayura fees calculator)
2. 🆕 `product-showcase` (for metal card details)
3. 🆕 `rewards-tier` (for Mayura tier structure)

**Total Effort:**
- Variants: 7 blocks @ 4-6 hours each = 28-42 hours
- New blocks: 3 blocks @ 8-12 hours each = 24-36 hours
- **Total: 52-78 hours** (1.5-2 weeks per page)

---

## Key Differences Requiring Attention

### 1. Visual Design Language

**Challenge:** Two distinct visual styles (modern digital vs. premium heritage)
**Solution:**
- Use CSS variables for theming
- Create color scheme variants
- Separate typography styles
- Maintain consistent structure, different aesthetics

### 2. Content Complexity

**Challenge:** Mayura has more complex content (fee calculators, reward tiers)
**Solution:**
- Use `tabs` block for complex information
- Create custom calculator if needed
- Break down complex sections into simpler components

### 3. Target Audience

**Challenge:** Different audience expectations (mass market vs. premium)
**Solution:**
- Adjust tone and copy
- Different image treatments
- Appropriate CTA language
- Tailored user flows

### 4. Cultural Elements

**Challenge:** Mayura incorporates Indian heritage/cultural motifs
**Solution:**
- Custom background patterns
- Heritage-inspired decorative elements
- Cultural storytelling section
- Premium visual treatment

---

## Testing Strategy for Both Pages

### Consistency Testing
- [ ] Header/footer work identically on both
- [ ] Shared blocks render consistently
- [ ] Navigation functions the same way
- [ ] Mobile responsiveness across both

### Page-Specific Testing
- [ ] RuPay: UPI linking functionality
- [ ] RuPay: Testimonials carousel
- [ ] Mayura: Fees calculator
- [ ] Mayura: Heritage section rendering
- [ ] Mayura: Reward tier display

### Cross-Page Testing
- [ ] Blog sections look consistent
- [ ] FAQ sections function identically
- [ ] Related products link correctly
- [ ] Brand colors applied consistently
- [ ] Accessibility standards met on both

---

## Success Metrics

### Per-Page Metrics
- Page load time < 3 seconds
- Lighthouse score > 90 (Performance, Accessibility, SEO)
- All interactive elements functional
- Mobile-responsive on all devices
- Cross-browser compatibility

### Multi-Page Metrics
- Block reusability rate > 70%
- Consistent brand experience
- Shared component library established
- Efficient content authoring process
- Scalable for future credit card pages

---

## Recommendations

### 1. Start with RuPay
- Simpler structure
- Fewer custom elements
- Good learning opportunity
- Lower risk

### 2. Build Shared Library First
- Create core variants that work for both
- Establish theming system
- Set up CSS variables
- Create style guide

### 3. Document Patterns
- Document each block variant
- Create authoring guidelines
- Establish naming conventions
- Build component library

### 4. Plan for Scale
- These two pages are templates for future credit cards
- Build flexible, reusable components
- Create comprehensive documentation
- Establish governance process

### 5. Leverage AEM Crosswalk
- Use Universal Editor for in-context editing
- Store content in AEM 6.5
- Maintain existing workflows
- Train content authors on new blocks

---

## Next Steps

1. **Review & Approve** this multi-page analysis
2. **Choose Migration Approach** (Sequential vs. Parallel)
3. **Set Up Block Library** - Create shared blocks first
4. **Create Style Guide** - Document visual differences
5. **Start with RuPay** (if sequential approach)
6. **Build Core Variants** - hero, cards, rewards
7. **Test & Iterate** - Validate each page
8. **Document Process** - Create playbook for future pages

---

## Timeline Estimate

### Sequential Approach (Recommended)

**Week 1: Setup & RuPay**
- Block library setup: 2 days
- RuPay hero variant: 1 day
- RuPay cards variants: 1 day
- Content migration: 1 day

**Week 2: RuPay Completion**
- UPI sections: 2 days
- Testing & refinement: 2 days
- Documentation: 1 day

**Week 3: Mayura Start**
- Mayura hero variant: 1 day
- Premium cards variants: 1 day
- Heritage section: 2 days
- Rewards tier: 1 day

**Week 4: Mayura Completion**
- Calculator & complex sections: 2 days
- Content migration: 1 day
- Testing & refinement: 2 days

**Total: 4 weeks** (both pages complete)

### Parallel Approach

**Week 1-2: Core Development**
- Shared blocks & variants: 5 days
- Page-specific variants: 5 days

**Week 3: Content & Testing**
- Content migration both pages: 3 days
- Testing & refinement: 2 days

**Total: 3 weeks** (both pages complete)

---

**Document Version:** 1.0
**Last Updated:** 2025-12-09
**Pages Analyzed:** 2 (RuPay, Mayura)
**Total Images:** 182 assets
**Blocks Identified:** 31 existing + 7 variants + 3 optional new

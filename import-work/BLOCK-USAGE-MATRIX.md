# Block Usage Matrix & Implementation Guide

## RuPay + Mayura Credit Card Pages
**Date:** 2025-12-09

---

## Quick Reference Table

### Block Reusability Across Both Pages

| Block Name | RuPay Usage | Mayura Usage | Variant Needed | Priority |
|------------|-------------|--------------|----------------|----------|
| **hero** | Hero section | Hero section | ✅ 2 variants | 🔴 Critical |
| **cards** | 5 sections | 8 sections | ✅ 3 variants | 🔴 Critical |
| **steps** | 2 sections | 1 section | ❌ None | 🟢 Ready |
| **faq-accordion** | 1 section | 1 section | ❌ None | 🟢 Ready |
| **sticky-cta** | 1 element | 1 element | ❌ None | 🟢 Ready |
| **pl-swipper-blogs** | 1 section | 1 section | ❌ None | 🟢 Ready |
| **columns** | 3 sections | 2 sections | ❌ None | 🟢 Ready |
| **mid-banner** | 1 section | - | ✅ 1 variant | 🟡 Medium |
| **link-to-upi** | 1 section | - | ❌ None | 🟢 Ready |
| **tabs-upi-link** | Could use | - | ❌ None | 🟢 Ready |
| **swipper-card** | 1 section | - | ❌ None | 🟢 Ready |
| **banner** | - | 1-2 sections | ✅ 1 variant | 🟡 Medium |
| **tabs** | - | Could use | ❌ None | 🟢 Ready |
| **form** | - | Calculator? | ⚠️ Custom? | 🟡 Optional |

**Legend:**
- 🔴 Critical: Must have for launch
- 🟡 Medium: Needed for full feature parity
- 🟢 Ready: Use as-is, no changes
- ⚠️ Custom: May need custom block

---

## RuPay Page: Detailed Section Mapping

### Section 1: Hero
**Block:** `hero`
**Variant:** `hero-rupay`
**Status:** ⚠️ Variant needed

**Content:**
- Headline: "Your UPI, FIRST RuPay Credit Card..."
- CTA: "Open Your First UPI Credit Card Account"
- Image: 3D card stack
- Decorative graphics

**Implementation:**
```
Hero (Rupay)
---
[Heading text] | [Card image]
[CTA button]   |
[Footer text]  |
```

**Variant Requirements:**
- Dark gradient background (#000 to dark gray)
- Support for decorative rectangle/shadow images
- 3D illustration aesthetic
- Purple accent color (#6B46C1)

**Effort:** 4-6 hours

---

### Section 2: Features of FIRST Digital RuPay Credit Card
**Block:** `cards`
**Variant:** Standard (no variant needed)
**Status:** ✅ Ready

**Content:**
- 3-column card grid
- Icon + title + description per card

**Implementation:**
```
Cards (3-col)
---
[Icon 1] | [Title 1 + Description 1]
[Icon 2] | [Title 2 + Description 2]
[Icon 3] | [Title 3 + Description 3]
```

**CSS Adjustments:**
- May need to adjust spacing
- Ensure 3-column layout on desktop
- Responsive: 1 column mobile, 2 tablet, 3 desktop

**Effort:** 0-1 hour (CSS only)

---

### Section 3: Earn Rewards on UPI Transactions
**Block:** `cards`
**Variant:** `cards-rewards-rupay`
**Status:** ⚠️ Variant needed

**Content:**
- 4-column card grid
- Purple gradient background
- 3D icons
- Reward points highlighting

**Implementation:**
```
Cards (Rewards, Rupay)
---
[Icon 1] | [Title 1 + Description 1]
[Icon 2] | [Title 2 + Description 2]
[Icon 3] | [Title 3 + Description 3]
[Icon 4] | [Title 4 + Description 4]
```

**Variant Requirements:**
- Purple gradient background (#6B46C1 to #8B5CF6)
- White text on colored background
- 4-column layout (2 on tablet, 1 on mobile)
- Enhanced card shadows
- Support for 3D icon styling

**Effort:** 4-6 hours

---

### Section 4: How to Apply for FIRST Digital RuPay Credit Card
**Block:** `steps`
**Variant:** None
**Status:** ✅ Ready

**Content:**
- 5 sequential steps
- Icon + title + description per step
- Horizontal flow on desktop

**Implementation:**
```
Steps
---
Optional: title
Optional: subtitle
Optional: componentId
Optional: animation (true/false)
Optional: animationDuration (3)
[Step 1 Icon] | [Step 1 Title + Description]
[Step 2 Icon] | [Step 2 Title + Description]
...
```

**Animation:**
- Can enable IntersectionObserver animation
- Sequential fade-in with connector lines
- Duration: 3-5 seconds total

**Effort:** 0 hours (use as-is)

---

### Section 5: Step-by-Step Guide to Link RuPay Card to UPI
**Block:** `steps` + `link-to-upi` or `columns`
**Variant:** None
**Status:** ✅ Ready

**Content:**
- Multi-step UPI linking guide
- Phone mockups
- App logos
- QR code

**Implementation Option A (Steps):**
```
Steps
---
title: Link Your RuPay Credit Card to UPI Apps
[Phone mockup 1] | [Step 1 description]
[App logos] | [Step 2 description]
[QR code] | [Step 3 description]
```

**Implementation Option B (Link-to-UPI):**
```
Link-to-UPI
---
title: Link Your RuPay Credit Card
text: <rich text with steps>
image: Phone mockup
imageAlt: UPI linking guide
```

**Implementation Option C (Columns):**
```
Columns (3-col)
---
[Phone image] | [App logos] | [QR code]
[Description] | [Description] | [Description]
```

**Recommendation:** Use combination of `steps` for process flow + `columns` for visual elements

**Effort:** 1-2 hours (content structuring)

---

### Section 6: Link Your RuPay Credit Card to Top UPI Apps
**Block:** `mid-banner`
**Variant:** `mid-banner-upi-apps`
**Status:** ⚠️ Variant needed

**Content:**
- Headline
- UPI app logos (Google Pay, PhonePe, Paytm, Amazon Pay)
- QR code for download
- CTA text
- Red/maroon background

**Implementation:**
```
Mid-Banner (UPI Apps)
---
[Heading]
[CTA 1: App logos]
[CTA 2: Download QR]
[Bottom text]
[Desktop image]
[Mobile image]
```

**Variant Requirements:**
- Red/maroon background (#9D1D27)
- Flexible logo grid (4+ logos)
- QR code integration
- "Great Looking? Done for You" callout styling

**Effort:** 3-4 hours

---

### Section 7: Joining Perks of FIRST Digital RuPay Credit Card
**Block:** `cards`
**Variant:** Standard
**Status:** ✅ Ready

**Content:**
- 3-column cards
- Benefits focused on joining

**Implementation:**
```
Cards (3-col)
---
[Icon 1] | [Title 1 + Description 1]
[Icon 2] | [Title 2 + Description 2]
[Icon 3] | [Title 3 + Description 3]
```

**CSS:**
- Dark background (black)
- White text
- Similar to features section but dark theme

**Effort:** 0-1 hour (CSS only)

---

### Section 8: Pay Using UPI
**Block:** `columns`
**Variant:** None
**Status:** ✅ Ready

**Content:**
- 3-column icon grid
- Simple icons with labels

**Implementation:**
```
Columns (3-col)
---
[Icon 1] | [Icon 2] | [Icon 3]
[Label 1] | [Label 2] | [Label 3]
```

**Effort:** 0 hours (use as-is)

---

### Section 9: Testimonials
**Block:** `swipper-card` OR `cards` with testimonial-card variant
**Variant:** testimonial-card (already exists!)
**Status:** ✅ Ready

**Content:**
- Customer testimonials
- 2-column carousel
- Dark purple background
- Pagination dots

**Implementation:**
```
Cards (Testimonial-Card)
---
swipable: true
startingCard: 0
[Quote icon + text] | [Author name + rating stars]
[Quote icon + text] | [Author name + rating stars]
...
```

**Features:**
- Automatic JSON-LD schema generation
- Star rating system (yellow on active, white on inactive)
- Swiper with 1.3 slides on mobile, 3 on desktop
- Pagination dots

**Effort:** 0-1 hour (content + CSS tweaks)

---

### Section 10: Latest Blog Posts
**Block:** `pl-swipper-blogs`
**Variant:** None
**Status:** ✅ Ready

**Content:**
- 3-column blog carousel
- Image + title + excerpt + CTA per card
- Red/maroon gradient background
- Navigation dots

**Implementation:**
```
PL-Swipper-Blogs
---
[Blog 1 image] | [Title + excerpt + CTA]
[Blog 2 image] | [Title + excerpt + CTA]
[Blog 3 image] | [Title + excerpt + CTA]
```

**Effort:** 0 hours (use as-is)

---

### Section 11: Frequently Asked Questions
**Block:** `faq-accordion`
**Variant:** None
**Status:** ✅ Ready

**Content:**
- Collapsible FAQ items
- "More FAQs" / "Less FAQs" toggle
- Shows 3 by default

**Implementation:**
```
FAQ-Accordion
---
[Question 1] | [Answer 1]
[Question 2] | [Answer 2]
[Question 3] | [Answer 3]
...
```

**Features:**
- Auto-shows first 3 items
- Toggle button to expand/collapse all
- One-at-a-time accordion behavior

**Effort:** 0 hours (use as-is)

---

### Section 12: Related Credit Card Products
**Block:** `cards`
**Variant:** Standard (4-column on desktop)
**Status:** ✅ Ready

**Content:**
- Product icons + names + links
- Grid layout

**Implementation:**
```
Cards (4-col)
---
[Product 1 icon] | [Name + link]
[Product 2 icon] | [Name + link]
[Product 3 icon] | [Name + link]
[Product 4 icon] | [Name + link]
```

**CSS:**
- White background
- 4 columns on desktop
- 2 columns on tablet
- 1 column on mobile

**Effort:** 0 hours (use as-is)

---

### Section 13: UPI Acceptance Partner Logos
**Block:** `columns`
**Variant:** None
**Status:** ✅ Ready

**Content:**
- Multi-column logo grid
- Partner logos (Google Pay, PhonePe, etc.)

**Implementation:**
```
Columns (6-col)
---
[Logo 1] | [Logo 2] | [Logo 3] | [Logo 4] | [Logo 5] | [Logo 6]
[Logo 7] | [Logo 8] | [Logo 9] | [Logo 10] | [Logo 11] | [Logo 12]
...
```

**CSS:**
- Responsive grid
- Logo sizing consistent
- Light gray background

**Effort:** 0 hours (use as-is)

---

### Section 14: Sticky CTA
**Block:** `sticky-cta`
**Variant:** None
**Status:** ✅ Ready

**Content:**
- Fixed position "Apply Now" button
- Different text for mobile/desktop

**Implementation:**
```
Sticky-CTA
---
[Apply Now CTA link]
[Tracking ID: rupay-cta]
[Mobile text: Apply]
[Subtitle: if any]
```

**Features:**
- Automatically switches text on mobile/desktop
- Fixed position (bottom on mobile, right on desktop)

**Effort:** 0 hours (use as-is)

---

## RuPay Page Summary

| Status | Count | Percentage |
|--------|-------|------------|
| ✅ Ready (use as-is) | 11 sections | 79% |
| ⚠️ Variant needed | 3 sections | 21% |
| 🆕 Custom block | 0 sections | 0% |

**Variants to Create:**
1. hero-rupay (4-6 hours)
2. cards-rewards-rupay (4-6 hours)
3. mid-banner-upi-apps (3-4 hours)

**Total Variant Effort:** 11-16 hours
**Content Migration:** 8-12 hours
**Testing:** 8-12 hours
**Total for RuPay:** 27-40 hours

---

## Mayura Page: Detailed Section Mapping

### Section 1: Hero
**Block:** `hero`
**Variant:** `hero-mayura`
**Status:** ⚠️ Variant needed

**Content:**
- Headline: "Mayura Metal Card"
- Bilingual logo (Hindi/English)
- CTA: "Apply Now"
- Metal card image
- Heritage peacock motif background

**Implementation:**
```
Hero (Mayura)
---
[Logo (Hindi/Eng)] | [Metal card image]
[Heading]          |
[CTA button]       |
```

**Variant Requirements:**
- Navy blue/black background
- Gold/bronze accent colors
- Heritage pattern support (peacock motif)
- Premium typography
- Metal card photo styling

**Effort:** 4-6 hours

---

### Section 2: Features of Mayura Metal Credit Card
**Block:** `cards`
**Variant:** `cards-premium`
**Status:** ⚠️ Variant needed

**Content:**
- 4-column card grid (or 3-column)
- Premium benefits
- Luxury icons

**Implementation:**
```
Cards (Premium)
---
[Icon 1] | [60X Rewards + description]
[Icon 2] | [Zero Forex + description]
[Icon 3] | [Lounge Access + description]
[Icon 4] | [Golf Access + description]
```

**Variant Requirements:**
- Gold borders on cards
- Elegant shadows/depth
- Premium icon treatment
- Navy/gold color scheme
- Luxury aesthetic

**Effort:** 4-6 hours

---

### Section 3: The Concept (Mayura = Peacock)
**Block:** `banner` OR custom
**Variant:** `banner-heritage`
**Status:** ⚠️ Variant needed OR custom

**Content:**
- Cultural storytelling
- Peacock motif imagery
- Heritage patterns
- Premium photography

**Implementation Option A (Banner):**
```
Banner (Heritage)
---
[Heading: The Mayura]
[CTA 1: Cultural significance]
[CTA 2: Card benefits]
[Bottom text]
[Desktop image: peacock motif]
[Mobile image: peacock motif]
```

**Implementation Option B (Custom Block):**
Create new block specifically for heritage storytelling

**Variant Requirements:**
- Rich heritage patterns
- Traditional Indian aesthetic
- Premium imagery support
- Cultural storytelling layout

**Recommendation:** Try adapting banner block first. If insufficient, create custom block.

**Effort:** 6-8 hours (variant) OR 12-16 hours (custom block)

---

### Section 4: Earn 60X Reward Points
**Block:** `cards`
**Variant:** `cards-rewards-mayura`
**Status:** ⚠️ Variant needed

**Content:**
- Reward multiplier display (60X)
- Premium categories
- Luxury brand partnerships

**Implementation:**
```
Cards (Rewards, Mayura)
---
[Icon 1] | [60X on dining]
[Icon 2] | [60X on travel]
[Icon 3] | [60X on shopping]
[Icon 4] | [Redemption options]
```

**Variant Requirements:**
- Navy/gold color scheme
- 60X multiplier prominent
- Premium styling
- Luxury aesthetic

**Effort:** 4-6 hours

---

### Section 5: Tier of Rewards
**Block:** `tabs` OR custom table
**Variant:** Could be `tabs-rewards-tier`
**Status:** ⚠️ May need custom

**Content:**
- Detailed reward tier structure
- Spend thresholds
- Multiplier breakdown
- Category-wise rewards

**Implementation Option A (Tabs):**
```
Tabs
---
[Tier 1] | [Tier 1 details and rewards]
[Tier 2] | [Tier 2 details and rewards]
[Tier 3] | [Tier 3 details and rewards]
```

**Implementation Option B (Cards with swipable):**
```
Cards (Reward Tiers)
---
swipable: true
[Tier 1 card with full details]
[Tier 2 card with full details]
[Tier 3 card with full details]
```

**Recommendation:** Try tabs block first. If too complex, consider custom table block.

**Effort:** 2-4 hours (tabs) OR 8-12 hours (custom)

---

### Section 6: Zero Forex Markup
**Block:** `cards`
**Variant:** Standard OR premium
**Status:** ✅ Ready (or use premium variant from Section 2)

**Content:**
- Forex benefits
- International usage
- Travel-focused

**Implementation:**
```
Cards (3-col)
---
[Icon 1] | [Zero markup description]
[Icon 2] | [International acceptance]
[Icon 3] | [Currency conversion]
```

**Effort:** 0-1 hour

---

### Section 7: Metal Card Showcase
**Block:** `banner` OR custom
**Variant:** product-showcase (optional)
**Status:** ⚠️ May adapt banner OR create custom

**Content:**
- Metal card close-up photos
- Material details
- Weight, feel, texture descriptions
- Premium packaging

**Implementation (Banner):**
```
Banner
---
[Heading: Premium Metal Card]
[CTA 1: Material specs]
[CTA 2: Order now]
[Bottom text]
[Desktop image: card close-up]
[Mobile image: card close-up]
```

**Effort:** 2-4 hours (adapt banner) OR 8-12 hours (custom block)

---

### Section 8: Travel Benefits
**Block:** `cards`
**Variant:** `cards-premium` OR `cards-travel`
**Status:** ✅ Can use premium variant

**Content:**
- Lounge access details
- Golf course access
- Travel insurance
- Concierge services

**Implementation:**
```
Cards (Premium, 4-col)
---
[Lounge icon] | [Access details]
[Golf icon] | [Course access]
[Insurance icon] | [Coverage details]
[Concierge icon] | [Services]
```

**Effort:** 0-1 hour (use premium variant)

---

### Section 9: How to Apply
**Block:** `steps`
**Variant:** None
**Status:** ✅ Ready

**Content:**
- Application process
- Sequential steps

**Implementation:**
```
Steps
---
title: How to Apply for Mayura Card
[Step 1 icon] | [Step description]
[Step 2 icon] | [Step description]
...
```

**Effort:** 0 hours (use as-is)

---

### Section 10: Welcome Benefits
**Block:** `cards` OR `banner`
**Variant:** Standard
**Status:** ✅ Ready

**Content:**
- Joining offers
- Welcome bonuses
- First-time benefits

**Implementation:**
```
Cards (3-col)
---
[Benefit 1 icon] | [Welcome bonus description]
[Benefit 2 icon] | [Joining offer description]
[Benefit 3 icon] | [Perk description]
```

**Effort:** 0-1 hour

---

### Section 11: Fees & Charges Calculator
**Block:** `form` OR custom calculator
**Variant:** Custom widget
**Status:** ⚠️ May need custom

**Content:**
- Interactive calculator
- Fee structure display
- Input fields
- Calculation results

**Implementation Option A (Form Block):**
```
Form
---
[Input fields for amounts]
[Calculation logic]
[Results display]
```

**Implementation Option B (Custom Calculator):**
Create dedicated calculator block with JavaScript

**Recommendation:** Start with form block. If insufficient, create custom calculator widget.

**Effort:** 4-6 hours (form adaptation) OR 12-16 hours (custom calculator)

---

### Section 12: Important Documents
**Block:** `cards` (important-documents variant already exists!)
**Variant:** important-documents (✅ Already exists!)
**Status:** ✅ Ready

**Content:**
- Document icons
- Document names
- Download/view links

**Implementation:**
```
Cards (Important-Documents)
---
[Doc 1 icon] | [PAN Card + link]
[Doc 2 icon] | [Address Proof + link]
[Doc 3 icon] | [Income Proof + link]
[Doc 4 icon] | [Bank Statement + link]
```

**Features:**
- Full card is clickable
- Special styling for documents
- Icon + label + link

**Effort:** 0 hours (use as-is - this variant already exists!)

---

### Section 13: Latest Blog Posts
**Block:** `pl-swipper-blogs`
**Variant:** None
**Status:** ✅ Ready

**Content:**
- Blog carousel
- 3 blog posts

**Implementation:**
```
PL-Swipper-Blogs
---
[Blog 1 image] | [Title + excerpt + CTA]
[Blog 2 image] | [Title + excerpt + CTA]
[Blog 3 image] | [Title + excerpt + CTA]
```

**Effort:** 0 hours (use as-is)

---

### Section 14: Frequently Asked Questions
**Block:** `faq-accordion`
**Variant:** None
**Status:** ✅ Ready

**Content:**
- FAQ accordion

**Implementation:**
```
FAQ-Accordion
---
[Question 1] | [Answer 1]
[Question 2] | [Answer 2]
...
```

**Effort:** 0 hours (use as-is)

---

### Section 15: Related Credit Card Products
**Block:** `cards`
**Variant:** Standard
**Status:** ✅ Ready

**Content:**
- Related products grid

**Implementation:**
```
Cards (4-col)
---
[Product 1] | [Name + link]
[Product 2] | [Name + link]
...
```

**Effort:** 0 hours (use as-is)

---

### Section 16: Sticky CTA
**Block:** `sticky-cta`
**Variant:** None
**Status:** ✅ Ready

**Content:**
- "Apply Now" sticky button

**Implementation:**
```
Sticky-CTA
---
[Apply for Mayura Card]
[Tracking ID: mayura-cta]
[Mobile text: Apply]
```

**Effort:** 0 hours (use as-is)

---

## Mayura Page Summary

| Status | Count | Percentage |
|--------|-------|------------|
| ✅ Ready (use as-is) | 9 sections | 56% |
| ⚠️ Variant needed | 5 sections | 31% |
| 🆕 May need custom | 2 sections | 13% |

**Variants to Create:**
1. hero-mayura (4-6 hours)
2. cards-premium (4-6 hours)
3. cards-rewards-mayura (4-6 hours)
4. banner-heritage (6-8 hours OR skip if too complex)

**Optional Custom Blocks:**
5. Calculator widget (12-16 hours OR adapt form block 4-6 hours)
6. Reward tier table (8-12 hours OR use tabs 2-4 hours)

**Minimum Variant Effort:** 18-26 hours
**With Optional Customs:** 38-54 hours
**Content Migration:** 10-14 hours
**Testing:** 10-14 hours
**Total for Mayura:** 38-68 hours (depending on custom blocks)

---

## Combined Timeline

### Sequential Approach (Recommended)

**Week 1-2: RuPay (27-40 hours)**
- Days 1-2: hero-rupay, cards-rewards-rupay
- Days 3-4: mid-banner-upi-apps, content migration
- Days 5-7: Testing, refinement
- Day 8: Stakeholder review

**Week 3-4: Mayura (38-68 hours)**
- Days 9-10: hero-mayura, cards-premium
- Days 11-12: cards-rewards-mayura, banner-heritage
- Days 13-14: Content migration
- Days 15-16: Calculator/tier sections
- Days 17-18: Testing, refinement
- Day 19: Stakeholder review
- Day 20: Launch

**Total: 4 weeks (65-108 hours)**

---

## Priority Matrix

### Must-Have (P0) - Cannot launch without
- ✅ hero-rupay
- ✅ hero-mayura
- ✅ cards-rewards-rupay
- ✅ cards-rewards-mayura
- ✅ cards-premium

### Should-Have (P1) - Launch with basic version
- ⚠️ mid-banner-upi-apps (can use standard banner temporarily)
- ⚠️ banner-heritage (can use standard banner temporarily)

### Nice-to-Have (P2) - Add post-launch
- ⚠️ Calculator widget (can link to separate page)
- ⚠️ Reward tier custom display (can use simple cards)

---

## Implementation Checklists

### For Each Variant

**Planning (30 minutes):**
- [ ] Review source page section
- [ ] Identify unique styling requirements
- [ ] Document color palette
- [ ] List required CSS custom properties
- [ ] Plan responsive behavior

**CSS Development (2-4 hours):**
- [ ] Create variant CSS file (e.g., hero-rupay.css)
- [ ] Define CSS custom properties (colors, spacing)
- [ ] Style for mobile (base styles)
- [ ] Add tablet breakpoint (768px)
- [ ] Add desktop breakpoint (1024px)
- [ ] Add large desktop (1440px+)
- [ ] Test in browser DevTools

**JavaScript (if needed) (1-2 hours):**
- [ ] Review if variant needs JS changes
- [ ] Create variant-specific decoration (usually not needed)
- [ ] Test functionality

**Testing (1-2 hours):**
- [ ] Test on mobile (375px, 414px)
- [ ] Test on tablet (768px)
- [ ] Test on desktop (1024px, 1440px, 1920px)
- [ ] Test in Chrome, Safari, Firefox, Edge
- [ ] Verify responsive images
- [ ] Check accessibility (keyboard nav, screen reader)

**Documentation (30 minutes):**
- [ ] Add to block library documentation
- [ ] Create authoring example
- [ ] Screenshot for reference
- [ ] Add to style guide

---

## Quick Win Opportunities

### Use Existing Variants
The cards block already has these variants working:
- ✅ `.testimonial-card` - Perfect for RuPay testimonials
- ✅ `.important-documents` - Perfect for Mayura documents
- ✅ `.benefit-cards` - Standard feature cards

**Impact:** Saves 8-12 hours of development time!

### Reuse CSS Patterns
- Copy RuPay gradient approach for other gradient sections
- Copy Mayura premium styling for other luxury sections
- Create shared CSS custom properties file

**Impact:** Faster variant creation, consistent styling

### Start with CSS-Only Variants
- Most variants only need CSS changes
- JavaScript rarely needs modification
- Block functionality already perfect

**Impact:** Lower risk, faster delivery

---

## Success Metrics

### Code Quality
- [ ] All variants pass Lighthouse audit
- [ ] Accessibility score > 90
- [ ] Performance score > 90
- [ ] Mobile-friendly test passes

### Authoring Experience
- [ ] Content authors can use variants easily
- [ ] Block tables are simple
- [ ] Preview works in Universal Editor
- [ ] Documentation is clear

### Visual Quality
- [ ] Matches design specifications
- [ ] Brand colors consistent
- [ ] Typography on-brand
- [ ] Spacing consistent
- [ ] Responsive on all devices

### Performance
- [ ] Images optimized
- [ ] Lazy loading working
- [ ] Core Web Vitals passing
- [ ] Page load < 3 seconds

---

**Document Version:** 1.0
**Last Updated:** 2025-12-09
**Pages Covered:** RuPay + Mayura
**Blocks Mapped:** 31 blocks
**Sections Mapped:** 30 sections total
**Variants Documented:** 7 variants
**Readiness Level:** HIGH

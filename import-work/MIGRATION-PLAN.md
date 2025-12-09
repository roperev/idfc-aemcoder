# IDFC First Bank RuPay Credit Card - Migration Plan

## Project Overview

**Source URL:** https://www.idfcfirst.bank.in/credit-card/rupay-credit-card
**Project Type:** AEM Crosswalk (Universal Editor + AEM 6.5)
**Target Platform:** AEM Edge Delivery Services (EDS)
**Page Type:** Product Landing Page (Credit Card)
**Document Path:** `/credit-card/rupay-credit-card`

---

## Page Analysis Summary

### Page Metadata
- **Title:** Apply for RuPay Credit Card - Easy UPI Payments & Rewards | IDFC FIRST Bank
- **Description:** Get FIRST Digital RuPay Credit Card online instantly. Enjoy secured UPI transactions, rewards on UPI spends & cashback.
- **Keywords:** rupay cc, rupay, rupay credit card, rupay card
- **Template:** idfc-first-bank-rupay-cc-optimized-template
- **Theme Color:** #9D1D27 (Brand Red)

### Scraped Assets
- **Images Downloaded:** 86 images (83 converted from SVG/WebP/AVIF to PNG)
- **Screenshot:** Available at `/workspace/import-work/screenshot.png`
- **Cleaned HTML:** Available at `/workspace/import-work/cleaned.html`
- **Metadata JSON:** Available at `/workspace/import-work/metadata.json`

---

## Page Structure & Content Sections

Based on visual analysis of the screenshot, the page contains the following sections:

### 1. **Hero Section** (Top Section)
- Dark background with gradient
- Headline: "Your UPI, FIRST RuPay Credit Card now rewards every scan with instant cashback"
- CTA button: "Open Your First UPI Credit Card Account"
- Hero image: Credit card stack with 3D illustration
- Decorative elements: Rectangle and shadow graphics

### 2. **Features of FIRST Digital RuPay Credit Card**
- 3-column card layout
- Each card has an icon, heading, and description
- Cards highlight key product features

### 3. **Earn Rewards on UPI Transactions**
- 4-column grid layout
- 3D icons representing different features
- Purple/gradient themed background
- Highlights reward points and benefits

### 4. **How to Apply for FIRST Digital RuPay Credit Card**
- Step-by-step process visualization
- 5 circular step icons with descriptions
- Linear flow design

### 5. **Step-by-Step Guide to Link Your RuPay Credit Card to UPI**
- Multi-step interactive/animated section
- Phone mockups showing app interfaces
- QR code integration
- Demonstrates linking process with popular UPI apps (Google Pay, PhonePe, Paytm, IDFC First Bank app)

### 6. **Link Your RuPay Credit Card to Top UPI Apps**
- Red/maroon branded section
- UPI app logos (Google Pay, PhonePe, Paytm, Amazon Pay)
- QR code for download
- "Great Looking? Done for You" call-out

### 7. **Joining Perks of FIRST Digital RuPay Credit Card**
- 3-column cards layout
- Similar to features section but focused on joining benefits

### 8. **Pay Using UPI**
- 3-column icon grid
- Simple icons with labels
- Shows different payment methods

### 9. **Testimonials**
- 2-column testimonial cards
- Dark purple background
- Customer quotes with names
- Pagination dots

### 10. **Latest Blog Posts**
- 3-column blog card carousel
- Each card has image, title, description, and CTA
- Red/maroon gradient background
- Navigation dots

### 11. **Frequently Asked Questions**
- Accordion/collapsible FAQ section
- White background with clean design

### 12. **Related Products Section**
- 4-column grid of related credit card products
- Card icons with links

### 13. **UPI Acceptance Logos**
- Partner logos grid showing UPI ecosystem
- Multiple payment app logos

### 14. **Footer**
- Multi-column footer with navigation
- Red background matching brand
- Comprehensive link sections

---

## Existing Block Inventory

The project already has the following blocks available:

1. **accordion** - ✅ Perfect for FAQ section
2. **anchor-nav** - For in-page navigation
3. **banner** - For promotional banners
4. **cards** - ✅ For feature cards, blog cards, related products
5. **category-nav** - For category navigation
6. **cf-fragment** - Content fragment block
7. **columns** - ✅ For multi-column layouts
8. **embed** - For embedded content
9. **faq-accordion** - ✅ Specialized FAQ accordion
10. **footer** - ✅ For footer section
11. **form** - For forms (if needed for lead capture)
12. **fragment** - For reusable content fragments
13. **git-block** - Git integration
14. **header** - ✅ For header/navigation
15. **hero** - ✅ Perfect for hero section
16. **library-metadata** - For block library
17. **link-to-upi** - ✅ UPI-specific block (highly relevant!)
18. **mid-banner** - For mid-page banners
19. **modal** - ✅ For modal dialogs (CTA forms?)
20. **nav-list** - Navigation lists
21. **overview-rte** - Rich text editor block
22. **personal-loan-block** - Custom product block
23. **pl-blogs** - Blog listing block
24. **pl-swipper-blogs** - Blog carousel
25. **rte-block** - ✅ For rich text content
26. **steps** - ✅ Perfect for step-by-step guides
27. **sticky-cta** - ✅ For sticky CTA button
28. **swipper** - ✅ For carousels/sliders
29. **swipper-card** - Card-based carousel
30. **tabs** - ✅ For tabbed content
31. **tabs-upi-link** - ✅ UPI-specific tabs (relevant!)

---

## Block Mapping & Recommendations

### Section to Block Mapping

| Section | Recommended Block | Variant/Notes |
|---------|------------------|---------------|
| Hero Section | **hero** | Create new variant: `hero-rupay` with dark background and gradient |
| Features Cards (3-col) | **cards** | Use existing cards block with 3-column layout |
| Rewards Section (4-col) | **cards** | Create variant: `cards-rewards-grid` with purple gradient |
| How to Apply Steps | **steps** | Perfect match! Use existing steps block |
| Link to UPI Guide | **steps** + **columns** | Combination: steps for flow + columns for phone mockups |
| UPI Apps Section | **mid-banner** or **banner** | Create variant: `banner-upi-apps` with QR code |
| Joining Perks Cards | **cards** | Reuse cards block with 3-column layout |
| Pay Using UPI Icons | **columns** | Simple 3-column layout with icons |
| Testimonials | **swipper-card** or create **testimonials** | Use swipper-card or create dedicated testimonials block |
| Blog Posts Carousel | **pl-swipper-blogs** | ✅ Perfect match! Already exists |
| FAQ Section | **faq-accordion** | ✅ Perfect match! Already exists |
| Related Products | **cards** | Use cards block with product variant |
| UPI Logos Grid | **columns** | Simple multi-column logo grid |
| Sticky CTA | **sticky-cta** | ✅ Already exists! |

### New Blocks Needed

Based on the analysis, we may need to create **1-2 new blocks**:

1. **testimonials** (Optional - can use swipper-card instead)
   - Purpose: Display customer testimonials in a carousel format
   - Alternative: Use existing `swipper-card` block

2. **icon-grid** (Optional - can use columns instead)
   - Purpose: Display icon grids with labels
   - Alternative: Use existing `columns` block

### Block Variants to Create

1. **hero-rupay** (hero block variant)
   - Dark gradient background
   - Support for decorative graphics (rectangle, shadow)
   - CTA button prominent positioning

2. **cards-rewards** (cards block variant)
   - Purple/gradient background support
   - 3D icon support
   - Enhanced spacing

3. **banner-upi-apps** (banner block variant)
   - Support for multiple app logos
   - QR code integration
   - Branded background color

---

## Migration Strategy

### Phase 1: Setup & Preparation
1. ✅ Scrape page content and download assets
2. Review existing blocks and their capabilities
3. Identify which blocks can be reused vs. need variants
4. Set up document structure in EDS

### Phase 2: Content Structure (Recommended Approach for AEM Crosswalk)

Since this is an **AEM Crosswalk project** (Universal Editor + AEM 6.5), there are two migration paths:

#### Option A: Document Authoring (Recommended for Crosswalk)
- Create content in **Google Docs or Microsoft Word**
- Use block tables for structured content
- Leverage Universal Editor for in-context editing
- Push content to AEM 6.5 for storage

#### Option B: Direct Markdown (EDS Native)
- Create `.md` file with block tables
- Store in GitHub repository
- Use EDS preview/publish workflow

**Recommendation:** Use **Option A (Document Authoring)** since this is a Crosswalk project. This allows:
- In-context editing via Universal Editor
- Content storage in AEM 6.5
- Better integration with existing AEM workflows

### Phase 3: Block Implementation
1. Test existing blocks with sample content
2. Create necessary block variants (hero-rupay, cards-rewards, etc.)
3. Style blocks to match brand guidelines (colors, fonts, spacing)
4. Implement responsive design for mobile/tablet/desktop

### Phase 4: Content Migration
1. Migrate metadata (title, description, keywords)
2. Map content sections to blocks
3. Populate blocks with actual content
4. Migrate and optimize images
5. Set up internal links and CTAs

### Phase 5: Testing & Refinement
1. Test on multiple devices and screen sizes
2. Verify functionality (accordions, carousels, modals)
3. Check accessibility (WCAG compliance)
4. Performance optimization
5. SEO verification

### Phase 6: Launch
1. Final QA
2. Content approval
3. Go-live
4. Monitor analytics and performance

---

## Technical Considerations

### Brand Colors (from metadata)
- **Primary Red:** #9D1D27
- **Dark Background:** #000000
- **Purple Gradient:** (visible in rewards section)
- **White:** #FFFFFF

### Key Features to Implement
1. **Sticky CTA Button** - Use existing `sticky-cta` block
2. **Modal Forms** - Use existing `modal` block for lead capture
3. **Image Optimization** - 86 images to optimize for web delivery
4. **Lazy Loading** - Implement for images and below-fold content
5. **Animations** - CSS animations for step indicators and cards
6. **Mobile-First Design** - All blocks should be responsive

### SEO & Performance
- Rich structured data (JSON-LD) already available in metadata
- Optimize Core Web Vitals (LCP, FID, CLS)
- Implement proper heading hierarchy (H1, H2, H3)
- Add alt text to all images
- Ensure proper semantic HTML

### AEM Crosswalk Integration
- Configure Universal Editor for in-context editing
- Set up content models in AEM 6.5
- Map EDS blocks to AEM components
- Configure preview/publish workflows
- Set up content fragments for reusable content

---

## Content Authoring Template

For AEM Crosswalk Document Authoring, the content structure should follow this format:

```
Metadata
---
Title: Apply for RuPay Credit Card - Easy UPI Payments & Rewards | IDFC FIRST Bank
Description: Get FIRST Digital RuPay Credit Card online instantly...
Keywords: rupay cc, rupay, rupay credit card
Template: default
---

Hero (Rupay)
| Content | Media |
| Your UPI, FIRST RuPay Credit Card now rewards every scan with instant cashback | [credit-card-stack.png] |
| Open Your First UPI Credit Card Account [CTA Button] | |

Cards (3-col)
| Icon | Heading | Description |
| [icon1.png] | Feature 1 | Description text... |
| [icon2.png] | Feature 2 | Description text... |
| [icon3.png] | Feature 3 | Description text... |

Steps
| Step | Icon | Title | Description |
| 1 | [step1.svg] | Download App | Step description... |
| 2 | [step2.svg] | Link Card | Step description... |
...

FAQ Accordion
| Question | Answer |
| What is RuPay Credit Card? | Answer text... |
| How do I apply? | Answer text... |
...
```

---

## Image Optimization Checklist

- [ ] Convert all images to WebP format (with PNG fallback)
- [ ] Compress images (target: <100KB per image)
- [ ] Create responsive image sets (@1x, @2x)
- [ ] Add proper alt text to all images
- [ ] Implement lazy loading for below-fold images
- [ ] Use CSS for decorative graphics where possible
- [ ] Optimize SVG files (remove unnecessary metadata)

---

## Next Steps

1. **Review this migration plan** with stakeholders
2. **Start with hero block variant** as proof of concept
3. **Create content model** in AEM 6.5 for Crosswalk
4. **Set up Universal Editor** configuration
5. **Migrate one section at a time** (iterative approach)
6. **Test in preview environment** after each section
7. **Gather feedback** and iterate

---

## Estimated Effort

| Phase | Effort (Hours) | Notes |
|-------|----------------|-------|
| Block Variants Creation | 8-12 | hero-rupay, cards-rewards, banner-upi-apps |
| Content Migration | 16-20 | All sections, images, copy |
| Styling & Responsive Design | 12-16 | Match brand guidelines |
| AEM Crosswalk Setup | 8-12 | Universal Editor, content models |
| Testing & QA | 8-12 | Cross-browser, devices, accessibility |
| **Total** | **52-72 hours** | ~1.5-2 weeks for one developer |

---

## Risk Assessment

| Risk | Impact | Mitigation |
|------|--------|------------|
| Complex animations may not translate well | Medium | Use CSS animations, progressive enhancement |
| Many images to optimize | Low | Batch processing with Sharp/ImageMagick |
| AEM Crosswalk learning curve | Medium | Follow AEM documentation, start simple |
| Responsive design complexity | Medium | Mobile-first approach, test early |
| Performance with 86 images | High | Implement lazy loading, optimize images |

---

## Success Criteria

1. ✅ All content sections migrated accurately
2. ✅ Page loads in <3 seconds (LCP)
3. ✅ Mobile-responsive (works on all screen sizes)
4. ✅ Accessibility score >90 (Lighthouse)
5. ✅ SEO score >90 (Lighthouse)
6. ✅ All interactive elements working (accordions, carousels, CTAs)
7. ✅ Brand guidelines followed (colors, fonts, spacing)
8. ✅ Universal Editor fully functional for content editing

---

## Contact & Support

For questions about this migration plan, contact:
- AEM EDS Documentation: https://www.aem.live/docs/
- AEM Crosswalk Guide: https://www.aem.live/developer/universal-editor

---

**Document Version:** 1.0
**Last Updated:** 2025-12-09
**Author:** Migration Analysis System

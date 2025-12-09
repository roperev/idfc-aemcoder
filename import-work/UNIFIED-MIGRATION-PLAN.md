# Unified Migration Plan: RuPay & Mayura Credit Card Pages

## Executive Summary

This migration plan covers two IDFC First Bank credit card landing pages for migration to AEM Edge Delivery Services (EDS) with AEM Crosswalk integration.

**Pages:**
1. RuPay Credit Card (Digital/UPI focused) - 86 images
2. Mayura Metal Credit Card (Premium/Travel focused) - 96 images

**Approach:** Sequential migration (RuPay first, then Mayura)
**Timeline:** 4 weeks total
**Block Reusability:** 70%+ across both pages
**Effort:** 90-110 hours total

---

## Migration Goals

### Primary Goals
1. ✅ Migrate both pages to AEM EDS with full functionality
2. ✅ Maintain brand consistency while allowing page-specific styling
3. ✅ Create reusable block library for future credit card pages
4. ✅ Integrate with AEM Crosswalk (Universal Editor + AEM 6.5)
5. ✅ Achieve excellent performance (Lighthouse score > 90)

### Secondary Goals
1. ✅ Establish content authoring templates
2. ✅ Document block variants and usage patterns
3. ✅ Optimize images and assets
4. ✅ Ensure mobile-first responsive design
5. ✅ Set up scalable architecture for future pages

---

## Project Phases

### Phase 1: Setup & Foundation (Week 1, Days 1-2)

#### Tasks:
1. **Environment Setup**
   - Configure AEM Crosswalk Universal Editor
   - Set up EDS preview environment
   - Configure AEM 6.5 content storage
   - Set up Git repository structure

2. **Block Library Audit**
   - Review 31 existing blocks
   - Identify reusable blocks (steps, faq-accordion, etc.)
   - Document block capabilities
   - Create block variant naming convention

3. **Style System Setup**
   - Create CSS variable system for theming
   - Define color palettes (RuPay, Mayura)
   - Set up typography system
   - Create spacing/layout tokens

4. **Asset Organization**
   - Organize 182 images (86 RuPay + 96 Mayura)
   - Identify shared assets
   - Create asset naming convention
   - Set up image optimization pipeline

**Deliverables:**
- ✅ AEM Crosswalk configured
- ✅ Block library documented
- ✅ Style guide created
- ✅ Assets organized

**Effort:** 16 hours

---

### Phase 2: RuPay Page Migration (Week 1-2, Days 3-10)

#### 2A: Core Block Variants (Days 3-4)

**Create Hero Variant: `hero-rupay`**
- Dark gradient background
- 3D card stack image support
- Decorative graphics (rectangle, shadow)
- Modern typography
- Prominent CTA button

**Create Cards Variant: `cards-rewards-rupay`**
- Purple gradient background (#6B46C1 to #8B5CF6)
- 3D icon support
- 4-column grid layout
- Enhanced spacing
- White text on colored background

**Create Banner Variant: `mid-banner-upi-apps`**
- Red branded background (#9D1D27)
- Multiple app logo support
- QR code integration
- Flex layout for logos + content

**Deliverables:**
- ✅ 3 block variants created
- ✅ CSS styling complete
- ✅ JavaScript decoration working
- ✅ Mobile responsive

**Effort:** 24 hours

#### 2B: RuPay Content Migration (Days 5-6)

**Sections to Migrate:**
1. Hero section → `hero-rupay`
2. Features cards → `cards` (3-column)
3. Rewards section → `cards-rewards-rupay`
4. How to Apply → `steps`
5. Link to UPI guide → `steps` + `columns`
6. UPI apps banner → `mid-banner-upi-apps`
7. Joining perks → `cards`
8. Payment methods → `columns`
9. Testimonials → `swipper-card`
10. Blog posts → `pl-swipper-blogs`
11. FAQ → `faq-accordion`
12. Related products → `cards`
13. Partner logos → `columns`
14. Sticky CTA → `sticky-cta`

**Content Migration Tasks:**
- Create Document Authoring content (Google Docs/Word)
- Build block tables for each section
- Migrate copy and images
- Set up internal links
- Configure metadata
- Test in Universal Editor

**Deliverables:**
- ✅ All 14 sections migrated
- ✅ Content authored in Document Authoring
- ✅ Images optimized and uploaded
- ✅ Universal Editor functional

**Effort:** 16 hours

#### 2C: RuPay Testing & Refinement (Days 7-8)

**Testing Checklist:**
- [ ] Desktop layout (1920px, 1440px, 1024px)
- [ ] Tablet layout (768px)
- [ ] Mobile layout (375px, 414px)
- [ ] All CTAs working
- [ ] Forms submitting (if applicable)
- [ ] Images loading correctly
- [ ] Lazy loading working
- [ ] Accordions expanding/collapsing
- [ ] Carousels sliding
- [ ] Sticky CTA appearing on scroll
- [ ] Cross-browser (Chrome, Safari, Firefox, Edge)

**Performance Testing:**
- [ ] Lighthouse Performance > 90
- [ ] Lighthouse Accessibility > 90
- [ ] Lighthouse SEO > 90
- [ ] Core Web Vitals passing
- [ ] Image optimization verified

**Deliverables:**
- ✅ RuPay page fully functional
- ✅ All tests passing
- ✅ Performance optimized
- ✅ Ready for stakeholder review

**Effort:** 16 hours

---

### Phase 3: Mayura Page Migration (Week 3, Days 11-15)

#### 3A: Mayura Block Variants (Days 11-12)

**Create Hero Variant: `hero-mayura`**
- Navy/dark background
- Gold/bronze accent colors
- Heritage pattern support
- Metal card image showcase
- Bilingual logo support (Hindi/English)
- Premium typography

**Create Cards Variant: `cards-premium`**
- Premium styling (gold borders, elegant shadows)
- Luxury icon support
- Flexible column layout (3-4 columns)
- Premium background textures

**Create Cards Variant: `cards-rewards-mayura`**
- Dark navy background
- Gold accent highlights
- 60X reward multiplier display
- Tier-based layout support

**Create Banner Variant: `banner-heritage`**
- Heritage pattern backgrounds
- Peacock motif support
- Cultural storytelling layout
- Premium visual treatment

**Deliverables:**
- ✅ 4 block variants created
- ✅ Premium styling applied
- ✅ Heritage elements integrated
- ✅ Mobile responsive

**Effort:** 24 hours

#### 3B: Mayura Content Migration (Days 13-14)

**Sections to Migrate:**
1. Hero section → `hero-mayura`
2. Features cards → `cards-premium` (4-column)
3. The Concept section → `banner-heritage` or custom
4. Earn 60X rewards → `cards-rewards-mayura`
5. Tier of rewards → `tabs` or custom table
6. Zero forex section → `cards`
7. Metal card showcase → `banner` or custom
8. Travel benefits → `cards`
9. How to Apply → `steps`
10. Welcome benefits → `cards` or `banner`
11. Fees calculator → `form` or custom widget
12. Important documents → `columns` or `cards`
13. Blog posts → `pl-swipper-blogs`
14. FAQ → `faq-accordion`
15. Related products → `cards`
16. Sticky CTA → `sticky-cta`

**Complex Sections:**
- **Fees Calculator:** May need custom JavaScript widget
- **Reward Tiers:** Use `tabs` block or custom table
- **Heritage Concept:** Custom layout with rich imagery

**Deliverables:**
- ✅ All 16 sections migrated
- ✅ Premium styling applied
- ✅ Complex sections functional
- ✅ Universal Editor working

**Effort:** 20 hours

#### 3C: Mayura Testing & Refinement (Day 15)

**Testing Checklist:**
- [ ] All items from RuPay testing checklist
- [ ] Heritage patterns rendering correctly
- [ ] Premium styling consistent
- [ ] Gold accents visible
- [ ] Fees calculator working (if implemented)
- [ ] Reward tier display correct
- [ ] Metal card images optimized

**Deliverables:**
- ✅ Mayura page fully functional
- ✅ All tests passing
- ✅ Premium aesthetic achieved
- ✅ Ready for stakeholder review

**Effort:** 8 hours

---

### Phase 4: Cross-Page Integration & Testing (Week 4, Days 16-18)

#### 4A: Shared Component Validation (Day 16)

**Validate Shared Blocks:**
- [ ] `steps` works identically on both pages
- [ ] `faq-accordion` functions the same
- [ ] `pl-swipper-blogs` renders consistently
- [ ] `sticky-cta` appears correctly on both
- [ ] `header` and `footer` work properly
- [ ] Related products section consistent

**Test Navigation:**
- [ ] Cross-page links working
- [ ] Breadcrumbs correct (Mayura)
- [ ] Internal links to other products
- [ ] Blog links opening correctly

**Deliverables:**
- ✅ All shared components validated
- ✅ Navigation working across pages
- ✅ Consistency verified

**Effort:** 8 hours

#### 4B: Performance Optimization (Day 17)

**Image Optimization:**
- [ ] Convert all images to WebP (with PNG fallback)
- [ ] Compress images to < 100KB each
- [ ] Create responsive image sets
- [ ] Implement lazy loading
- [ ] Test image loading performance

**Code Optimization:**
- [ ] Minify CSS
- [ ] Minimize JavaScript
- [ ] Remove unused code
- [ ] Optimize font loading
- [ ] Test Core Web Vitals

**Deliverables:**
- ✅ All images optimized
- ✅ Code optimized
- ✅ Performance targets met
- ✅ Core Web Vitals passing

**Effort:** 8 hours

#### 4C: Documentation & Training (Day 18)

**Documentation to Create:**
1. **Block Library Guide**
   - All variants documented
   - Usage examples
   - Do's and don'ts
   - Code samples

2. **Content Authoring Guide**
   - Block table templates
   - Image guidelines
   - Content structure examples
   - Best practices

3. **Style Guide**
   - Color palettes for each page type
   - Typography rules
   - Spacing guidelines
   - Component patterns

4. **Universal Editor Guide**
   - How to edit content
   - Block configuration
   - Publishing workflow
   - Troubleshooting

**Training Materials:**
- Video walkthroughs (optional)
- Screenshot guides
- Step-by-step tutorials
- FAQ for content authors

**Deliverables:**
- ✅ Complete documentation
- ✅ Training materials ready
- ✅ Content authors trained
- ✅ Handoff complete

**Effort:** 8 hours

---

### Phase 5: Launch & Monitoring (Week 4, Days 19-20)

#### 5A: Pre-Launch Checklist (Day 19)

**Final QA:**
- [ ] Both pages fully functional
- [ ] All links working
- [ ] Forms submitting correctly
- [ ] Analytics tracking implemented
- [ ] SEO metadata correct
- [ ] Social sharing working
- [ ] Print styles tested (if needed)

**Stakeholder Review:**
- [ ] Business stakeholders approve
- [ ] Marketing team approves
- [ ] Legal/compliance review (if needed)
- [ ] Content team approves

**Technical Checklist:**
- [ ] DNS configured (if needed)
- [ ] SSL certificates valid
- [ ] CDN configured
- [ ] Monitoring set up
- [ ] Error tracking enabled

**Deliverables:**
- ✅ Pre-launch checklist complete
- ✅ All approvals obtained
- ✅ Ready for launch

**Effort:** 8 hours

#### 5B: Launch & Monitor (Day 20)

**Launch Process:**
1. Publish RuPay page to production
2. Publish Mayura page to production
3. Verify both pages live
4. Test in production environment
5. Monitor analytics
6. Watch for errors

**Post-Launch Monitoring:**
- Monitor performance metrics
- Check error logs
- Review user analytics
- Gather feedback
- Address any issues immediately

**Deliverables:**
- ✅ Both pages live in production
- ✅ Monitoring active
- ✅ No critical issues
- ✅ Migration complete

**Effort:** 8 hours

---

## Block Library Summary

### Existing Blocks (No Changes)
1. `steps` - ✅ Perfect for both pages
2. `faq-accordion` - ✅ FAQ sections
3. `pl-swipper-blogs` - ✅ Blog carousels
4. `sticky-cta` - ✅ Apply buttons
5. `columns` - ✅ Multi-column layouts
6. `header` - ✅ Site header
7. `footer` - ✅ Site footer
8. `swipper-card` - ✅ Testimonials (RuPay)
9. `tabs` - ✅ Reward tiers (Mayura)
10. `form` - ✅ Forms (if needed)

### New Variants (To Create)
1. `hero-rupay` - Digital card hero
2. `hero-mayura` - Premium metal card hero
3. `cards-rewards-rupay` - Purple gradient rewards
4. `cards-rewards-mayura` - Premium rewards display
5. `cards-premium` - Premium feature cards
6. `mid-banner-upi-apps` - UPI apps showcase
7. `banner-heritage` - Cultural heritage section

### Optional Custom Blocks
1. `calculator` - Fees calculator (Mayura) - If standard `form` block insufficient
2. `product-showcase` - Metal card details (Mayura) - If standard `banner` insufficient
3. `rewards-tier-table` - Detailed tier structure (Mayura) - If standard `tabs` insufficient

**Recommendation:** Start with variants only. Create custom blocks only if truly needed.

---

## Resource Requirements

### Team Composition

**Developer (Frontend)**
- Block variant development
- CSS/JavaScript implementation
- Responsive design
- Performance optimization
- Estimated: 80-90 hours

**Content Author**
- Content migration
- Document Authoring
- Universal Editor testing
- Content QA
- Estimated: 20-30 hours

**Designer (Optional)**
- Style guide creation
- Visual QA
- Premium styling review
- Brand compliance
- Estimated: 10-15 hours

**QA Tester**
- Functional testing
- Cross-browser testing
- Performance testing
- Accessibility testing
- Estimated: 15-20 hours

**Project Manager**
- Coordination
- Stakeholder communication
- Timeline management
- Risk management
- Estimated: 10-15 hours

**Total Effort:** 135-170 hours across team

---

## Risk Assessment & Mitigation

### High-Priority Risks

| Risk | Impact | Probability | Mitigation |
|------|--------|-------------|------------|
| Complex sections exceed block capabilities | High | Medium | Create custom blocks or use combinations |
| Performance with 182 images | High | High | Aggressive optimization, lazy loading, WebP |
| AEM Crosswalk learning curve | Medium | High | Early training, documentation, support |
| Premium styling difficult to achieve | Medium | Medium | Designer involvement, CSS variables |
| Fees calculator complexity | Medium | Low | Use existing form block or create custom |

### Medium-Priority Risks

| Risk | Impact | Probability | Mitigation |
|------|--------|-------------|------------|
| Responsive design issues | Medium | Medium | Mobile-first approach, thorough testing |
| Heritage patterns not rendering well | Medium | Low | Image optimization, fallback patterns |
| Block variant code duplication | Low | Medium | Abstract common code, use mixins |
| Content author training needed | Medium | High | Create comprehensive guides |
| Timeline slippage | Medium | Medium | Buffer time, prioritize ruthlessly |

---

## Success Criteria

### Page-Level Metrics

**RuPay Page:**
- [ ] All 14 sections migrated and functional
- [ ] Lighthouse Performance > 90
- [ ] Lighthouse Accessibility > 90
- [ ] Lighthouse SEO > 90
- [ ] Page load time < 3 seconds
- [ ] Mobile-responsive
- [ ] UPI features working

**Mayura Page:**
- [ ] All 16 sections migrated and functional
- [ ] Lighthouse Performance > 90
- [ ] Lighthouse Accessibility > 90
- [ ] Lighthouse SEO > 90
- [ ] Page load time < 3 seconds
- [ ] Mobile-responsive
- [ ] Premium aesthetic achieved

### Project-Level Metrics

- [ ] Block reusability > 70%
- [ ] Both pages launched within 4 weeks
- [ ] No critical post-launch issues
- [ ] Content authors trained and productive
- [ ] Documentation complete
- [ ] Stakeholder satisfaction high

### Technical Metrics

- [ ] 7 block variants created
- [ ] 182 images optimized
- [ ] All cross-browser tests passing
- [ ] All accessibility tests passing
- [ ] Universal Editor fully functional
- [ ] AEM 6.5 integration working

---

## Budget Estimate

### Development Costs

| Resource | Hours | Rate (Example) | Cost |
|----------|-------|----------------|------|
| Frontend Developer | 85 | $100/hr | $8,500 |
| Content Author | 25 | $75/hr | $1,875 |
| Designer | 12 | $90/hr | $1,080 |
| QA Tester | 18 | $80/hr | $1,440 |
| Project Manager | 12 | $110/hr | $1,320 |
| **Total** | **152** | | **$14,215** |

### Infrastructure Costs

| Item | Monthly | Notes |
|------|---------|-------|
| AEM EDS Hosting | Varies | Contact Adobe |
| CDN (if separate) | $50-200 | Cloudflare, AWS CloudFront |
| Monitoring Tools | $0-100 | Datadog, New Relic |
| **Subtotal** | **$50-300/mo** | |

**Note:** Rates are examples. Adjust based on your region and team structure.

---

## Timeline (Detailed)

### Week 1: RuPay Foundation
- **Mon-Tue:** Setup & block variants
- **Wed-Thu:** RuPay content migration
- **Fri:** RuPay testing begins

### Week 2: RuPay Completion
- **Mon-Tue:** RuPay testing & refinement
- **Wed:** RuPay stakeholder review
- **Thu-Fri:** Mayura block variants start

### Week 3: Mayura Migration
- **Mon-Tue:** Mayura block variants complete
- **Wed-Thu:** Mayura content migration
- **Fri:** Mayura testing begins

### Week 4: Completion & Launch
- **Mon:** Mayura testing & refinement
- **Tue:** Cross-page validation
- **Wed:** Performance optimization
- **Thu:** Documentation & training
- **Fri:** Final QA & launch

**Total: 20 business days (4 weeks)**

---

## Communication Plan

### Daily Standups (Optional)
- 15 minutes
- Progress updates
- Blockers discussion
- Daily goals

### Weekly Status Reports
- Progress vs. plan
- Completed deliverables
- Upcoming milestones
- Risks and issues

### Key Stakeholder Touchpoints
- Week 1 End: RuPay demo
- Week 2 Mid: RuPay review
- Week 3 End: Mayura demo
- Week 4 Mid: Final review
- Week 4 End: Launch

---

## Post-Launch Support

### Week 1 Post-Launch
- Daily monitoring
- Rapid issue resolution
- User feedback collection
- Analytics review

### Week 2-4 Post-Launch
- Weekly monitoring
- Content author support
- Minor adjustments
- Performance tuning

### Ongoing
- Monthly performance reviews
- Quarterly content updates
- Block library enhancements
- Additional page migrations

---

## Scaling to Additional Pages

### Future Credit Card Pages

This migration establishes patterns for future credit card pages:

1. **Use Existing Variants**
   - `hero-rupay` for digital cards
   - `hero-mayura` for premium cards
   - Mix and match other variants

2. **Quick Migration Process**
   - Reuse block library
   - Follow authoring templates
   - Apply established patterns
   - Much faster than these first two

3. **Estimated Future Page**
   - Migration: 1-2 weeks per page
   - Less variant creation needed
   - Streamlined process
   - Lower cost

---

## Conclusion

This unified migration plan provides a structured approach to migrating both RuPay and Mayura credit card pages to AEM Edge Delivery Services. By:

1. ✅ Starting with the simpler RuPay page
2. ✅ Building a reusable block library
3. ✅ Creating flexible variants for different styles
4. ✅ Following a sequential, low-risk approach
5. ✅ Documenting patterns for future use

We can successfully migrate both pages within 4 weeks while establishing a scalable architecture for future credit card pages.

**Next Step:** Review and approve this plan to begin Phase 1.

---

**Document Version:** 1.0
**Last Updated:** 2025-12-09
**Project Duration:** 4 weeks (20 business days)
**Total Effort:** 135-170 hours
**Pages Covered:** 2 (RuPay, Mayura)
**Block Variants:** 7 new variants
**Success Rate Projection:** High (based on 70%+ block reusability)

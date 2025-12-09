# Content Structure & Authoring Guide

## IDFC First Bank RuPay Credit Card Page
**Document Path:** `/credit-card/rupay-credit-card`

---

## Page Metadata

```yaml
Title: Apply for RuPay Credit Card - Easy UPI Payments & Rewards | IDFC FIRST Bank
Description: Get FIRST Digital RuPay Credit Card online instantly. Enjoy secured UPI transactions, rewards on UPI spends & cashback. Apply for RuPay Credit Card today!
Keywords: rupay cc, rupay, rupay credit card, rupay card
Template: default
Theme-Color: #9D1D27
Canonical: https://www.idfcfirst.bank.in/credit-card/rupay-credit-card
```

---

## Section-by-Section Content Map

### 1. Hero Section

**Block:** `hero` (rupay variant)
**Background:** Dark gradient (#000 to dark gray)
**Layout:** Text left, Image right

**Content:**
- **Headline:** Your UPI, FIRST RuPay Credit Card now rewards every scan with instant cashback
- **Subheadline:** Get up to 3X reward points on UPI transactions
- **CTA Button:** Open Your First UPI Credit Card Account
- **Hero Image:** Credit card stack (3D illustration)
- **Decorative Elements:** Rectangle and shadow graphics

**Authoring Structure:**
```
Hero (Rupay)
---
Headline: Your UPI, FIRST RuPay Credit Card now rewards every scan with instant cashback
Subheadline: Get up to 3X reward points on UPI transactions
CTA Text: Open Your First UPI Credit Card Account
CTA Link: #apply-form
Background: dark-gradient
Image: ./images/b49774528df0486d039cf73eb9aa248e.png
Decorative 1: ./images/99f18fbf740ca8520f44cd79967669e7.png
Decorative 2: ./images/631b61eb29cb230d80b86e075a99eeba.png
```

---

### 2. Features of FIRST Digital RuPay Credit Card

**Block:** `cards` (3-column)
**Background:** White
**Layout:** 3 cards in a row

**Content:**
```
Cards (3-col)
---
Card 1:
- Icon: ./images/faffd87a0bf7dc870643ab1433403f51.png
- Title: Digital-Only Card
- Description: No physical card required. Instant activation.

Card 2:
- Icon: ./images/2cda81c8dd2160d650b373e52ebe3aa6.png
- Title: UPI Rewards
- Description: Earn reward points on every UPI transaction.

Card 3:
- Icon: ./images/bfd319a73c251fb7cb153ee50667657d.png
- Title: Secure Payments
- Description: Two-factor authentication and real-time alerts.
```

---

### 3. Earn Rewards on UPI Transactions

**Block:** `cards` (rewards variant - 4-column)
**Background:** Purple gradient
**Layout:** 4 cards in grid

**Content:**
```
Cards (Rewards)
---
Card 1:
- Icon: ./images/5065bfac834b7b8b6a6278d6ffa70719.png (3D coin icon)
- Title: Up to 3X Rewards
- Description: Earn triple reward points on UPI spends

Card 2:
- Icon: ./images/324995a348ea12499018b72f5b3cbbcb.png
- Title: 100% Cashback
- Description: On first 4 UPI transactions within 15 days

Card 3:
- Icon: ./images/452668471abc7dfe8c4445fefd27500a.png
- Title: EMI Conversion
- Description: Convert large UPI transactions to easy EMIs

Card 4:
- Icon: ./images/c071e2b463fcc49f0fbcaf19ca79fb98.png
- Title: AutoPay Feature
- Description: Automate recurring UPI payments
```

**Design Notes:**
- Purple gradient background (#6B46C1 to #8B5CF6)
- 3D illustrated icons
- Card shadow effects
- White text on colored background

---

### 4. How to Apply for FIRST Digital RuPay Credit Card

**Block:** `steps`
**Background:** White
**Layout:** Horizontal step flow

**Content:**
```
Steps
---
Step 1:
- Icon: ./images/dcab8830c0c8c48c0cfeae64944fe7f1.png
- Title: Download IDFC FIRST Bank App
- Description: Get the app from Play Store or App Store

Step 2:
- Icon: ./images/053852fe2ea413c28e28cd0e95accdcc.png
- Title: Complete KYC
- Description: Verify your identity with video KYC

Step 3:
- Icon: ./images/635eba8da3ba9f803382737672e8c829.png
- Title: Apply for Credit Card
- Description: Fill simple application form

Step 4:
- Icon: ./images/34f6a645095fe27875bdfdd49d66d35d.png
- Title: Get Instant Approval
- Description: Receive digital card instantly

Step 5:
- Icon: ./images/f8f6fdefa8dbfb227646886d664d30a2.png
- Title: Link to UPI
- Description: Start using with your favorite UPI app
```

---

### 5. Step-by-Step Guide to Link RuPay Card to UPI

**Block:** `steps` + `columns` (complex layout)
**Background:** Light gray
**Layout:** Multi-step with phone mockups

**Content Structure:**
```
Section Title: Link Your RuPay Credit Card to Top UPI Apps Just Like This

Step 1: Grant UPI Access
- Image: ./images/c67dd3dda921fc124c71dd2e70ddf55d.png (IDFC app)
- Title: Grant UPI access on IDFC FIRST Bank app
- Instructions: Open app → Settings → Enable UPI

Step 2: Select UPI App
- Images: Multiple app logos
  - Google Pay: ./images/2d5b19fbd25517bdf64222a3bc248655.png
  - PhonePe: ./images/8b5785ddb69cc3b8fa3e5d4f2618c5a1.png
  - Paytm: ./images/24d30baa3078a4490cbafe92c0008793.png
- Title: Select your preferred UPI app
- Instructions: Choose from popular UPI apps

Step 3: Scan QR Code
- Image: ./images/623b621f8985d5003e9fc6448a65fc28.png (QR code)
- Title: Scan QR code to link
- Instructions: Use UPI app to scan and link
```

---

### 6. Link to Top UPI Apps (Banner Section)

**Block:** `mid-banner` (upi-apps variant)
**Background:** Red/Maroon (#9D1D27)
**Layout:** Content + App logos + QR code

**Content:**
```
Mid-Banner (UPI Apps)
---
Headline: Link Your RuPay Credit Card to Top UPI Apps Just Like This
Subheadline: Use with any UPI app you love

App Logos:
- Google Pay
- PhonePe
- Paytm
- Amazon Pay

QR Code: [Download app QR]
Text: Great Looking? Done for You.
CTA: Download Now
```

---

### 7. Joining Perks

**Block:** `cards` (3-column)
**Background:** Black
**Layout:** 3 cards in a row

**Content:**
```
Cards (3-col)
---
Section Title: Joining Perks of FIRST Digital RuPay Credit Card

Card 1:
- Icon: [icon image]
- Title: Lifetime Free Membership
- Description: No annual fees, no joining fees

Card 2:
- Icon: [icon image]
- Title: Instant Digital Issuance
- Description: Get card details within minutes

Card 3:
- Icon: [icon image]
- Title: Shared Credit Limit
- Description: Uses your existing IDFC credit card limit
```

---

### 8. Pay Using UPI

**Block:** `columns` (3-column icon grid)
**Background:** White
**Layout:** Simple icon + label grid

**Content:**
```
Columns (Icons)
---
Title: Pay Using UPI

Column 1:
- Icon: ./images/daf0a4ca5152bea2283a083ea3b6587d.png
- Label: Scan & Pay

Column 2:
- Icon: ./images/c89b05564635dc280fb6178641c12f75.png
- Label: Enter UPI ID

Column 3:
- Icon: ./images/f188c7871d81e908bccfd5d70b3948f2.png
- Label: Select & Pay
```

---

### 9. Testimonials

**Block:** `swipper-card`
**Background:** Dark purple
**Layout:** 2-column carousel

**Content:**
```
Swipper-Card (Testimonials)
---
Section Title: Testimonials

Testimonial 1:
- Quote: "The RuPay credit card on UPI is a game-changer. No more carrying physical cards!"
- Author: Rajesh Kumar
- Location: Mumbai
- Avatar: [optional]

Testimonial 2:
- Quote: "Earning rewards on UPI payments is fantastic. I use it for all my daily transactions."
- Author: Priya Sharma
- Location: Delhi
- Avatar: [optional]

[Additional testimonials as needed]
```

**Design:**
- Purple gradient background
- Quote marks icon: ./images/6fbd6f7d616b446436edfdd95cf384a6.png
- White text
- Navigation dots at bottom

---

### 10. Latest Blog Posts

**Block:** `pl-swipper-blogs`
**Background:** Red/Maroon gradient
**Layout:** 3-card carousel

**Content:**
```
PL-Swipper-Blogs
---
Section Title: Latest Blog Posts

Blog 1:
- Image: ./images/31354747532d7d6c4641b4bc9d07e72f.png
- Title: Benefits of Using a RuPay Credit Card
- Excerpt: Discover the advantages of RuPay cards for everyday spending...
- CTA: Read More
- Link: /blog/benefits-of-rupay-credit-card

Blog 2:
- Image: ./images/37f4dc4a2d53fee465e899c67f8479de.png
- Title: Features and Benefits of RuPay Credit Card on UPI
- Excerpt: Learn how to maximize your rewards with RuPay on UPI...
- CTA: Read More
- Link: /blog/rupay-credit-card-upi-features

Blog 3:
- Image: ./images/1f56d8f625ea6fb93f5d9146f2ab6ecd.png
- Title: Best RuPay Credit Card for UPI
- Excerpt: Compare RuPay credit cards and find the best one...
- CTA: Read More
- Link: /blog/best-rupay-credit-card-upi
```

---

### 11. Frequently Asked Questions

**Block:** `faq-accordion`
**Background:** White
**Layout:** Collapsible accordion

**Content:**
```
FAQ-Accordion
---
Section Title: Frequently Asked Questions

Q1: What is a RuPay Credit Card?
A: RuPay Credit Card is a domestic payment card that allows you to make UPI transactions using your credit limit instead of your bank account balance.

Q2: How do I apply for FIRST Digital RuPay Credit Card?
A: Download the IDFC FIRST Bank mobile app, complete your KYC, and apply for the card. You'll receive instant digital card details.

Q3: Can I use RuPay Credit Card with any UPI app?
A: Yes, you can link your RuPay Credit Card to popular UPI apps like Google Pay, PhonePe, Paytm, and more.

Q4: Are there any joining or annual fees?
A: Joining Fee is ₹199 + GST. Annual Fee from 2nd year onwards is ₹199 + GST.

Q5: What is the credit limit for RuPay Credit Card?
A: The RuPay Credit Card shares the credit limit with your primary IDFC FIRST Bank credit card.

Q6: How do I earn rewards on UPI transactions?
A: Every eligible UPI transaction earns you reward points, with up to 3X rewards on select categories.

Q7: What is the daily UPI transaction limit?
A: Daily UPI transaction limit is up to ₹1,00,000 as per NPCI guidelines.

Q8: Is the RuPay Credit Card secure?
A: Yes, it features two-factor authentication, tokenization, OTP verification, and real-time SMS alerts for security.

[Additional FAQs as needed]
```

---

### 12. Related Credit Card Products

**Block:** `cards` (4-column)
**Background:** White
**Layout:** Product card grid

**Content:**
```
Cards (Related Products)
---
Section Title: Explore Other Credit Cards

Card 1:
- Icon: ./images/1e1067106fa3f6b4e319df41872d9e89.png
- Title: FIRST Power Credit Card
- Link: /credit-card/first-power

Card 2:
- Icon: ./images/5c9d261ea8b25429779451bd22353f26.png
- Title: Mayura Credit Card
- Link: /credit-card/mayura

Card 3:
- Icon: ./images/d6eb74e2508a0c84e25671557994c50f.png
- Title: Apply Credit Card
- Link: /credit-card/apply

Card 4:
- Icon: ./images/7aa19e880c59be8a6934786b02301797.png
- Title: FIRST Digital Credit Card
- Link: /credit-card/first-digital

Card 5:
- Icon: ./images/188b584f3176d9773a4d79d9d4ffea22.png
- Title: FIRST Swyp Credit Card
- Link: /credit-card/first-swyp

Card 6:
- Icon: ./images/2321164ec320635d44e079fe6a74951b.png
- Title: Ashva Credit Card
- Link: /credit-card/ashva
```

---

### 13. UPI Acceptance Partner Logos

**Block:** `columns` (multi-column logo grid)
**Background:** Light gray
**Layout:** Responsive logo grid

**Content:**
```
Columns (Partner Logos)
---
Section Title: Accepted Everywhere RuPay UPI is Accepted

[Multiple UPI partner logos in grid format]
- Google Pay
- PhonePe
- Paytm
- Amazon Pay
- Slice
- CRED
- MobiKwik
- Freecharge
[Additional logos as available in scraped images]
```

---

### 14. Sticky CTA

**Block:** `sticky-cta`
**Position:** Fixed bottom (mobile), Fixed right (desktop)
**Visibility:** Show after scrolling past hero

**Content:**
```
Sticky-CTA
---
Text: Apply Now
Link: #apply-form
Background: #9D1D27 (brand red)
```

---

## Content Authoring Guidelines

### For AEM Crosswalk (Universal Editor)

1. **Create content in Google Docs or Microsoft Word**
2. **Use table format for blocks:**
   ```
   | Block Name | Variant |
   | Hero | Rupay |

   | Heading | Image |
   | Your headline text | image-url |
   ```

3. **Section breaks:** Use horizontal rules (---) between sections

4. **Image references:** Use relative paths `./images/filename.png`

5. **Links:** Use proper internal linking structure

### Content Tone & Voice

- **Professional yet friendly**
- **Benefit-focused** (what customer gets)
- **Clear and concise**
- **Action-oriented CTAs**
- **Trust-building** (security, reliability mentions)

### SEO Considerations

- **H1:** One per page (in hero section)
- **H2:** Section titles
- **H3:** Card titles, subsections
- **Alt text:** Descriptive for all images
- **Internal links:** To related products and resources
- **Structured data:** Already included in page metadata

---

## Image Assets Summary

**Total Images:** 86 images downloaded and converted

**Image Categories:**
- Hero images: 3 files
- Icons (3D): 8 files
- Step indicators: 5 files
- UPI app logos: 10+ files
- Blog thumbnails: 3 files
- Product icons: 6 files
- UI elements: 20+ files
- Decorative graphics: 10+ files
- Partner logos: 20+ files

**All images available in:** `/workspace/import-work/images/`

---

## Responsive Design Notes

### Mobile (< 768px)
- Hero: Stack text above image
- Cards: Single column
- Steps: Vertical list
- Carousels: Single item view with swipe

### Tablet (768px - 1024px)
- Hero: Side-by-side with smaller image
- Cards: 2 columns
- Steps: 2-3 columns or horizontal scroll
- Carousels: 2 items visible

### Desktop (> 1024px)
- Hero: Full side-by-side layout
- Cards: 3-4 columns as designed
- Steps: Full horizontal flow
- Carousels: 3 items visible

---

## Brand Guidelines

### Colors
- **Primary Red:** #9D1D27
- **Dark:** #000000
- **Purple Gradient:** #6B46C1 to #8B5CF6
- **White:** #FFFFFF
- **Gray (backgrounds):** #F5F5F5

### Typography
- **Headings:** Bold, sans-serif
- **Body:** Regular, sans-serif
- **CTA Buttons:** Bold, uppercase or title case

### Spacing
- **Section padding:** 60px (desktop), 40px (mobile)
- **Card gaps:** 2rem (32px)
- **Element spacing:** 16px, 24px, 32px (system)

---

**Document Version:** 1.0
**Last Updated:** 2025-12-09

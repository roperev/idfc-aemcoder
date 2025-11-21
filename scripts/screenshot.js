/**
 * Screenshot script for tabs-upi-link block
 * Usage: node scripts/screenshot.js
 * Requires: npm install --save-dev playwright
 */

import { chromium } from 'playwright';

const URL = 'http://localhost:3000/credit-card/rupay-credit-card';
const VIEWPORTS = [
  { name: 'mobile', width: 375, height: 667 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'desktop', width: 1440, height: 900 },
];

async function takeScreenshots() {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  try {
    console.log(`Loading page: ${URL}`);
    await page.goto(URL, { waitUntil: 'networkidle' });

    // Wait for tabs-upi-link block to be processed
    await page.waitForSelector('.tabs-upi-link', { timeout: 10000 });
    console.log('Page loaded, tabs-upi-link block found');

    // Wait a bit for any animations/transitions
    await page.waitForTimeout(2000);

    for (const viewport of VIEWPORTS) {
      await page.setViewportSize({ width: viewport.width, height: viewport.height });
      await page.waitForTimeout(1000); // Wait for layout to adjust

      const selector = '.tabs-upi-link';
      const element = await page.$(selector);
      
      if (element) {
        const filename = `screenshots/tabs-upi-link-${viewport.name}-${viewport.width}x${viewport.height}.png`;
        await element.screenshot({ path: filename, fullPage: false });
        console.log(`✓ Screenshot saved: ${filename}`);
      } else {
        console.log(`✗ Element not found for ${viewport.name}`);
      }
    }

    // Also take full page screenshot
    const fullPageFilename = 'screenshots/tabs-upi-link-fullpage.png';
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.screenshot({ path: fullPageFilename, fullPage: true });
    console.log(`✓ Full page screenshot saved: ${fullPageFilename}`);

  } catch (error) {
    console.error('Error taking screenshots:', error);
  } finally {
    await browser.close();
  }
}

takeScreenshots();


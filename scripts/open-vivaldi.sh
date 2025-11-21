#!/bin/bash
# Script to open localhost page in Vivaldi

URL="http://localhost:3000/credit-card/rupay-credit-card"

echo "Opening $URL in Vivaldi..."
open -a "Vivaldi" "$URL"

echo ""
echo "Vivaldi should now be open with the page."
echo "To take screenshots:"
echo "1. Press Cmd+Shift+M to open Device Toolbar"
echo "2. Set viewport to 375px for mobile or 1440px for desktop"
echo "3. Press Cmd+Shift+P and type 'screenshot' to capture"
echo ""
echo "Or use Chrome DevTools:"
echo "- Right-click on the tabs-upi-link element"
echo "- Select 'Capture node screenshot'"


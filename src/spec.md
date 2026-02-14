# Specification

## Summary
**Goal:** Build a hackathon-ready public-safety web app (“DarkPattern Shield”) that educates users about modern dark patterns, helps assess subscription-offer risk via keyword matching, collects scam reports with a small stats dashboard, and presents a browser-extension warning concept.

**Planned changes:**
- Create a homepage explaining dark patterns with at least two real-life-style examples and three CTA buttons (“Check Offer Risk”, “Report Scam”, “Know Your Risk”) routing to the right pages.
- Implement a consistent modern, minimal “smart city cyber safety” theme (not predominantly blue/purple) with shared layout and styled components.
- Build the “Subscription Trap Detector” page with a single input, basic keyword-based risk scoring (Low/Medium/High), dynamic warning text, and an always-visible educational note.
- Build the “Personal Digital Risk Test” page as an exactly 5-question quiz that outputs a Digital Vulnerability Score, an interpretable label, and exactly 3 personalized safety tips; allow retake without refresh.
- Build the “Scam Reporting” UI with required scam text, optional screenshot description, and required category selector (Subscription Trap, Fake Discount, OTP Scam), with submit feedback and reset/submit-another flow.
- Add a Motoko single-actor backend to persist reports (including timestamp) and provide summary stats (total reports and most common category) for the frontend.
- Create a “Reports Dashboard” view (embedded or separate) that displays and refreshes total reports and most common scam type after submissions.
- Create a “Browser Extension Concept” page with a visual warning popup mock and a plain-English explanation of the concept flow (no real extension functionality).
- Add persistent navigation across Home, Subscription Trap Detector, Personal Digital Risk Test, Scam Reporting (with dashboard), and Browser Extension Concept, and ensure homepage CTAs route correctly.
- Include generated static brand/illustration assets under `frontend/public/assets/generated` and use at least a logo and one background/illustration in the UI.

**User-visible outcome:** Users can navigate the app, learn about dark patterns, check pasted offers/links for risk (Low/Medium/High), take a 5-question risk quiz with a score and 3 tips, submit scam reports and see updated report stats, and view a browser-extension warning popup concept mockup.

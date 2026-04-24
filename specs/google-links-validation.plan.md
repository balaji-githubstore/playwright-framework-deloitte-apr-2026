# Complete Google.com Link Validation Test Plan

## Application Overview

A comprehensive test plan to validate all links present on Google.com homepage, including header navigation, Google Apps menu, language selection, footer, settings menu, and special functionality links. This plan covers functional testing, accessibility, and user experience validation for all clickable elements.

## Test Scenarios

### 1. Header Navigation Links

**Seed:** `tests/seed.spec.ts`

#### 1.1. Validate About Link

**File:** `tests/header-navigation/about-link.spec.ts`

**Steps:**
  1. Navigate to https://www.google.com/
    - expect: Page loads successfully
    - expect: Google homepage is displayed
  2. Verify About link is visible in header navigation
    - expect: About link is visible
    - expect: Link text reads 'About'
  3. Verify About link URL points to about.google.com
    - expect: href attribute contains 'about.google'
  4. Click on About link
    - expect: Navigation to Google About page
    - expect: About page loads successfully

#### 1.2. Validate Store Link

**File:** `tests/header-navigation/store-link.spec.ts`

**Steps:**
  1. Navigate to https://www.google.com/
    - expect: Page loads successfully
  2. Verify Store link is visible in header navigation
    - expect: Store link is visible
    - expect: Link text reads 'Store'
  3. Verify Store link URL points to store.google.com
    - expect: href attribute contains 'store.google.com'
  4. Click on Store link
    - expect: Navigation to Google Store page
    - expect: Store page loads successfully

#### 1.3. Validate Gmail Link

**File:** `tests/header-navigation/gmail-link.spec.ts`

**Steps:**
  1. Navigate to https://www.google.com/
    - expect: Page loads successfully
  2. Verify Gmail link is visible in header navigation
    - expect: Gmail link is visible
    - expect: Link text reads 'Gmail'
  3. Verify Gmail link URL points to mail.google.com
    - expect: href attribute contains 'mail.google.com'
  4. Click on Gmail link
    - expect: Navigation to Gmail service
    - expect: Gmail page loads or login prompt appears

#### 1.4. Validate Images Link

**File:** `tests/header-navigation/images-link.spec.ts`

**Steps:**
  1. Navigate to https://www.google.com/
    - expect: Page loads successfully
  2. Verify Images link is visible in header navigation
    - expect: Images link is visible
    - expect: Link text reads 'Images'
  3. Verify Images link URL points to Google Images
    - expect: href attribute contains 'imghp'
  4. Click on Images link
    - expect: Navigation to Google Images search
    - expect: Images search page loads successfully

#### 1.5. Validate Sign In Link

**File:** `tests/header-navigation/signin-link.spec.ts`

**Steps:**
  1. Navigate to https://www.google.com/
    - expect: Page loads successfully
  2. Verify Sign In link is visible in header navigation
    - expect: Sign In link is visible
    - expect: Link text reads 'Sign in'
  3. Verify Sign In link URL points to Google Accounts
    - expect: href attribute contains 'accounts.google.com'
  4. Click on Sign In link
    - expect: Navigation to Google Sign In page
    - expect: Login form is displayed

### 2. Google Apps Menu Links

**Seed:** `tests/seed.spec.ts`

#### 2.1. Validate Google Apps Menu Access

**File:** `tests/google-apps/menu-access.spec.ts`

**Steps:**
  1. Navigate to https://www.google.com/
    - expect: Page loads successfully
  2. Verify Google Apps button is visible
    - expect: Google Apps button (grid icon) is visible
  3. Click on Google Apps button
    - expect: Google Apps menu opens
    - expect: Menu displays grid of application links
  4. Verify all expected apps are present in the menu
    - expect: All 33 Google services links are visible
    - expect: Apps are organized in sections

#### 2.2. Validate Primary Google Apps Links

**File:** `tests/google-apps/primary-apps.spec.ts`

**Steps:**
  1. Navigate to https://www.google.com/ and open Google Apps menu
    - expect: Google Apps menu is open
  2. Verify and test Account link
    - expect: Account link points to myaccount.google.com
    - expect: Link is clickable
  3. Verify and test Search link
    - expect: Search link points to www.google.com
    - expect: Link is clickable
  4. Verify and test Maps link
    - expect: Maps link points to maps.google.com
    - expect: Link is clickable
  5. Verify and test YouTube link
    - expect: YouTube link points to www.youtube.com
    - expect: Link is clickable
  6. Verify and test News link
    - expect: News link points to news.google.com
    - expect: Link is clickable
  7. Verify and test Gmail link in menu
    - expect: Gmail link points to mail.google.com
    - expect: Link is clickable

#### 2.3. Validate Communication Apps Links

**File:** `tests/google-apps/communication-apps.spec.ts`

**Steps:**
  1. Navigate to https://www.google.com/ and open Google Apps menu
    - expect: Google Apps menu is open
  2. Verify and test Meet link
    - expect: Meet link points to meet.google.com
    - expect: Link is clickable
  3. Verify and test Chat link
    - expect: Chat link points to chat.google.com
    - expect: Link is clickable
  4. Verify and test Contacts link
    - expect: Contacts link points to contacts.google.com
    - expect: Link is clickable

#### 2.4. Validate Productivity Apps Links

**File:** `tests/google-apps/productivity-apps.spec.ts`

**Steps:**
  1. Navigate to https://www.google.com/ and open Google Apps menu
    - expect: Google Apps menu is open
  2. Verify and test Drive link
    - expect: Drive link points to drive.google.com
    - expect: Link is clickable
  3. Verify and test Calendar link
    - expect: Calendar link points to calendar.google.com
    - expect: Link is clickable
  4. Verify and test Docs link
    - expect: Docs link points to docs.google.com/document
    - expect: Link is clickable
  5. Verify and test Sheets link
    - expect: Sheets link points to docs.google.com/spreadsheets
    - expect: Link is clickable
  6. Verify and test Slides link
    - expect: Slides link points to docs.google.com/presentation
    - expect: Link is clickable
  7. Verify and test Forms link
    - expect: Forms link points to docs.google.com/forms
    - expect: Link is clickable

#### 2.5. Validate Entertainment and Media Apps

**File:** `tests/google-apps/media-apps.spec.ts`

**Steps:**
  1. Navigate to https://www.google.com/ and open Google Apps menu
    - expect: Google Apps menu is open
  2. Verify and test Play link
    - expect: Play link points to play.google.com
    - expect: Link is clickable
  3. Verify and test Books link
    - expect: Books link points to books.google.com
    - expect: Link is clickable
  4. Verify and test Photos link
    - expect: Photos link points to photos.google.com
    - expect: Link is clickable
  5. Verify and test YouTube Music link
    - expect: YouTube Music link points to music.youtube.com
    - expect: Link is clickable

#### 2.6. Validate Business and Developer Apps

**File:** `tests/google-apps/business-apps.spec.ts`

**Steps:**
  1. Navigate to https://www.google.com/ and open Google Apps menu
    - expect: Google Apps menu is open
  2. Verify and test Google Ads link
    - expect: Google Ads link points to ads.google.com
    - expect: Link is clickable
  3. Verify and test Google Analytics link
    - expect: Analytics link points to analytics.google.com
    - expect: Link is clickable
  4. Verify and test Merchant Center link
    - expect: Merchant Center link points to merchants.google.com
    - expect: Link is clickable
  5. Verify and test Chrome Web Store link
    - expect: Chrome Web Store link points to chrome.google.com/webstore
    - expect: Link is clickable

#### 2.7. Validate Utility and Other Apps

**File:** `tests/google-apps/utility-apps.spec.ts`

**Steps:**
  1. Navigate to https://www.google.com/ and open Google Apps menu
    - expect: Google Apps menu is open
  2. Verify and test Translate link
    - expect: Translate link points to translate.google.com
    - expect: Link is clickable
  3. Verify and test Earth link
    - expect: Earth link points to earth.google.com
    - expect: Link is clickable
  4. Verify and test Keep link
    - expect: Keep link points to keep.google.com
    - expect: Link is clickable
  5. Verify and test Finance link
    - expect: Finance link points to google.com/finance
    - expect: Link is clickable
  6. Verify and test Shopping link
    - expect: Shopping link points to google.com/shopping
    - expect: Link is clickable
  7. Verify and test Travel link
    - expect: Travel link points to google.com/travel
    - expect: Link is clickable
  8. Verify and test Arts and Culture link
    - expect: Arts and Culture link points to artsandculture.google.com
    - expect: Link is clickable
  9. Verify 'More from Google' link
    - expect: More from Google link points to about.google/products
    - expect: Link opens in new tab

### 3. Language Selection Links

**Seed:** `tests/seed.spec.ts`

#### 3.1. Validate Language Links Visibility

**File:** `tests/language-links/language-visibility.spec.ts`

**Steps:**
  1. Navigate to https://www.google.com/
    - expect: Page loads successfully
  2. Verify 'Google offered in:' text is visible
    - expect: Language section heading is displayed
  3. Verify all 9 language links are visible
    - expect: हिन्दी, বাংলা, తెలుగు, मराठी, தமிழ், ગુજરાતી, ಕನ್ನಡ, മലയാളം, ਪੰਜਾਬੀ links are all visible

#### 3.2. Validate Individual Language Links

**File:** `tests/language-links/individual-languages.spec.ts`

**Steps:**
  1. Navigate to https://www.google.com/
    - expect: Page loads successfully
  2. Verify Hindi (हिन्दी) language link
    - expect: Link points to Google with hl=hi parameter
    - expect: Link is clickable
  3. Verify Bengali (বাংলা) language link
    - expect: Link points to Google with hl=bn parameter
    - expect: Link is clickable
  4. Verify Telugu (తెలుగు) language link
    - expect: Link points to Google with hl=te parameter
    - expect: Link is clickable
  5. Verify Marathi (मराठी) language link
    - expect: Link points to Google with hl=mr parameter
    - expect: Link is clickable
  6. Verify Tamil (தமிழ்) language link
    - expect: Link points to Google with hl=ta parameter
    - expect: Link is clickable
  7. Verify Gujarati (ગુજરાતી) language link
    - expect: Link points to Google with hl=gu parameter
    - expect: Link is clickable
  8. Verify Kannada (ಕನ್ನಡ) language link
    - expect: Link points to Google with hl=kn parameter
    - expect: Link is clickable
  9. Verify Malayalam (മലയാളം) language link
    - expect: Link points to Google with hl=ml parameter
    - expect: Link is clickable
  10. Verify Punjabi (ਪੰਜਾਬੀ) language link
    - expect: Link points to Google with hl=pa parameter
    - expect: Link is clickable

### 4. Footer Links

**Seed:** `tests/seed.spec.ts`

#### 4.1. Validate Footer Business Links

**File:** `tests/footer-links/business-links.spec.ts`

**Steps:**
  1. Navigate to https://www.google.com/
    - expect: Page loads successfully
  2. Scroll to footer section
    - expect: Footer is visible
  3. Verify Advertising link
    - expect: Advertising link points to google.com/intl/en_in/ads
    - expect: Link is clickable
  4. Verify Business link
    - expect: Business link points to google.com/services
    - expect: Link is clickable
  5. Verify How Search works link
    - expect: How Search works link points to google.com/search/howsearchworks
    - expect: Link is clickable

#### 4.2. Validate Footer Legal Links

**File:** `tests/footer-links/legal-links.spec.ts`

**Steps:**
  1. Navigate to https://www.google.com/
    - expect: Page loads successfully
  2. Scroll to footer section
    - expect: Footer is visible
  3. Verify Privacy link
    - expect: Privacy link points to policies.google.com/privacy
    - expect: Link is clickable
  4. Verify Terms link
    - expect: Terms link points to policies.google.com/terms
    - expect: Link is clickable

### 5. Settings Menu Links

**Seed:** `tests/seed.spec.ts`

#### 5.1. Validate Settings Menu Access

**File:** `tests/settings-menu/menu-access.spec.ts`

**Steps:**
  1. Navigate to https://www.google.com/
    - expect: Page loads successfully
  2. Click on Settings button in footer
    - expect: Settings menu opens
    - expect: Menu displays list of settings options
  3. Verify all settings menu items are present
    - expect: Search settings, Advanced search, Your data in Search, Search history, Search help, Send feedback, Dark theme options are all visible

#### 5.2. Validate Settings Menu Options

**File:** `tests/settings-menu/menu-options.spec.ts`

**Steps:**
  1. Navigate to https://www.google.com/ and open Settings menu
    - expect: Settings menu is open
  2. Verify Search settings option is clickable
    - expect: Search settings option is clickable and functional
  3. Verify Advanced search option is clickable
    - expect: Advanced search option is clickable and functional
  4. Verify Your data in Search option is clickable
    - expect: Your data in Search option is clickable and functional
  5. Verify Search history option is clickable
    - expect: Search history option is clickable and functional
  6. Verify Search help option is clickable
    - expect: Search help option is clickable and functional
  7. Verify Dark theme toggle functionality
    - expect: Dark theme toggle works
    - expect: Theme changes are applied

### 6. Special Functionality Links

**Seed:** `tests/seed.spec.ts`

#### 6.1. Validate AI Mode Link

**File:** `tests/special-links/ai-mode.spec.ts`

**Steps:**
  1. Navigate to https://www.google.com/
    - expect: Page loads successfully
  2. Locate AI Mode link in search bar area
    - expect: AI Mode link is visible
    - expect: Link shows AI Mode text and icon
  3. Verify AI Mode link is clickable
    - expect: AI Mode link responds to hover
    - expect: Link is interactive
  4. Click on AI Mode link
    - expect: AI Mode feature activates
    - expect: Interface changes to reflect AI mode

#### 6.2. Validate Chrome Promotion Links

**File:** `tests/special-links/chrome-promotion.spec.ts`

**Steps:**
  1. Navigate to https://www.google.com/
    - expect: Page loads successfully
  2. Check if Chrome promotion dialog is present
    - expect: Chrome promotion dialog may be visible depending on browser
  3. If present, verify 'Get Chrome' link functionality
    - expect: Get Chrome link points to Chrome download page
    - expect: Link is clickable
  4. If present, verify 'Do not use Chrome' button functionality
    - expect: Dismiss button works correctly
    - expect: Dialog can be closed

### 7. Link Validation and Accessibility

**Seed:** `tests/seed.spec.ts`

#### 7.1. Validate Link Accessibility

**File:** `tests/accessibility/link-accessibility.spec.ts`

**Steps:**
  1. Navigate to https://www.google.com/
    - expect: Page loads successfully
  2. Verify all links have proper accessible names
    - expect: All links have descriptive accessible names
    - expect: Links are properly labeled for screen readers
  3. Verify keyboard navigation works for all links
    - expect: All links are focusable with Tab key
    - expect: Enter key activates focused links
  4. Verify link hover states and visual feedback
    - expect: Links show hover states
    - expect: Visual feedback is provided on interaction

#### 7.2. Validate Link Response Codes

**File:** `tests/validation/response-codes.spec.ts`

**Steps:**
  1. Navigate to https://www.google.com/
    - expect: Page loads successfully
  2. Extract all link URLs from the page
    - expect: All link URLs are captured
    - expect: URLs are valid format
  3. Test HTTP response codes for critical links
    - expect: Critical links return 200 or appropriate redirect codes
    - expect: No broken links detected
  4. Verify external links open correctly
    - expect: External links navigate to correct destinations
    - expect: Links open in appropriate target

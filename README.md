# Playwright Testing Framework

A comprehensive end-to-end testing framework built with Playwright and TypeScript, featuring a robust Page Object Model architecture, extensive utility libraries, and multiple data source support.

## 🎯 Overview

This framework provides a structured approach to automated testing with Playwright, offering reusable components, comprehensive keyword libraries, and flexible data management capabilities. It's designed to support scalable test automation for web applications with enterprise-grade features.

## 🏗️ Architecture

### Framework Structure
```
playwright-framework/
├── fixtures/           # Test fixtures and base setup
├── pages/             # Page Object Model classes
│   ├── basepage/     # Base keyword library
│   └── *.ts          # Specific page objects
├── test-data/        # Test data files (JSON, Excel)
├── tests/            # Test specifications
├── utils/            # Utility libraries
├── specs/            # Test plans and documentation
└── playwright-report/ # HTML test reports
```

### Key Components

#### 1. **Base Keyword Library** (`pages/basepage/PlaywrightKeywords.ts`)
Comprehensive utility class providing 80+ reusable methods organized into categories:

- **Text/Input Operations**: Fill, clear, type, get text, validate inputs
- **Click Operations**: Standard click, forced click, double-click, right-click, coordinates
- **Wait/Visibility Operations**: Element visibility, navigation waits, condition waits
- **Selection/Dropdown Operations**: Select by label/value/index, checkbox operations
- **Visibility/State Checks**: Element state validation, count operations
- **Assertions**: Built-in expectations for common validations
- **Navigation**: URL handling, browser history, page operations
- **Keyboard/Mouse Operations**: Key presses, shortcuts, hover, scroll
- **Attribute/Property Operations**: Get/set attributes, CSS properties, bounding boxes
- **Table Operations**: Table data extraction, cell interactions
- **Dialog/Alert Handling**: Alert acceptance/dismissal
- **File Operations**: Upload single/multiple files
- **Utility Operations**: Screenshots, JavaScript execution, HTML extraction

#### 2. **Page Object Model**
All page classes extend `PlaywrightKeywords` base class:
```typescript
class LoginPage extends PlaywrightKeywords {
    constructor(page: Page) {
        super(page);
    }
    
    async fillUsername(username: string): Promise<void> {
        await this.sendTextToElement(USERNAME_LOCATOR, username);
    }
}
```

#### 3. **Data Management**
Multiple data source support:
- **JSON Files**: Structured test data in JSON format
- **Excel Files**: XLSX support with sheet-based organization  
- **In-Code Data**: Direct data arrays for simple datasets
- **Dynamic Data**: Runtime data generation capabilities

#### 4. **Test Fixtures** (`fixtures/base.ts`)
Centralized test setup and configuration:
- Base URL configuration
- Pre-test navigation and validation
- Common test utilities and imports

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd playwright-framework

# Install dependencies
npm install

# Install Playwright browsers
npx playwright install
```

### Configuration
The framework is configured via `playwright.config.ts`:
- **Base URL**: Currently set to OrangeHRM demo site
- **Browsers**: Chrome (Firefox and Safari available)
- **Timeouts**: 50 seconds per test
- **Reporting**: HTML reports with trace on retry
- **Screenshots**: On failure only
- **Parallel Execution**: Enabled

## 📝 Writing Tests

### Basic Test Structure
```typescript
import { test, expect } from '../fixtures/base.js';
import { LoginPage } from '../pages/LoginPage.js';

test.describe("Login Tests", () => {
    test('valid login', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.fillUsername('Admin');
        await loginPage.fillPassword('admin123');
        await loginPage.clickLogin();
    });
});
```

### Data-Driven Testing
```typescript
// Using JSON data
import { JsonUtils } from '../utils/json-utlis.js';

for (const { username, password, expected_error } of JsonUtils.getJson('invalidLoginData')) {
    test(`invalid login: ${username}`, async ({ page }) => {
        // Test implementation
    });
}

// Using Excel data
import { ExcelUtils } from '../utils/excel-utils.js';

for (const data of ExcelUtils.getSheetToJson('testData')) {
    test(`test with ${data.scenario}`, async ({ page }) => {
        // Test implementation
    });
}
```

### Using Keywords Library
```typescript
import { PlaywrightKeywords } from '../pages/basepage/PlaywrightKeywords.js';

const keywords = new PlaywrightKeywords(page);

// Text operations
await keywords.sendTextToElement('#username', 'testuser');
await keywords.clearInputField('#password');

// Assertions
await keywords.assertElementVisible('#loginButton');
await keywords.assertElementContainsText('#message', 'Welcome');

// Wait operations  
await keywords.waitForElement('#dashboard', 10000);
await keywords.waitForNavigation('/dashboard');

// Table operations
const tableData = await keywords.getTableData('#dataTable');
await keywords.clickTableCell('#dataTable', 0, 2);
```

## 🔧 Utilities

### JSON Utils (`utils/json-utlis.ts`)
```typescript
import { JsonUtils } from '../utils/json-utlis.js';

// Get all data
const data = JsonUtils.getJson();

// Get specific key
const loginData = JsonUtils.getJson('validLoginData');
```

### Excel Utils (`utils/excel-utils.ts`)
```typescript
import { ExcelUtils } from '../utils/excel-utils.js';

// Read sheet as JSON
const data = ExcelUtils.getSheetToJson('SheetName');
```

### Data Sources (`utils/data-source.ts`)
Direct data arrays for simple test scenarios:
```typescript
export const invalidLoginData = [
    { "username": "user1", "password": "pass1", "expected_error": "Invalid credentials" }
];
```

## 🧪 Test Data Management

### JSON Structure (`test-data/data.json`)
```json
{
    "invalidLoginData": [
        {
            "username": "testuser",
            "password": "wrongpass",
            "expected_error": "Invalid credentials"
        }
    ],
    "validLoginData": [
        {
            "username": "Admin", 
            "password": "admin123",
            "expected_value": "Dashboard"
        }
    ]
}
```

### Excel Support
- Place Excel files in `test-data/` directory
- Use `.xlsx` format
- Organize data by sheets for different test scenarios
- First row should contain column headers

## 📊 Reporting and Execution

### Running Tests
```bash
# Run all tests
npx playwright test

# Run specific test file
npx playwright test login.spec.ts

# Run with specific browser
npx playwright test --project=chromium

# Run tests with tags
npx playwright test --grep @smoke

# Debug mode
npx playwright test --debug

# UI mode
npx playwright test --ui
```

### Test Reports
- **HTML Report**: Generated in `playwright-report/` 
- **Screenshots**: Captured on test failures
- **Traces**: Available for failed tests with retry
- **Video**: Can be enabled in configuration

### Viewing Reports
```bash
# Open HTML report
npx playwright show-report
```

## 🏷️ Test Organization

### Tagging Strategy
Tests support tagging for organized execution:
```typescript
test('login test', { tag: ['@smoke', '@regression'] }, async ({ page }) => {
    // Test implementation
});
```

### Test Plans
Documentation and test plans stored in `specs/` directory:
- Markdown format for test scenarios
- Organized by feature areas
- Include test data requirements

## 🔧 Advanced Features

### Custom Assertions
The framework extends Playwright's built-in assertions:
```typescript
await keywords.assertElementHasAttribute('input', 'placeholder', 'Enter username');
await keywords.assertPageTitle('Login Page');
await keywords.assertPageURL(/\/dashboard/);
```

### Error Handling
Comprehensive error handling with descriptive messages:
```typescript
// Automatic retries on element interactions
// Detailed error messages with context
// Screenshot capture on failures
```

### Parallel Execution
- Fully parallel test execution enabled
- Worker configuration based on CI/local environment
- Test isolation maintained

## 🛠️ Dependencies

### Core Dependencies
- `@playwright/test`: ^1.59.1 - Core testing framework
- `typescript`: ^6.0.3 - TypeScript support
- `xlsx`: ^0.18.5 - Excel file operations

### DevDependencies
- `@types/node`: ^25.6.0 - Node.js type definitions

## 📚 Best Practices

### Page Objects
- Keep page objects focused on specific page functionality
- Use descriptive method names
- Implement proper error handling
- Utilize the base keywords library

### Test Data
- Separate test data from test logic
- Use meaningful test data names
- Consider data cleanup requirements
- Implement data validation

### Locators
- Use reliable locator strategies (xpath, css, role-based)
- Store locators as constants
- Implement locator validation
- Consider maintenance and updates

### Test Organization
- Group related tests in describe blocks
- Use descriptive test names
- Implement proper test tags
- Consider test dependencies

## 🤝 Contributing

1. Follow TypeScript coding standards
2. Maintain Page Object Model architecture
3. Add comprehensive documentation
4. Include test coverage for new features
5. Update README for significant changes

## 📄 License

ISC License - See package.json for details

---

**Version**: 1.0.0  
**Author**: Deloitte Test Automation Team  
**Last Updated**: May 2026
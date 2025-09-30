# Automation Exercise - Playwright TypeScript Project

This project is set up for automated testing using Playwright with TypeScript.

## Project Structure

```
automation-exercise/
├── pages/                 # Page Object Models
│   ├── BasePage.ts       # Base page class with common methods
│   ├── HomePage.ts       # Home page object model
│   └── LoginPage.ts      # Login page object model
├── tests/                # Test files
│   ├── home.spec.ts      # Home page tests
│   ├── login.spec.ts     # Login page tests
│   └── example.spec.ts   # Example tests
├── utils/                # Utility files
│   ├── TestHelpers.ts    # Helper functions for tests
│   └── TestData.ts       # Test data and configuration
├── playwright.config.ts  # Playwright configuration
├── tsconfig.json        # TypeScript configuration
├── package.json         # Project dependencies and scripts
└── .gitignore          # Git ignore file
```

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Chi2A/automation-exercise.git
   cd automation-exercise
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Install Playwright browsers:
   ```bash
   npm run test:install
   ```

## Available Scripts

- `npm test` - Run all tests
- `npm run test:headed` - Run tests in headed mode (browser visible)
- `npm run test:debug` - Run tests in debug mode
- `npm run test:ui` - Run tests with Playwright UI mode
- `npm run test:report` - Show test report
- `npm run test:codegen` - Generate tests using Playwright codegen
- `npm run test:chrome` - Run tests only in Chrome
- `npm run test:firefox` - Run tests only in Firefox
- `npm run test:webkit` - Run tests only in Safari/WebKit

## Running Tests

### Run all tests:

```bash
npm test
```

### Run specific test file:

```bash
npx playwright test tests/home.spec.ts
```

### Run tests in headed mode:

```bash
npm run test:headed
```

### Run tests with UI mode:

```bash
npm run test:ui
```

### Debug tests:

```bash
npm run test:debug
```

## Page Object Model

This project uses the Page Object Model (POM) design pattern:

- **BasePage.ts**: Contains common methods used across all pages
- **HomePage.ts**: Page object for the home page
- **LoginPage.ts**: Page object for the login page

## Test Data

Test data is centralized in `utils/TestData.ts` and includes:

- User credentials
- URLs
- Timeouts
- Form data
- Environment configurations

## Test Helpers

Common test utilities are available in `utils/TestHelpers.ts`:

- Random data generation
- Screenshot utilities
- Browser data clearing
- Retry mechanisms

## Configuration

The Playwright configuration (`playwright.config.ts`) includes:

- Multiple browser support (Chrome, Firefox, Safari)
- Test parallelization
- Screenshots on failure
- Video recording on failure
- HTML reporting

## Test Reports

After running tests, you can view the HTML report:

```bash
npm run test:report
```

## Best Practices

1. **Use Page Object Models**: Keep page-specific logic in page objects
2. **Use Test Data**: Store test data in the TestData utility
3. **Use Helpers**: Leverage TestHelpers for common operations
4. **Organize Tests**: Group related tests in describe blocks
5. **Use Meaningful Names**: Name tests and variables descriptively
6. **Handle Waits**: Use appropriate waits for dynamic content

## Environment Variables

You can set environment variables for different environments:

- `NODE_ENV`: Set to 'development', 'staging', or 'production'

Example:

```bash
NODE_ENV=staging npm test
```

## Debugging

### Debug with VS Code:

1. Set breakpoints in your test files
2. Use the VS Code Playwright extension
3. Run tests in debug mode

### Debug with Playwright Inspector:

```bash
npm run test:debug
```

### Generate tests with Codegen:

```bash
npm run test:codegen https://example.com
```

## Contributing

1. Follow the existing code structure
2. Add new page objects for new pages
3. Use the established patterns for test organization
4. Update this README when adding new features

## Troubleshooting

### Common Issues:

1. **Browser not found**: Run `npm run test:install`
2. **Tests timing out**: Increase timeout in playwright.config.ts
3. **Element not found**: Check selectors and add proper waits

### Getting Help:

- [Playwright Documentation](https://playwright.dev/)
- [Playwright API Reference](https://playwright.dev/docs/api/class-playwright)
- [GitHub Issues](https://github.com/Chi2A/automation-exercise/issues)

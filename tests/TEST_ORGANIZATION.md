# Test Organization

This document describes the organized test structure for the automation exercise project.

## Test Structure

### `/tests/acceptance/`

Contains user-facing functional tests that verify end-to-end scenarios:

- **`product-search.spec.ts`** - Tests for product search functionality and viewing product details
- **`category-navigation.spec.ts`** - Tests for navigating through product categories (Women/Men)
- **`brand-navigation.spec.ts`** - Tests for navigating through brand-specific products (Polo, H&M)
- **`newsletter-subscription.spec.ts`** - Tests for newsletter subscription from different pages
- **`user-authentication.spec.ts`** - Tests for user login/authentication functionality

### `/tests/regression/`

Contains tests that ensure core functionality continues to work:

- **`smoke-tests.spec.ts`** - Basic tests to verify the application is functional
- **`critical-path.spec.ts`** - End-to-end user journey tests

### `/tests/example.spec.ts`

Contains browser functionality tests and examples.

## Running Tests

### Run all tests:

```bash
npx playwright test
```

### Run specific test suites:

```bash
# Run only acceptance tests
npx playwright test tests/acceptance

# Run only regression tests
npx playwright test tests/regression

# Run specific test file
npx playwright test tests/acceptance/product-search.spec.ts
```

### Run tests in different modes:

```bash
# Run tests in headed mode (see browser)
npx playwright test --headed

# Run tests in debug mode
npx playwright test --debug

# Run tests with specific reporter
npx playwright test --reporter=html
```

## Test Naming Conventions

- Test files follow the pattern: `[feature-name].spec.ts`
- Test descriptions are clear and action-oriented (e.g., "should search for products successfully")
- Each test focuses on a single functionality or user flow

## Page Objects

All tests use the Page Object Model pattern with pages located in `/pages/`:

- `HomePage` - Main navigation and home page interactions
- `ProductsPage` - Product listing and search functionality
- `ProductsDetailsPage` - Individual product detail views
- `CategoryPage` - Category-specific product displays
- `BrandsPage` - Brand-specific product displays
- `BasePage` - Common functionality shared across pages

# Page Object Organization

This document describes the organized structure of page objects for the automation exercise project.

## Page Structure

### `/pages/common/`

Contains base functionality shared across all pages:

- **`base-page.ts`** - Base page class with common functionality like navigation, footer interactions, and newsletter subscription

### `/pages/navigation/`

Contains pages related to site navigation and browsing:

- **`home-page.ts`** - Main home page with navigation, categories, brands, and authentication
- **`category-page.ts`** - Category-specific product filtering and navigation
- **`brands-page.ts`** - Brand-specific product filtering and verification

### `/pages/product/`

Contains product-related pages:

- **`products-page.ts`** - Product listing, search, and filtering functionality
- **`product-details-page.ts`** - Individual product detail views and verification

### `/pages/auth/`

Contains authentication and user management pages:

- **`auth-page.ts`** - User login, registration, and account management

## Key Improvements Made

### 1. **Better Organization**

- Pages are grouped by functionality rather than being in a flat structure
- Clear separation of concerns between different page types

### 2. **Enhanced Documentation**

- Each class and method has comprehensive JSDoc comments
- Clear parameter descriptions and return types
- Usage examples in comments

### 3. **Improved Code Quality**

- Consistent naming conventions
- Proper TypeScript typing with definite assignment assertions
- Private methods for initialization to keep constructors clean
- Protected page property in base class for inheritance

### 4. **Better Maintainability**

- Locators are properly organized and grouped by functionality
- Methods are logically grouped with clear sections
- Generic methods added for reusable functionality

### 5. **Easier Testing**

- Clear method names that describe what they verify or do
- Consistent async/await patterns
- Proper error handling and expectations

## Usage Examples

### Using the Organized Structure

```typescript
// Modern approach - using organized imports
import { HomePage, ProductsPage, AuthPage } from "../pages";

// Or specific imports
import { HomePage } from "../pages/navigation/home-page";
import { ProductsPage } from "../pages/product/products-page";
import { AuthPage } from "../pages/auth/auth-page";
```

### Legacy Compatibility

For existing tests, legacy imports are still supported:

```typescript
// These still work but should be migrated over time
import { HomePage } from "../pages/home-page";
import { ProductsPage } from "../pages/products-page";
```

## Migration Guide

### For Existing Tests

1. **Update imports** to use the new organized structure:

   ```typescript
   // Old
   import { HomePage } from "../pages/home-page";

   // New
   import { HomePage } from "../pages/navigation/home-page";
   // Or
   import { HomePage } from "../pages";
   ```

2. **No method changes required** - all existing method signatures remain the same

3. **Enhanced methods available** - new utility methods have been added for better functionality

### Best Practices

1. **Use descriptive test names** that match the page method names
2. **Group related functionality** in the same test file
3. **Use the base page** for common operations like navigation
4. **Leverage the new generic methods** for more flexible testing

## File Structure Summary

```
pages/
├── index.ts                    # Centralized exports
├── common/
│   └── base-page.ts           # Shared functionality
├── navigation/
│   ├── home-page.ts           # Home page navigation
│   ├── category-page.ts       # Category browsing
│   └── brands-page.ts         # Brand filtering
├── product/
│   ├── products-page.ts       # Product listing
│   └── product-details-page.ts # Product details
├── auth/
│   └── auth-page.ts           # Authentication
└── [legacy files]             # Original files (to be removed after migration)
```

This organization provides a scalable foundation for future page additions and makes the codebase much more maintainable.

// Common components
export { BasePage } from "./common/base-page";

// Navigation pages
export { HomePage } from "./navigation/home-page";
export { CategoryPage } from "./navigation/category-page";
export { BrandsPage } from "./navigation/brands-page";

// Product pages
export { ProductsPage } from "./product/products-page";
export { ProductDetailsPage } from "./product/product-details-page";

// Authentication pages
export { AuthPage } from "./auth/auth-page";

// Legacy exports for backward compatibility (temporary)
export { HomePage as HomePage_Legacy } from "./home-page";
export { ProductsPage as ProductsPage_Legacy } from "./products-page";
export { ProductsDetailsPage as ProductsDetailsPage_Legacy } from "./products-details-page";
export { CategoryPage as CategoryPage_Legacy } from "./category-page";
export { BrandsPage as BrandsPage_Legacy } from "./brands-page";
export { BasePage as BasePage_Legacy } from "./base-page";

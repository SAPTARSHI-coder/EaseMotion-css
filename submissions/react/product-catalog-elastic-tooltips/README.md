# Sample Product Catalog Tooltip

## Props

| Prop | Type | Description |
|------|------|-------------|
| productName | string | Product title |
| price | string | Product price |
| description | string | Product description |
| children | ReactNode | Trigger element |

## Usage

```jsx
<ProductCatalogTooltip
  productName="Wireless Headphones"
  price="$99"
  description="Premium sound with long battery life."
>
  <button>View Product</button>
</ProductCatalogTooltip>
```
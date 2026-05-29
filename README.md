# Canarinho Supply

Loja online em Next.js para camisas de futebol inspiradas no Brasil. O projeto usa Tailwind CSS, paginas de produto, carrinho persistente em `localStorage`, checkout visual e layout responsivo.

Os produtos sao autorais e independentes. O projeto nao usa marcas, escudos ou selos de entidades esportivas.

## Rodar localmente

```bash
npm install
npm run dev
```

Depois abra `http://localhost:3000`.

## Estrutura

- `app/page.tsx`: vitrine inicial e grid de produtos.
- `app/produtos/[slug]/page.tsx`: paginas dinamicas de produto.
- `app/carrinho/page.tsx`: carrinho.
- `app/checkout/page.tsx`: checkout visual.
- `components/CartProvider.tsx`: estado do carrinho.
- `lib/products.ts`: catalogo de produtos.

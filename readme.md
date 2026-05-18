## Requirements

- [Bun](https://bun.sh)

## Setup

1. Install packages: `bun i`

2. Setup appropriate environment: `cp .env.example .env`

3. Generate & push to database: `prisma generate && prisma db push`

## Starting

- `bun start <framework>`, `framework` can be `express`, `fastify`, or `elysiajs`
## Requirements

- [Bun](https://bun.sh)

## Setup

1. Install packages: `bun i`

2. Setup appropriate environment: `cp .env.example .env`

3. Generate & push to database: `bun prisma generate && bun prisma db push`

## Starting

- `bun start <framework>`, `framework` can be `express`, `fastify`, `elysiajs`, or `nestjs`
# Content update guide

## The short version

Most website copy lives in `content/siteContent.ts`.

The file contains two complete language objects:

- `zh` — Chinese
- `en` — English

They share a TypeScript shape. If a field is added to only one language, the build fails.

## Adding a new program

1. Confirm that a real transcript or published page exists.
2. Add the source to `docs/CONTENT_FOUNDATION.md`.
3. In both `zh.programs` and `en.programs`, add the program type, title, synthesis, reusable ideas, repository source path, and a real public URL when one exists.
4. Run the verification commands from `README.md`.

Do not publish invented allocation percentages, experimental logs, performance claims, or placeholder links.

## Updating a framework definition

Change the canonical framework files in the parent content project first:

- `../01_FRAMEWORK/HUMAN_CAPITAL_ETF.md`
- `../01_FRAMEWORK/CORE.md`
- `../01_FRAMEWORK/GROWTH.md`
- `../01_FRAMEWORK/DISTRIBUTION.md`
- `../01_FRAMEWORK/META.md`
- `../01_FRAMEWORK/TERMINOLOGY_BILINGUAL.md`

Then update both language objects in `content/siteContent.ts`.

## External links

Author and project URLs live in `config/siteConfig.ts`. Never use generic placeholders such as `youtube.com`, `x.com`, or `example.com`.

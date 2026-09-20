# BitString Website Revamp Strategy

## Context
This project is undergoing a major website revamp. The original Next.js site (built with v0) had poor design. We are migrating to a professional template while preserving all the business information.

## Project Phases

### Phase 1: Data Extraction (✅ Completed)
All relevant business information (address, services, clients, training details) has been successfully extracted from the old codebase and securely documented in the `business_data/` directory.

### Phase 2: Template Integration & Mapping (✅ 80% Completed)
1. **Template Analysis:** The user will provide a new Next.js template (from Envato). We must first spin it up, analyze its component structure, and understand how it handles layouts.
2. **Content Mapping:** We will create JSON mapping files to replace the template's dummy text (Lorem Ipsum) with the actual business content found in `business_data/`.
3. **Structural Build:** We will create dedicated pages for each service (ITSM, ITOM, HRSD, etc.) by reusing the template's structural layout components.
4. **✅ RULE UPDATE:** Content mapping is ~80% complete, so aesthetic changes are now PERMITTED alongside structural tasks.

### Phase 3: Aesthetics & Polish (🟢 Active)
We can now begin replacing images, generating new logos, and updating typography/colors to match the BitString brand identity and external inspirations (e.g., ServiceNow).
**Key Findings & UI Standards:**
- **Animations:** Background animations (like on page headers) must avoid "AI aesthetic" blobs, harsh gradients, or rapid color shifting. Use subtle, low-contrast, multi-stop linear gradients (`-45deg`) with dark slate/teal shades (`#1a2728`, `#1f3032`, `#293e40`) stretching 400% with a slow 25s loop.
- **Logos:** Reverted to the original `logo-white-old` vector to maintain professional integrity over generated raster images.

## Guidelines for AI Agent
- Before making changes, always review this document to understand the current phase.
- If asked to populate data, strictly refer to the markdown files inside `business_data/`.
- Maintain a highly professional, enterprise-grade UI. Avoid excessive blurs, loud gradients, and stock designs.
- Do not attempt to re-style components until Phase 3.

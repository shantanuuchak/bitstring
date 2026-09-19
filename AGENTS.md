# BitString Website Revamp Strategy

## Context
This project is undergoing a major website revamp. The original Next.js site (built with v0) had poor design. We are migrating to a professional template while preserving all the business information.

## Project Phases

### Phase 1: Data Extraction (✅ Completed)
All relevant business information (address, services, clients, training details) has been successfully extracted from the old codebase and securely documented in the `business_data/` directory.

### Phase 2: Template Integration & Mapping (⏳ Upcoming)
1. **Template Analysis:** The user will provide a new Next.js template (from Envato). We must first spin it up, analyze its component structure, and understand how it handles layouts.
2. **Content Mapping:** We will create JSON mapping files to replace the template's dummy text (Lorem Ipsum) with the actual business content found in `business_data/`.
3. **Structural Build:** We will create dedicated pages for each service (ITSM, ITOM, HRSD, etc.) by reusing the template's structural layout components.
4. **⚠️ STRICT RULE:** Do NOT change any aesthetics (colors, images, etc.) during this phase. Focus solely on structure and text content.

### Phase 3: Aesthetics & Polish (⏭️ Future)
Only after the structure and text mapping are verified will we begin replacing images and updating colors to match the BitString brand identity.

## Guidelines for AI Agent
- Before making changes, always review this document to understand the current phase.
- If asked to populate data, strictly refer to the markdown files inside `business_data/`.
- Do not attempt to re-style components until Phase 3.

---
title: "Wreno Credentialing API"
stack:
  - title: "TypeScript"
    href: "https://www.typescriptlang.org/"
  - title: "Node.js"
    href: "https://nodejs.org/en"
  - title: "Hono"
    href: "https://hono.dev/"
  - title: "React"
    href: "https://react.dev/"
  - title: "PostgreSQL"
    href: "https://www.postgresql.org/"
  - title: "GCP"
    href: "https://cloud.google.com/"
  - title: "OpenAI"
    href: "https://platform.openai.com/docs/overview"
video: "videos/credentialing-api.mp4"
---

## Overview

The Wreno Credentialing API is an AI-powered document processing platform that automates the intake, analysis, and validation of compliance documents at scale. It’s the foundation behind Wreno’s vendor compliance product, enabling instant verification of insurance certificates, W9s, and trade licenses without manual intervention.

This system was purpose-built to replace fragmented, human-heavy workflows with a fast, structured, and developer-friendly interface. It ingests documents, classifies and parses key data, and integrates third-party validation — all in real time.

---

## System Design & Architecture

The platform is built around a flexible processing pipeline that sends extracted data through webhooks in real time. Each step in the pipeline is modular, allowing us to easily plug in different AI models for classification, extraction, or verification depending on the document type.

The pipeline is deeply integrated with Wreno’s document ingestion workflows and supports both synchronous and async operations — including fallback paths for human-in-the-loop escalation when confidence thresholds aren’t met.

We leveraged:

- **OpenAPI 3.0** contracts to define and enforce strict type-safe API interfaces
- **Hono + TypeScript** for a lightweight, performant backend framework
- **Drizzle ORM** with **PostgreSQL** to manage credentialing states and track structured outputs
- **BullMQ** queues to manage distributed processing and retries
- **Google Cloud Pub/Sub** and **Cloud Run** for event-driven workloads
- **Redis** for caching intermediate results and request de-duplication
- **Firebase Auth** to securely associate document processing with vendor identity

<iframe  width="100%" height="450" src="https://embed.figma.com/board/jyaECb9bedjCEaleBA6mCK/Wreno-OpenAPI?node-id=0-1&embed-host=share" allowFullScreen></iframe>

---

## Key Features

### ✅ Document Classification & Extraction

Documents are automatically routed through a classification model to determine type (COI, W9, etc.) and matched against the requirement. We use a combination of rule-based and ML-driven parsing to extract structured data — including effective dates, policy numbers, and legal entities — with probabilistic confidence scoring.

### 🔍 Real-Time Verification

The API supports plug-and-play verification modules:

- **Email-based verification** via automated outreach to insurers
- **Web scraping agents** that simulate browser interactions to pull data from insurer sites
- **Third-party API integrations** for systems that support lookup-based validation

If documents can’t be fully verified automatically, the system escalates to a human reviewer and queues a task in the admin dashboard.

### 🔁 Webhook-Driven Flow

Every step of the pipeline can emit a webhook — allowing upstream systems (like vendor onboarding UIs or audit tools) to reflect document status in real time. This gives users live feedback on compliance and unlocks powerful automation for our customers.

---

## Results & Outcomes

- Cut manual review load by **90%**, improving turnaround times and reducing staffing needs
- Achieved **99.9% uptime** with robust queue handling and fallbacks across services
- Enabled **type-safe, scalable development** through OpenAPI-first design and strict TypeScript enforcement
- Supported plug-in AI infrastructure, allowing us to iterate on models without re-architecting the pipeline
- Unlocked new use cases across compliance, legal, and insurance through consistent, trusted outputs

---

## Role & Contributions

I was a main contributor to the development of Wreno’s Credentialing Platform, leading both the product strategy and technical execution. I helped design and rolled out the OpenAPI infrastructure, implemented the core data extraction endpoint, and implemented the integration of the AI logic for document classification, parsing, and compliance verification.

Beyond engineering, I translated complex product requirements into scoped technical work using a customized WSJF prioritization model, managed engineering capacity planning, and ran sprint ceremonies. I also collaborated directly with operations and product stakeholders to shape our feature roadmap and managed the designer to ensure the user experience aligned with real-world workflows.

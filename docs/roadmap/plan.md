# SkyPath Sentinel: Project Roadmap

## 1. Architectural Philosophy
*   **Deterministic Safety Layer:** Offloads geospatial math to a local, type-safe engine to eliminate LLM hallucinations.
*   **Impact-Centric Tool Design:** Tools return diagnostic conclusions (Go/No-Go), not raw data, forcing agents to rely on pre-calculated safety verdicts.
*   **Gatekeeper/Diagnostic Pattern:** High-level orchestrators handle mission-level decisions, while granular tools provide diagnostic reasoning.

## 2. Project Organization
*   `src/`: Application logic, interfaces, infrastructure providers, and MCP tools.
*   `data/`: Local-first data (gitignored). Used for static assets (airport metadata) and persistent local caching.
*   `bin/` / `lib/`: AWS CDK infrastructure (Dormant for local development).
*   `docs/`: Core documentation (Business Plan, Tech Stack, Dependencies).
*   `docs/roadmap/`: Living project plan (gitignored).

## 3. Environment Strategy
*   **`APP_ENV` variable:** Switches between local/production implementations using a Factory/Dependency Injection pattern.
    *   `APP_ENV=local`: Injects `LocalStorageProvider` and `FileCache`.
    *   `APP_ENV=prod`: Injects `S3StorageProvider` and `DynamoDbCache`.

## 4. Core Toolset (Unified Diagnostics)
*   `analyze_flight_mission(flight_plan)`: Unified diagnostic engine for mission-level planning.
*   `get_airport_status(airport_code)`: Comprehensive diagnostic tool for airport weather and NOTAM status.
*   `get_hazard_summary(poi_coordinates, radius_miles, hazard_filter)`: Situational awareness for hazards within a radius.

## 5. Data Pipeline & Management
*   **Sync Manager:** Modular component to handle data synchronization.
    *   **Local:** On-demand sync script refreshes `data/static`.
    *   **Prod:** Scheduled workflow (EventBridge/GitHub Action) synchronizes data to S3.

## 6. Operational Excellence
*   **CI/CD:** Automated via GitHub Actions.
*   **Testing:** Unit/Integration testing using Jest.
*   **Observability:** Structured logging via CloudWatch.
*   **Security:** API key management via AWS Secrets Manager.

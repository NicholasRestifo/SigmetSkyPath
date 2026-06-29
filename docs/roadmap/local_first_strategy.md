# SkyPath Sentinel: Local-First Architectural Strategy

## 1. Architectural Strategy: Provider & Factory Pattern
*   **Objective:** Establish a strict Local vs. Deployed architecture split.
*   **Local Focus:** Prioritize full local functionality. Deployed implementations are limited strictly to **stubs** that throw errors, ensuring the focus remains on local development and testability.
*   **Factory Pattern:** A central `ProviderFactory` will consume `APP_ENV` (and `DATA_MODE` for local) to inject the correct concrete implementation.
    *   `APP_ENV=local`: Injects fully functional providers (interacting with live APIs/local file storage).
        *   `DATA_MODE=live`: Injects `LiveApiFetcher` for real-time local testing.
        *   `DATA_MODE=canned`: Injects `CannedDataFetcher` for deterministic local tests.
    *   `APP_ENV=prod`: Injects stubbed provider implementations (throwing `NotImplementedError`) for all cloud services to ensure deployment safety.

## 2. Architectural Standards
*   **Error Handling:** Use a uniform `Result<T>` pattern for all infrastructure and tool interactions.
*   **Schema Validation:** Use `zod` at the boundaries of all `IDataFetcher` implementations.
*   **Configuration:** Use `dotenv` for local environment variable loading.
*   **Operational Safety:** Rely on staging/deployment environments for safety; ensure `IDataPopulator` provides robust logging.

## 3. Core Interface & Type Definitions (src/infrastructure/interfaces/)
*   `IStorageProvider`: Abstracts persistent storage (File vs S3).
*   `ICacheProvider`: Abstracts caching layer (Local vs DynamoDB).
*   `IDataPopulator`: Abstracts bulk data import into storage.
*   **Refined `IDataFetcher` Architecture:**
    *   `IDataFetcher<TQuery, TResult>`: Base generic interface for all data acquisition.
    *   **Specific Interfaces:** `IAirportFetcher`, `IWeatherFetcher`, `IHazardFetcher`, each extending the base generic interface with concrete types.
    *   **Stubbed Types:** `Airport`, `Weather`, `Hazard` (Stubbed for now; to be refined as API data structures are finalized).

## 4. Local Development Data Management
*   **Automated Admin Tools:** CLI scripts to populate persistent/durable local storage with static datasets.
*   **Environment-Aware Targets:** Population tools will utilize the `ProviderFactory` to ensure static data is loaded into local targets (e.g., local files).

## 5. Implementation Phases (Priority: Local First)
*   **Phase 1: Foundation (Local):** 
    *   Create `src/infrastructure/interfaces/`.
    *   Implement `ProviderFactory`.
    *   Implement functional `Local...` providers, `LiveApiFetcher`, and `CannedDataFetcher`.
*   **Phase 2: Local Data Population Tools:** Implement CLI admin scripts for importing static data locally using `IDataPopulator`.
*   **Phase 3: Deployment Stubs:** 
    *   Implement `Deployed...` stubs (throwing `NotImplementedError`) in `src/infrastructure/providers/deployed/`.
*   **Phase 4: Integration & Testing:** 
    *   Refactor core tools to depend solely on interfaces.
    *   Ensure all tools function correctly in `APP_ENV=local` with both `DATA_MODE` settings.

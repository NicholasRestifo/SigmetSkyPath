# SkyPath Sentinel: Local-First Architectural Strategy

## 1. Architectural Strategy: Provider & Factory Pattern
*   **Objective:** Establish a strict Local vs. Deployed architecture split using a Provider abstraction pattern.
*   **Strategy:** Define core interfaces (`IStorageProvider`, `ICacheProvider`, `IDataFetcher`) to decouple application logic from infrastructure.
*   **Factory Pattern:** A central `ProviderFactory` will consume `APP_ENV` (and `DATA_MODE` for local) to inject the correct concrete implementation at runtime.
    *   `APP_ENV=local`: Injects functional providers. 
        *   `DATA_MODE=live`: Injects `LiveApiFetcher` for real-time testing.
        *   `DATA_MODE=canned`: Injects `CannedDataFetcher` for deterministic testing.
    *   `APP_ENV=prod`: Injects stubbed provider implementations (throwing `NotImplementedError`) for all cloud services to ensure deployment safety.

## 2. Core Interface Definitions (src/infrastructure/interfaces/)
*   `IStorageProvider`: Abstracts persistent storage (File vs S3).
*   `ICacheProvider`: Abstracts caching layer (Local vs DynamoDB).
*   `IDataFetcher`: Abstracts data acquisition. 
    *   *Note:* The implementation (`LiveApiFetcher` vs `CannedDataFetcher`) is resolved by the `ProviderFactory` based on `DATA_MODE`.

## 3. Implementation Phases
*   **Phase 1: Foundation:** 
    *   Create `src/infrastructure/interfaces/`.
    *   Implement `ProviderFactory`.
    *   Implement functional `Local...` providers and both `LiveApiFetcher` and `CannedDataFetcher`.
*   **Phase 2: Deployment Stubs:** 
    *   Implement `Deployed...` stubs (returning errors/warnings) in `src/infrastructure/providers/deployed/`.
*   **Phase 3: Integration & Testing:** 
    *   Refactor core tools (`analyze_flight_mission`, etc.) to depend solely on interfaces.
    *   Ensure all tools function correctly in `APP_ENV=local` with both `DATA_MODE=live` and `DATA_MODE=canned`.
*   **Phase 4: Future Deployed Implementation:** 
    *   Replace `Deployed...` stubs with actual cloud-native implementations (S3, DynamoDB) and introduce infrastructure-as-code (CDK).

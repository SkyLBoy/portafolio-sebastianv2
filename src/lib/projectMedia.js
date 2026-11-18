import {
  MockCorporateWeb,
  MockInventorySEC,
  MockInventoryVincco,
  MockPresentationGen,
  MockDocGen,
} from "../components/portfolio/ProjectMocks";

// Assign a real screenshot path, relative to public, when one is available.
// Until then, show the existing illustration with an explicit caption.
export const PROJECT_MEDIA = {
  "vincco-website": { image: null, Illustration: MockCorporateWeb },
  "sec-inventory": { image: null, Illustration: MockInventorySEC },
  "vincco-inventory": { image: null, Illustration: MockInventoryVincco },
  "presentation-generator": { image: null, Illustration: MockPresentationGen },
  "documentation-generator": { image: null, Illustration: MockDocGen },
};

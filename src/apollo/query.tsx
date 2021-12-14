import { gql } from "@apollo/client";

export const HERO_QUERY = gql`
  query heroQuery {
    heroes {
      heading
      subheading
      herotext
    }
  }
`;
export const ABOUT_QUERY = gql`
  query aboutQuery {
    abouts {
      philosophy
      heading
      subtext
      href1 {
        text
      }
    }
  }
`;

export const FEATURE_QUERY = gql`
  query featureQuery {
    features {
      featureText
      featuresArray
    }
  }
`;

export const TOKENOMICS_QUERY = gql`
  query tokenomicsQuery {
    tokenomics {
      tokenomicText
      tokenFeatures
    }
  }
`;

export const COMMUNITY_QUERY = gql`
  query communityQuery {
    communities {
      communityText
    }
  }
`;

export const NFT_QUERY = gql`
  query nftQuery {
    nfts {
      nftText
    }
  }
`;

export const PARTNER_QUERY = gql`
  query partnerQuery {
    partners {
      partnerText
    }
  }
`;

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

export const STEP1_QUERY = gql`
  query step1Query {
    step1S {
      heading
      subheading
      steptext
      images
    }
  }
`;

export const STEP2_QUERY = gql`
  query step2Query {
    step2S {
      heading
      subheading
      steptext
      images
    }
  }
`;

export const STEP3_QUERY = gql`
  query step3Query {
    step3S {
      heading
      subheading
      steptext
      images
    }
  }
`;

export const STEP4_QUERY = gql`
  query step4Query {
    step4S {
      heading
      subheading
      steptext
      images
    }
  }
`;

export const VIDEO_QUERY = gql`
  query videoQuery {
    videos {
      src
    }
  }
`;

/**
 * Translation shape for Dueydo landing page.
 * Every locale JSON must satisfy this interface.
 */
export interface Translations {
  meta: {
    title: string;
    description: string;
    ogImageAlt: string;
  };

  hero: {
    tagline: string;
  };

  pillars: {
    srOnlyHeading: string;
    fortified: {
      title: string;
      description: string;
      descriptionShort: string;
    };
    ephemeral: {
      title: string;
      description: string;
      descriptionShort: string;
    };
    sovereign: {
      title: string;
      description: string;
      descriptionShort: string;
    };
  };

  features: {
    sectionTitle: string;
    sectionSubtitle: string;
    threads: {
      title: string;
      description: string;
    };
    posts: {
      title: string;
      description: string;
    };
    duressPin: {
      title: string;
      description: string;
    };
    encryptedMedia: {
      title: string;
      description: string;
    };
  };

  screenshots: {
    sectionTitle: string;
    sectionSubtitle: string;
    chatCaption: string;
    threadsCaption: string;
    postsCaption: string;
    postDetailCaption: string;
    chatLightAlt: string;
    chatDarkAlt: string;
    threadLightAlt: string;
    threadDarkAlt: string;
    postsLightAlt: string;
    postsDarkAlt: string;
    postDetailLightAlt: string;
    postDetailDarkAlt: string;
  };

  closing: {
    quote: string;
    comingSoon: string;
  };

  footer: {
    copyright: string;
  };

  schema: {
    appDescription: string;
    orgDescription: string;
    websiteDescription: string;
  };

  languageSwitcher: {
    label: string;
  };
}

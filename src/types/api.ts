/* eslint-disable @typescript-eslint/no-namespace */
export namespace PhotoData {
  export type Response = {
    type: string;
    status: number;
    response: Photo[];
    originalResponse: {
      size: number;
      timeout: number;
    };
  };

  export type Photo = {
    id: string;
    slug: string | null;
    created_at: string | null;
    updated_at: string | null;
    promoted_at: string | null;
    width: number;
    height: number;
    color: string | null;
    blur_hash: string | null;
    description: string | null;
    alt_description: string | null;
    breadcrumbs: any[];
    urls: Urls;
    links: Links;
    likes: number | null;
    liked_by_user: boolean | null;
    current_user_collections: any[];
    sponsorship: any | null;
    topic_submissions: {
      [key: string]: {
        status: string | null;
        approved_on?: string | null;
      };
    };
    user: User;
    exif: Exif;
    location: Location;
    views: number | null;
    downloads: number | null;
  };

  export type Urls = {
    raw: string | null;
    full: string | null;
    regular: string | null;
    small: string | null;
    thumb: string | null;
    small_s3: string | null;
  };

  export type Links = {
    self?: string | null;
    html?: string | null;
    download?: string | null;
    download_location?: string | null;
    photos?: string | null;
    likes?: string | null;
    portfolio?: string | null;
    following?: string | null;
    followers?: string | null;
  };

  export type User = {
    id: string | null;
    updated_at: string | null;
    username: string | null;
    name: string | null;
    first_name: string | null;
    last_name: string | null;
    twitter_username: string | null;
    portfolio_url: string | null;
    bio: string | null;
    location: string | null;
    links: Links;
    profile_image: {
      small: string | null;
      medium: string | null;
      large: string | null;
    };
    instagram_username: string | null;
    total_collections: number | null;
    total_likes: number | null;
    total_photos: number | null;
    accepted_tos: boolean | null;
    for_hire: boolean | null;
    social: {
      instagram_username: string | null;
      portfolio_url: string | null;
      twitter_username: string | null;
      paypal_email: string | null;
    };
  };

  export type Exif = {
    make: string | null;
    model: string | null;
    name: string | null;
    exposure_time: string | null;
    aperture: string | null;
    focal_length: string | null;
    iso: number | null;
  };

  export type Location = {
    name: string | null;
    city: string | null;
    country: string | null;
    position: {
      latitude: number | null;
      longitude: number | null;
    };
  };
}

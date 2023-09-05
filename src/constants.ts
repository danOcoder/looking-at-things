import type { PhotoData } from "./types/api";

export const html = String.raw;

export const INITIAL_DATA_COUNT = 30;

export const DUMMY_RESPONSE: PhotoData.Response = {
  type: "type",
  status: 200,
  response: [],
  originalResponse: {
    size: 0,
    timeout: 0,
  },
};

export const DUMMY_DATA: PhotoData.Photo[] = [
  {
    id: "NE0YdkW6TSs",
    slug: "a-close-up-of-a-piece-of-art-made-out-of-legos-NE0YdkW6TSs",
    created_at: "2023-08-21T08:33:23Z",
    updated_at: "2023-08-27T03:39:43Z",
    promoted_at: "2023-08-23T07:08:01Z",
    width: 4096,
    height: 4096,
    color: "#d9d9f3",
    blur_hash: "LIN0l8ob8^WX%h-=V@WB-:IAxvjE",
    description:
      "An artist’s illustration of artificial intelligence (AI). This image represents the role of AI in computer optimisation for reduced energy consumption. It was created by Linus Zoll as part of the Visualising AI project launched by Google DeepMind.",
    alt_description: "a close up of a piece of art made out of legos",
    breadcrumbs: [],
    urls: {
      raw: "https://images.unsplash.com/photo-1692606674482-effe67e384d9?ixid=M3wyOTM4Njl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTMxNjIzMDZ8&ixlib=rb-4.0.3",
      full: "https://images.unsplash.com/photo-1692606674482-effe67e384d9?crop=entropy&cs=srgb&fm=jpg&ixid=M3wyOTM4Njl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTMxNjIzMDZ8&ixlib=rb-4.0.3&q=85",
      regular:
        "https://images.unsplash.com/photo-1692606674482-effe67e384d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyOTM4Njl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTMxNjIzMDZ8&ixlib=rb-4.0.3&q=80&w=1080",
      small:
        "https://images.unsplash.com/photo-1692606674482-effe67e384d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyOTM4Njl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTMxNjIzMDZ8&ixlib=rb-4.0.3&q=80&w=400",
      thumb:
        "https://images.unsplash.com/photo-1692606674482-effe67e384d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyOTM4Njl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTMxNjIzMDZ8&ixlib=rb-4.0.3&q=80&w=200",
      small_s3:
        "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1692606674482-effe67e384d9",
    },
    links: {
      self: "https://api.unsplash.com/photos/a-close-up-of-a-piece-of-art-made-out-of-legos-NE0YdkW6TSs",
      html: "https://unsplash.com/photos/a-close-up-of-a-piece-of-art-made-out-of-legos-NE0YdkW6TSs",
      download:
        "https://unsplash.com/photos/NE0YdkW6TSs/download?ixid=M3wyOTM4Njl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTMxNjIzMDZ8",
      download_location:
        "https://api.unsplash.com/photos/NE0YdkW6TSs/download?ixid=M3wyOTM4Njl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTMxNjIzMDZ8",
    },
    likes: 42,
    liked_by_user: false,
    current_user_collections: [],
    sponsorship: null,
    topic_submissions: {
      "3d-renders": {
        status: "unevaluated",
      },
    },
    user: {
      id: "1yTi39xvCxo",
      updated_at: "2023-08-27T18:37:16Z",
      username: "googledeepmind",
      name: "Google DeepMind",
      first_name: "Google DeepMind",
      last_name: null,
      twitter_username: "GoogleDeepMind",
      portfolio_url: "http://www.deepmind.com",
      bio: "We’re a team of scientists, engineers, ethicists and more, committed to solving intelligence, to advance science and benefit humanity.",
      location: null,
      links: {
        self: "https://api.unsplash.com/users/googledeepmind",
        html: "https://unsplash.com/@googledeepmind",
        photos: "https://api.unsplash.com/users/googledeepmind/photos",
        likes: "https://api.unsplash.com/users/googledeepmind/likes",
        portfolio: "https://api.unsplash.com/users/googledeepmind/portfolio",
        following: "https://api.unsplash.com/users/googledeepmind/following",
        followers: "https://api.unsplash.com/users/googledeepmind/followers",
      },
      profile_image: {
        small:
          "https://images.unsplash.com/profile-1683285791664-60398c9d0035image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
        medium:
          "https://images.unsplash.com/profile-1683285791664-60398c9d0035image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
        large:
          "https://images.unsplash.com/profile-1683285791664-60398c9d0035image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128",
      },
      instagram_username: "googledeepmind",
      total_collections: 5,
      total_likes: 0,
      total_photos: 141,
      accepted_tos: true,
      for_hire: false,
      social: {
        instagram_username: "googledeepmind",
        portfolio_url: "http://www.deepmind.com",
        twitter_username: "GoogleDeepMind",
        paypal_email: null,
      },
    },
    exif: {
      make: null,
      model: null,
      name: null,
      exposure_time: null,
      aperture: null,
      focal_length: null,
      iso: null,
    },
    location: {
      name: null,
      city: null,
      country: null,
      position: {
        latitude: 0,
        longitude: 0,
      },
    },
    views: 190270,
    downloads: 1499,
  },
  {
    id: "bkR_ghbcuHE",
    slug: "a-black-background-with-a-red-and-black-design-bkR_ghbcuHE",
    created_at: "2023-07-24T14:16:28Z",
    updated_at: "2023-08-27T12:41:00Z",
    promoted_at: "2023-08-03T19:32:01Z",
    width: 3000,
    height: 3000,
    color: "#262626",
    blur_hash: "L12$58M|4.xuWBj[ofWB4.t7%MNG",
    description: "By FAKURIANDESIGN",
    alt_description: "a black background with a red and black design",
    breadcrumbs: [],
    urls: {
      raw: "https://images.unsplash.com/photo-1690208072689-e716b8dccd6b?ixid=M3wyOTM4Njl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTMxNjIzMDZ8&ixlib=rb-4.0.3",
      full: "https://images.unsplash.com/photo-1690208072689-e716b8dccd6b?crop=entropy&cs=srgb&fm=jpg&ixid=M3wyOTM4Njl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTMxNjIzMDZ8&ixlib=rb-4.0.3&q=85",
      regular:
        "https://images.unsplash.com/photo-1690208072689-e716b8dccd6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyOTM4Njl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTMxNjIzMDZ8&ixlib=rb-4.0.3&q=80&w=1080",
      small:
        "https://images.unsplash.com/photo-1690208072689-e716b8dccd6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyOTM4Njl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTMxNjIzMDZ8&ixlib=rb-4.0.3&q=80&w=400",
      thumb:
        "https://images.unsplash.com/photo-1690208072689-e716b8dccd6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyOTM4Njl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTMxNjIzMDZ8&ixlib=rb-4.0.3&q=80&w=200",
      small_s3:
        "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1690208072689-e716b8dccd6b",
    },
    links: {
      self: "https://api.unsplash.com/photos/a-black-background-with-a-red-and-black-design-bkR_ghbcuHE",
      html: "https://unsplash.com/photos/a-black-background-with-a-red-and-black-design-bkR_ghbcuHE",
      download:
        "https://unsplash.com/photos/bkR_ghbcuHE/download?ixid=M3wyOTM4Njl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTMxNjIzMDZ8",
      download_location:
        "https://api.unsplash.com/photos/bkR_ghbcuHE/download?ixid=M3wyOTM4Njl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTMxNjIzMDZ8",
    },
    likes: 52,
    liked_by_user: false,
    current_user_collections: [],
    sponsorship: null,
    topic_submissions: {
      "arts-culture": {
        status: "rejected",
      },
      experimental: {
        status: "rejected",
      },
      "textures-patterns": {
        status: "rejected",
      },
      wallpapers: {
        status: "rejected",
      },
      "3d-renders": {
        status: "approved",
        approved_on: "2023-07-26T12:21:49Z",
      },
    },
    user: {
      id: "Kg7OSqFJfQE",
      updated_at: "2023-08-27T15:28:40Z",
      username: "fakurian",
      name: "Milad Fakurian",
      first_name: "Milad",
      last_name: "Fakurian",
      twitter_username: "miladfakurian",
      portfolio_url: "https://linktr.ee/fakurian",
      bio: "Brand designer l 3D artist with a passion for minimalism.\r\nIstanbul based l collaborating worldwide l  Let's talk mbfakurian@gmail.com l  onXRP team member  ",
      location: "Istanbul ",
      links: {
        self: "https://api.unsplash.com/users/fakurian",
        html: "https://unsplash.com/@fakurian",
        photos: "https://api.unsplash.com/users/fakurian/photos",
        likes: "https://api.unsplash.com/users/fakurian/likes",
        portfolio: "https://api.unsplash.com/users/fakurian/portfolio",
        following: "https://api.unsplash.com/users/fakurian/following",
        followers: "https://api.unsplash.com/users/fakurian/followers",
      },
      profile_image: {
        small:
          "https://images.unsplash.com/profile-1692035354777-e7e3ec591b4eimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
        medium:
          "https://images.unsplash.com/profile-1692035354777-e7e3ec591b4eimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
        large:
          "https://images.unsplash.com/profile-1692035354777-e7e3ec591b4eimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128",
      },
      instagram_username: "fakuriandesign",
      total_collections: 1,
      total_likes: 1506,
      total_photos: 547,
      accepted_tos: true,
      for_hire: true,
      social: {
        instagram_username: "fakuriandesign",
        portfolio_url: "https://linktr.ee/fakurian",
        twitter_username: "miladfakurian",
        paypal_email: null,
      },
    },
    exif: {
      make: null,
      model: null,
      name: null,
      exposure_time: null,
      aperture: null,
      focal_length: null,
      iso: null,
    },
    location: {
      name: "Las Vegas, NV, USA",
      city: "Las Vegas",
      country: "United States",
      position: {
        latitude: 36.171563,
        longitude: -115.139101,
      },
    },
    views: 388255,
    downloads: 3870,
  },
  {
    id: "eKpBUgbSvWU",
    slug: "a-view-of-the-night-sky-with-the-milky-in-the-background-eKpBUgbSvWU",
    created_at: "2023-08-16T17:46:34Z",
    updated_at: "2023-08-26T21:41:28Z",
    promoted_at: "2023-08-20T08:08:01Z",
    width: 7156,
    height: 7641,
    color: "#262626",
    blur_hash: "LC8NkNoh9Zs,E2bHt6ay0KjY%2R*",
    description: "- wish upon a shooting star -",
    alt_description: "a view of the night sky with the milky in the background",
    breadcrumbs: [],
    urls: {
      raw: "https://images.unsplash.com/photo-1692207900215-604d478d24c2?ixid=M3wyOTM4Njl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTMxNjIzMDZ8&ixlib=rb-4.0.3",
      full: "https://images.unsplash.com/photo-1692207900215-604d478d24c2?crop=entropy&cs=srgb&fm=jpg&ixid=M3wyOTM4Njl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTMxNjIzMDZ8&ixlib=rb-4.0.3&q=85",
      regular:
        "https://images.unsplash.com/photo-1692207900215-604d478d24c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyOTM4Njl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTMxNjIzMDZ8&ixlib=rb-4.0.3&q=80&w=1080",
      small:
        "https://images.unsplash.com/photo-1692207900215-604d478d24c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyOTM4Njl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTMxNjIzMDZ8&ixlib=rb-4.0.3&q=80&w=400",
      thumb:
        "https://images.unsplash.com/photo-1692207900215-604d478d24c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyOTM4Njl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTMxNjIzMDZ8&ixlib=rb-4.0.3&q=80&w=200",
      small_s3:
        "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1692207900215-604d478d24c2",
    },
    links: {
      self: "https://api.unsplash.com/photos/a-view-of-the-night-sky-with-the-milky-in-the-background-eKpBUgbSvWU",
      html: "https://unsplash.com/photos/a-view-of-the-night-sky-with-the-milky-in-the-background-eKpBUgbSvWU",
      download:
        "https://unsplash.com/photos/eKpBUgbSvWU/download?ixid=M3wyOTM4Njl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTMxNjIzMDZ8",
      download_location:
        "https://api.unsplash.com/photos/eKpBUgbSvWU/download?ixid=M3wyOTM4Njl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTMxNjIzMDZ8",
    },
    likes: 66,
    liked_by_user: false,
    current_user_collections: [],
    sponsorship: null,
    topic_submissions: {},
    user: {
      id: "cHb-HGVl4KE",
      updated_at: "2023-08-26T07:53:35Z",
      username: "jayphoto",
      name: "Justin Wolff",
      first_name: "Justin",
      last_name: "Wolff",
      twitter_username: null,
      portfolio_url: "https://www.justinwolffphoto.com",
      bio: "Hey everyone! My name is Justin Wolff. I am a Landscape/Portrait/Astrophotographer based out of San Antonio, Texas.",
      location: "San Antonio, Texas",
      links: {
        self: "https://api.unsplash.com/users/jayphoto",
        html: "https://unsplash.com/@jayphoto",
        photos: "https://api.unsplash.com/users/jayphoto/photos",
        likes: "https://api.unsplash.com/users/jayphoto/likes",
        portfolio: "https://api.unsplash.com/users/jayphoto/portfolio",
        following: "https://api.unsplash.com/users/jayphoto/following",
        followers: "https://api.unsplash.com/users/jayphoto/followers",
      },
      profile_image: {
        small:
          "https://images.unsplash.com/profile-1682608780044-e6e7a4eac804image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
        medium:
          "https://images.unsplash.com/profile-1682608780044-e6e7a4eac804image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
        large:
          "https://images.unsplash.com/profile-1682608780044-e6e7a4eac804image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128",
      },
      instagram_username: "Justin.c.wolff",
      total_collections: 0,
      total_likes: 18,
      total_photos: 118,
      accepted_tos: true,
      for_hire: true,
      social: {
        instagram_username: "Justin.c.wolff",
        portfolio_url: "https://www.justinwolffphoto.com",
        twitter_username: null,
        paypal_email: null,
      },
    },
    exif: {
      make: null,
      model: null,
      name: null,
      exposure_time: null,
      aperture: null,
      focal_length: null,
      iso: null,
    },
    location: {
      name: "Enchanted Rock, Texas, USA",
      city: null,
      country: "United States",
      position: {
        latitude: 30.506579,
        longitude: -98.81893,
      },
    },
    views: 217197,
    downloads: 4189,
  },
  {
    id: "5znwKTDxxJM",
    slug: "looking-up-at-the-top-of-a-tall-building-5znwKTDxxJM",
    created_at: "2023-07-29T13:09:45Z",
    updated_at: "2023-08-26T21:41:06Z",
    promoted_at: "2023-08-01T15:32:01Z",
    width: 3621,
    height: 3927,
    color: "#59738c",
    blur_hash: "LO7eh%NGo~WX.TRkbHays.ayV?j[",
    description: null,
    alt_description: "looking up at the top of a tall building",
    breadcrumbs: [],
    urls: {
      raw: "https://images.unsplash.com/photo-1690636169128-34a4a1bce684?ixid=M3wyOTM4Njl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTMxNjIzMDZ8&ixlib=rb-4.0.3",
      full: "https://images.unsplash.com/photo-1690636169128-34a4a1bce684?crop=entropy&cs=srgb&fm=jpg&ixid=M3wyOTM4Njl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTMxNjIzMDZ8&ixlib=rb-4.0.3&q=85",
      regular:
        "https://images.unsplash.com/photo-1690636169128-34a4a1bce684?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyOTM4Njl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTMxNjIzMDZ8&ixlib=rb-4.0.3&q=80&w=1080",
      small:
        "https://images.unsplash.com/photo-1690636169128-34a4a1bce684?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyOTM4Njl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTMxNjIzMDZ8&ixlib=rb-4.0.3&q=80&w=400",
      thumb:
        "https://images.unsplash.com/photo-1690636169128-34a4a1bce684?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyOTM4Njl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTMxNjIzMDZ8&ixlib=rb-4.0.3&q=80&w=200",
      small_s3:
        "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1690636169128-34a4a1bce684",
    },
    links: {
      self: "https://api.unsplash.com/photos/looking-up-at-the-top-of-a-tall-building-5znwKTDxxJM",
      html: "https://unsplash.com/photos/looking-up-at-the-top-of-a-tall-building-5znwKTDxxJM",
      download:
        "https://unsplash.com/photos/5znwKTDxxJM/download?ixid=M3wyOTM4Njl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTMxNjIzMDZ8",
      download_location:
        "https://api.unsplash.com/photos/5znwKTDxxJM/download?ixid=M3wyOTM4Njl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTMxNjIzMDZ8",
    },
    likes: 43,
    liked_by_user: false,
    current_user_collections: [],
    sponsorship: null,
    topic_submissions: {},
    user: {
      id: "SHrj8bHW0wg",
      updated_at: "2023-08-20T13:00:18Z",
      username: "levish",
      name: "muskroom",
      first_name: "muskroom",
      last_name: null,
      twitter_username: null,
      portfolio_url: null,
      bio: null,
      location: "south korea",
      links: {
        self: "https://api.unsplash.com/users/levish",
        html: "https://unsplash.com/@levish",
        photos: "https://api.unsplash.com/users/levish/photos",
        likes: "https://api.unsplash.com/users/levish/likes",
        portfolio: "https://api.unsplash.com/users/levish/portfolio",
        following: "https://api.unsplash.com/users/levish/following",
        followers: "https://api.unsplash.com/users/levish/followers",
      },
      profile_image: {
        small:
          "https://images.unsplash.com/profile-1647924713207-92fd4d07ab46image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
        medium:
          "https://images.unsplash.com/profile-1647924713207-92fd4d07ab46image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
        large:
          "https://images.unsplash.com/profile-1647924713207-92fd4d07ab46image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128",
      },
      instagram_username: "muskroom.color",
      total_collections: 0,
      total_likes: 2955,
      total_photos: 88,
      accepted_tos: true,
      for_hire: false,
      social: {
        instagram_username: "muskroom.color",
        portfolio_url: null,
        twitter_username: null,
        paypal_email: null,
      },
    },
    exif: {
      make: "FUJIFILM",
      model: "XF10",
      name: "FUJIFILM, XF10",
      exposure_time: "1/420",
      aperture: "8.0",
      focal_length: "18.5",
      iso: 200,
    },
    location: {
      name: null,
      city: null,
      country: null,
      position: {
        latitude: 0,
        longitude: 0,
      },
    },
    views: 249295,
    downloads: 2291,
  },
  {
    id: "Xrv7PZDqUAo",
    slug: "a-building-with-a-pipe-in-the-middle-of-it-Xrv7PZDqUAo",
    created_at: "2023-08-07T13:31:18Z",
    updated_at: "2023-08-26T22:41:20Z",
    promoted_at: "2023-08-12T07:56:01Z",
    width: 5006,
    height: 5350,
    color: "#264040",
    blur_hash: "LGAAzKNHn$bIt7WBaykC4Ts:Rkad",
    description:
      "The complex of the Catholic Heiligkreuzkirche (Church of the Holy Cross) was built in 1966-69 by Walter M. Förderer .The column-free, gradually opening semi-circular main room is mostly indirectly lit, which makes it seem like a rock cave Source : Chur Tourismus",
    alt_description: "a building with a pipe in the middle of it",
    breadcrumbs: [],
    urls: {
      raw: "https://images.unsplash.com/photo-1691415058595-d18acf8bd102?ixid=M3wyOTM4Njl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTMxNjIzMDZ8&ixlib=rb-4.0.3",
      full: "https://images.unsplash.com/photo-1691415058595-d18acf8bd102?crop=entropy&cs=srgb&fm=jpg&ixid=M3wyOTM4Njl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTMxNjIzMDZ8&ixlib=rb-4.0.3&q=85",
      regular:
        "https://images.unsplash.com/photo-1691415058595-d18acf8bd102?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyOTM4Njl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTMxNjIzMDZ8&ixlib=rb-4.0.3&q=80&w=1080",
      small:
        "https://images.unsplash.com/photo-1691415058595-d18acf8bd102?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyOTM4Njl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTMxNjIzMDZ8&ixlib=rb-4.0.3&q=80&w=400",
      thumb:
        "https://images.unsplash.com/photo-1691415058595-d18acf8bd102?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyOTM4Njl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTMxNjIzMDZ8&ixlib=rb-4.0.3&q=80&w=200",
      small_s3:
        "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1691415058595-d18acf8bd102",
    },
    links: {
      self: "https://api.unsplash.com/photos/a-building-with-a-pipe-in-the-middle-of-it-Xrv7PZDqUAo",
      html: "https://unsplash.com/photos/a-building-with-a-pipe-in-the-middle-of-it-Xrv7PZDqUAo",
      download:
        "https://unsplash.com/photos/Xrv7PZDqUAo/download?ixid=M3wyOTM4Njl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTMxNjIzMDZ8",
      download_location:
        "https://api.unsplash.com/photos/Xrv7PZDqUAo/download?ixid=M3wyOTM4Njl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTMxNjIzMDZ8",
    },
    likes: 52,
    liked_by_user: false,
    current_user_collections: [],
    sponsorship: null,
    topic_submissions: {},
    user: {
      id: "r01XoGoEPT8",
      updated_at: "2023-08-27T17:14:52Z",
      username: "rgaleriacom",
      name: "Ricardo Gomez Angel",
      first_name: "Ricardo",
      last_name: "Gomez Angel",
      twitter_username: null,
      portfolio_url: "https://www.rgaleria.com",
      bio: "I'm architect, marketing specialist and photographer. I`m working since years as freelancer photographer for different Swiss companies",
      location: "Switzerland",
      links: {
        self: "https://api.unsplash.com/users/rgaleriacom",
        html: "https://unsplash.com/@rgaleriacom",
        photos: "https://api.unsplash.com/users/rgaleriacom/photos",
        likes: "https://api.unsplash.com/users/rgaleriacom/likes",
        portfolio: "https://api.unsplash.com/users/rgaleriacom/portfolio",
        following: "https://api.unsplash.com/users/rgaleriacom/following",
        followers: "https://api.unsplash.com/users/rgaleriacom/followers",
      },
      profile_image: {
        small:
          "https://images.unsplash.com/profile-1492187901140-48ac7eff801c?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
        medium:
          "https://images.unsplash.com/profile-1492187901140-48ac7eff801c?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
        large:
          "https://images.unsplash.com/profile-1492187901140-48ac7eff801c?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128",
      },
      instagram_username: "ricardogo03",
      total_collections: 0,
      total_likes: 16844,
      total_photos: 1542,
      accepted_tos: true,
      for_hire: true,
      social: {
        instagram_username: "ricardogo03",
        portfolio_url: "https://www.rgaleria.com",
        twitter_username: null,
        paypal_email: null,
      },
    },
    exif: {
      make: "SONY",
      model: "ILCE-7RM4",
      name: "SONY, ILCE-7RM4",
      exposure_time: "1/160",
      aperture: "2.8",
      focal_length: "40.0",
      iso: 1600,
    },
    location: {
      name: "Chur, Switzerland",
      city: "Cuera",
      country: "Suiza",
      position: {
        latitude: 46.850784,
        longitude: 9.531986,
      },
    },
    views: 282577,
    downloads: 2431,
  },
  {
    id: "xN051s8bwOs",
    slug: "a-group-of-people-standing-in-a-room-xN051s8bwOs",
    created_at: "2023-08-12T03:31:18Z",
    updated_at: "2023-08-27T02:40:34Z",
    promoted_at: "2023-08-23T09:48:01Z",
    width: 3348,
    height: 3348,
    color: "#f3f3f3",
    blur_hash: "LdFY+AM{4nt6NJWBs,of00og%Mfl",
    description: "P3E2T3E4R5S6B7U8R9G5",
    alt_description: "a group of people standing in a room",
    breadcrumbs: [],
    urls: {
      raw: "https://images.unsplash.com/photo-1691810037427-9c78ebed13aa?ixid=M3wyOTM4Njl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTMxNjIzMDZ8&ixlib=rb-4.0.3",
      full: "https://images.unsplash.com/photo-1691810037427-9c78ebed13aa?crop=entropy&cs=srgb&fm=jpg&ixid=M3wyOTM4Njl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTMxNjIzMDZ8&ixlib=rb-4.0.3&q=85",
      regular:
        "https://images.unsplash.com/photo-1691810037427-9c78ebed13aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyOTM4Njl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTMxNjIzMDZ8&ixlib=rb-4.0.3&q=80&w=1080",
      small:
        "https://images.unsplash.com/photo-1691810037427-9c78ebed13aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyOTM4Njl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTMxNjIzMDZ8&ixlib=rb-4.0.3&q=80&w=400",
      thumb:
        "https://images.unsplash.com/photo-1691810037427-9c78ebed13aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyOTM4Njl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTMxNjIzMDZ8&ixlib=rb-4.0.3&q=80&w=200",
      small_s3:
        "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1691810037427-9c78ebed13aa",
    },
    links: {
      self: "https://api.unsplash.com/photos/a-group-of-people-standing-in-a-room-xN051s8bwOs",
      html: "https://unsplash.com/photos/a-group-of-people-standing-in-a-room-xN051s8bwOs",
      download:
        "https://unsplash.com/photos/xN051s8bwOs/download?ixid=M3wyOTM4Njl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTMxNjIzMDZ8",
      download_location:
        "https://api.unsplash.com/photos/xN051s8bwOs/download?ixid=M3wyOTM4Njl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTMxNjIzMDZ8",
    },
    likes: 12,
    liked_by_user: false,
    current_user_collections: [],
    sponsorship: null,
    topic_submissions: {
      "architecture-interior": {
        status: "rejected",
      },
      "arts-culture": {
        status: "rejected",
      },
      people: {
        status: "rejected",
      },
      film: {
        status: "rejected",
      },
    },
    user: {
      id: "_B_5SKlQzUY",
      updated_at: "2023-08-27T16:32:30Z",
      username: "wal28d",
      name: "Waldemar Mad",
      first_name: "Waldemar",
      last_name: "Mad",
      twitter_username: "wal28d",
      portfolio_url: "https://foundation.app/@wal28d",
      bio: "Film Photographer",
      location: "Nibbāna",
      links: {
        self: "https://api.unsplash.com/users/wal28d",
        html: "https://unsplash.com/@wal28d",
        photos: "https://api.unsplash.com/users/wal28d/photos",
        likes: "https://api.unsplash.com/users/wal28d/likes",
        portfolio: "https://api.unsplash.com/users/wal28d/portfolio",
        following: "https://api.unsplash.com/users/wal28d/following",
        followers: "https://api.unsplash.com/users/wal28d/followers",
      },
      profile_image: {
        small:
          "https://images.unsplash.com/profile-1681531556017-a837f4bae243image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
        medium:
          "https://images.unsplash.com/profile-1681531556017-a837f4bae243image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
        large:
          "https://images.unsplash.com/profile-1681531556017-a837f4bae243image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128",
      },
      instagram_username: null,
      total_collections: 6,
      total_likes: 0,
      total_photos: 89,
      accepted_tos: true,
      for_hire: true,
      social: {
        instagram_username: null,
        portfolio_url: "https://foundation.app/@wal28d",
        twitter_username: "wal28d",
        paypal_email: null,
      },
    },
    exif: {
      make: "Lomography",
      model: "Lomo LC-Wide",
      name: "Lomography, Lomo LC-Wide",
      exposure_time: null,
      aperture: null,
      focal_length: "0.0",
      iso: null,
    },
    location: {
      name: "Saint Petersburg, Russia",
      city: "Saint Petersburg",
      country: "Russia",
      position: {
        latitude: 59.93426,
        longitude: 30.335094,
      },
    },
    views: 196006,
    downloads: 1316,
  },
  {
    id: "lTvtb9fWWsk",
    slug: "a-black-background-with-pink-and-white-swirls-lTvtb9fWWsk",
    created_at: "2023-07-18T17:02:30Z",
    updated_at: "2023-08-27T07:40:44Z",
    promoted_at: "2023-08-06T16:24:02Z",
    width: 3500,
    height: 3500,
    color: "#8c5973",
    blur_hash: "LD83t~0x$kkC$+R%WVoMNZxHS1WU",
    description: "Barbie diamonds",
    alt_description: "a black background with pink and white swirls",
    breadcrumbs: [],
    urls: {
      raw: "https://images.unsplash.com/photo-1689699545029-22d52797f687?ixid=M3wyOTM4Njl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTMxNjIzMDZ8&ixlib=rb-4.0.3",
      full: "https://images.unsplash.com/photo-1689699545029-22d52797f687?crop=entropy&cs=srgb&fm=jpg&ixid=M3wyOTM4Njl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTMxNjIzMDZ8&ixlib=rb-4.0.3&q=85",
      regular:
        "https://images.unsplash.com/photo-1689699545029-22d52797f687?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyOTM4Njl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTMxNjIzMDZ8&ixlib=rb-4.0.3&q=80&w=1080",
      small:
        "https://images.unsplash.com/photo-1689699545029-22d52797f687?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyOTM4Njl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTMxNjIzMDZ8&ixlib=rb-4.0.3&q=80&w=400",
      thumb:
        "https://images.unsplash.com/photo-1689699545029-22d52797f687?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyOTM4Njl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTMxNjIzMDZ8&ixlib=rb-4.0.3&q=80&w=200",
      small_s3:
        "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1689699545029-22d52797f687",
    },
    links: {
      self: "https://api.unsplash.com/photos/a-black-background-with-pink-and-white-swirls-lTvtb9fWWsk",
      html: "https://unsplash.com/photos/a-black-background-with-pink-and-white-swirls-lTvtb9fWWsk",
      download:
        "https://unsplash.com/photos/lTvtb9fWWsk/download?ixid=M3wyOTM4Njl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTMxNjIzMDZ8",
      download_location:
        "https://api.unsplash.com/photos/lTvtb9fWWsk/download?ixid=M3wyOTM4Njl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTMxNjIzMDZ8",
    },
    likes: 45,
    liked_by_user: false,
    current_user_collections: [],
    sponsorship: null,
    topic_submissions: {},
    user: {
      id: "cpfU1u4w1Yg",
      updated_at: "2023-08-25T13:25:25Z",
      username: "ornarin",
      name: "Anastasiia Ornarin",
      first_name: "Anastasiia",
      last_name: "Ornarin",
      twitter_username: null,
      portfolio_url: "https://www.behance.net/ornarin",
      bio: null,
      location: null,
      links: {
        self: "https://api.unsplash.com/users/ornarin",
        html: "https://unsplash.com/@ornarin",
        photos: "https://api.unsplash.com/users/ornarin/photos",
        likes: "https://api.unsplash.com/users/ornarin/likes",
        portfolio: "https://api.unsplash.com/users/ornarin/portfolio",
        following: "https://api.unsplash.com/users/ornarin/following",
        followers: "https://api.unsplash.com/users/ornarin/followers",
      },
      profile_image: {
        small:
          "https://images.unsplash.com/profile-1684996551460-2f947e979e43image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
        medium:
          "https://images.unsplash.com/profile-1684996551460-2f947e979e43image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
        large:
          "https://images.unsplash.com/profile-1684996551460-2f947e979e43image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128",
      },
      instagram_username: null,
      total_collections: 0,
      total_likes: 0,
      total_photos: 101,
      accepted_tos: true,
      for_hire: false,
      social: {
        instagram_username: null,
        portfolio_url: "https://www.behance.net/ornarin",
        twitter_username: null,
        paypal_email: null,
      },
    },
    exif: {
      make: null,
      model: null,
      name: null,
      exposure_time: null,
      aperture: null,
      focal_length: null,
      iso: null,
    },
    location: {
      name: null,
      city: null,
      country: null,
      position: {
        latitude: 0,
        longitude: 0,
      },
    },
    views: 373925,
    downloads: 4342,
  },
  {
    id: "3UjFpDdWGT4",
    slug: "a-person-standing-in-front-of-a-window-at-sunset-3UjFpDdWGT4",
    created_at: "2023-08-16T04:50:05Z",
    updated_at: "2023-08-27T06:38:19Z",
    promoted_at: "2023-08-16T08:48:01Z",
    width: 2360,
    height: 2360,
    color: "#260c0c",
    blur_hash: "LrEBHLn%V[fkoLa|a{fQ0#W;kCf6",
    description: "Sunset",
    alt_description: "a person standing in front of a window at sunset",
    breadcrumbs: [],
    urls: {
      raw: "https://images.unsplash.com/photo-1692161400487-643307dd11f5?ixid=M3wyOTM4Njl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTMxNjIzMDZ8&ixlib=rb-4.0.3",
      full: "https://images.unsplash.com/photo-1692161400487-643307dd11f5?crop=entropy&cs=srgb&fm=jpg&ixid=M3wyOTM4Njl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTMxNjIzMDZ8&ixlib=rb-4.0.3&q=85",
      regular:
        "https://images.unsplash.com/photo-1692161400487-643307dd11f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyOTM4Njl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTMxNjIzMDZ8&ixlib=rb-4.0.3&q=80&w=1080",
      small:
        "https://images.unsplash.com/photo-1692161400487-643307dd11f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyOTM4Njl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTMxNjIzMDZ8&ixlib=rb-4.0.3&q=80&w=400",
      thumb:
        "https://images.unsplash.com/photo-1692161400487-643307dd11f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyOTM4Njl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTMxNjIzMDZ8&ixlib=rb-4.0.3&q=80&w=200",
      small_s3:
        "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1692161400487-643307dd11f5",
    },
    links: {
      self: "https://api.unsplash.com/photos/a-person-standing-in-front-of-a-window-at-sunset-3UjFpDdWGT4",
      html: "https://unsplash.com/photos/a-person-standing-in-front-of-a-window-at-sunset-3UjFpDdWGT4",
      download:
        "https://unsplash.com/photos/3UjFpDdWGT4/download?ixid=M3wyOTM4Njl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTMxNjIzMDZ8",
      download_location:
        "https://api.unsplash.com/photos/3UjFpDdWGT4/download?ixid=M3wyOTM4Njl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTMxNjIzMDZ8",
    },
    likes: 28,
    liked_by_user: false,
    current_user_collections: [],
    sponsorship: null,
    topic_submissions: {
      "street-photography": {
        status: "approved",
        approved_on: "2023-08-16T07:58:12Z",
      },
    },
    user: {
      id: "lL2LRCNULZw",
      updated_at: "2023-08-16T08:48:01Z",
      username: "cyrusgomez",
      name: "cyrus gomez",
      first_name: "cyrus",
      last_name: "gomez",
      twitter_username: "cy__fy",
      portfolio_url: "https://www.cyfiproductions.com",
      bio: null,
      location: "Columbus, OH",
      links: {
        self: "https://api.unsplash.com/users/cyrusgomez",
        html: "https://unsplash.com/@cyrusgomez",
        photos: "https://api.unsplash.com/users/cyrusgomez/photos",
        likes: "https://api.unsplash.com/users/cyrusgomez/likes",
        portfolio: "https://api.unsplash.com/users/cyrusgomez/portfolio",
        following: "https://api.unsplash.com/users/cyrusgomez/following",
        followers: "https://api.unsplash.com/users/cyrusgomez/followers",
      },
      profile_image: {
        small:
          "https://images.unsplash.com/profile-1563125943461-feeb8d96644e?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
        medium:
          "https://images.unsplash.com/profile-1563125943461-feeb8d96644e?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
        large:
          "https://images.unsplash.com/profile-1563125943461-feeb8d96644e?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128",
      },
      instagram_username: "cyrusgomez_",
      total_collections: 0,
      total_likes: 49,
      total_photos: 25,
      accepted_tos: true,
      for_hire: true,
      social: {
        instagram_username: "cyrusgomez_",
        portfolio_url: "https://www.cyfiproductions.com",
        twitter_username: "cy__fy",
        paypal_email: null,
      },
    },
    exif: {
      make: null,
      model: null,
      name: null,
      exposure_time: null,
      aperture: null,
      focal_length: null,
      iso: null,
    },
    location: {
      name: "Columbus, Columbus, United States",
      city: "Columbus",
      country: "United States",
      position: {
        latitude: 39.9619603,
        longitude: -83.0030487,
      },
    },
    views: 233766,
    downloads: 3084,
  },
  {
    id: "ip15nC1LJ0o",
    slug: "ip15nC1LJ0o",
    created_at: "2018-07-13T23:49:48Z",
    updated_at: "2023-08-26T20:04:22Z",
    promoted_at: "2023-08-21T07:32:02Z",
    width: 6000,
    height: 6000,
    color: "#590c8c",
    blur_hash: "L49OdVoM#xo4StfQsGfRwRfROPfP",
    description: "Purple Gameboy",
    alt_description: "purple Nintendo GameBoy Color",
    breadcrumbs: [],
    urls: {
      raw: "https://images.unsplash.com/photo-1531525727990-67532cd332c6?ixid=M3wyOTM4Njl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTMxNjIzMDZ8&ixlib=rb-4.0.3",
      full: "https://images.unsplash.com/photo-1531525727990-67532cd332c6?crop=entropy&cs=srgb&fm=jpg&ixid=M3wyOTM4Njl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTMxNjIzMDZ8&ixlib=rb-4.0.3&q=85",
      regular:
        "https://images.unsplash.com/photo-1531525727990-67532cd332c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyOTM4Njl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTMxNjIzMDZ8&ixlib=rb-4.0.3&q=80&w=1080",
      small:
        "https://images.unsplash.com/photo-1531525727990-67532cd332c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyOTM4Njl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTMxNjIzMDZ8&ixlib=rb-4.0.3&q=80&w=400",
      thumb:
        "https://images.unsplash.com/photo-1531525727990-67532cd332c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyOTM4Njl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTMxNjIzMDZ8&ixlib=rb-4.0.3&q=80&w=200",
      small_s3:
        "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1531525727990-67532cd332c6",
    },
    links: {
      self: "https://api.unsplash.com/photos/ip15nC1LJ0o",
      html: "https://unsplash.com/photos/ip15nC1LJ0o",
      download:
        "https://unsplash.com/photos/ip15nC1LJ0o/download?ixid=M3wyOTM4Njl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTMxNjIzMDZ8",
      download_location:
        "https://api.unsplash.com/photos/ip15nC1LJ0o/download?ixid=M3wyOTM4Njl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTMxNjIzMDZ8",
    },
    likes: 1187,
    liked_by_user: false,
    current_user_collections: [],
    sponsorship: null,
    topic_submissions: {
      technology: {
        status: "approved",
        approved_on: "2020-07-31T08:36:13Z",
      },
    },
    user: {
      id: "SbiShcx0eKE",
      updated_at: "2023-08-25T13:59:24Z",
      username: "mike_meyers",
      name: "Mike Meyers",
      first_name: "Mike",
      last_name: "Meyers",
      twitter_username: null,
      portfolio_url: null,
      bio: null,
      location: null,
      links: {
        self: "https://api.unsplash.com/users/mike_meyers",
        html: "https://unsplash.com/@mike_meyers",
        photos: "https://api.unsplash.com/users/mike_meyers/photos",
        likes: "https://api.unsplash.com/users/mike_meyers/likes",
        portfolio: "https://api.unsplash.com/users/mike_meyers/portfolio",
        following: "https://api.unsplash.com/users/mike_meyers/following",
        followers: "https://api.unsplash.com/users/mike_meyers/followers",
      },
      profile_image: {
        small:
          "https://images.unsplash.com/profile-1531506626799-ff4aa9562cc2?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
        medium:
          "https://images.unsplash.com/profile-1531506626799-ff4aa9562cc2?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
        large:
          "https://images.unsplash.com/profile-1531506626799-ff4aa9562cc2?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128",
      },
      instagram_username: "petrolbox",
      total_collections: 1,
      total_likes: 17,
      total_photos: 13,
      accepted_tos: true,
      for_hire: false,
      social: {
        instagram_username: "petrolbox",
        portfolio_url: null,
        twitter_username: null,
        paypal_email: null,
      },
    },
    exif: {
      make: "Canon",
      model: "Canon EOS 5D Mark III",
      name: "Canon, EOS 5D Mark III",
      exposure_time: "1/125",
      aperture: "18",
      focal_length: "100.0",
      iso: 100,
    },
    location: {
      name: null,
      city: null,
      country: null,
      position: {
        latitude: null,
        longitude: null,
      },
    },
    views: 9175104,
    downloads: 40672,
  },
  {
    id: "NeDudmvV64A",
    slug: "NeDudmvV64A",
    created_at: "2022-08-25T12:36:45Z",
    updated_at: "2023-08-27T03:32:12Z",
    promoted_at: "2023-08-15T09:32:02Z",
    width: 4320,
    height: 4320,
    color: "#260c0c",
    blur_hash: "LF96?aoe0gWCjtj[IpR+-nj[IqWC",
    description: "3D Render",
    alt_description: null,
    breadcrumbs: [],
    urls: {
      raw: "https://images.unsplash.com/photo-1661430902921-1e5b84ea87ca?ixid=M3wyOTM4Njl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTMxNjIzMDZ8&ixlib=rb-4.0.3",
      full: "https://images.unsplash.com/photo-1661430902921-1e5b84ea87ca?crop=entropy&cs=srgb&fm=jpg&ixid=M3wyOTM4Njl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTMxNjIzMDZ8&ixlib=rb-4.0.3&q=85",
      regular:
        "https://images.unsplash.com/photo-1661430902921-1e5b84ea87ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyOTM4Njl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTMxNjIzMDZ8&ixlib=rb-4.0.3&q=80&w=1080",
      small:
        "https://images.unsplash.com/photo-1661430902921-1e5b84ea87ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyOTM4Njl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTMxNjIzMDZ8&ixlib=rb-4.0.3&q=80&w=400",
      thumb:
        "https://images.unsplash.com/photo-1661430902921-1e5b84ea87ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyOTM4Njl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTMxNjIzMDZ8&ixlib=rb-4.0.3&q=80&w=200",
      small_s3:
        "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1661430902921-1e5b84ea87ca",
    },
    links: {
      self: "https://api.unsplash.com/photos/NeDudmvV64A",
      html: "https://unsplash.com/photos/NeDudmvV64A",
      download:
        "https://unsplash.com/photos/NeDudmvV64A/download?ixid=M3wyOTM4Njl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTMxNjIzMDZ8",
      download_location:
        "https://api.unsplash.com/photos/NeDudmvV64A/download?ixid=M3wyOTM4Njl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTMxNjIzMDZ8",
    },
    likes: 104,
    liked_by_user: false,
    current_user_collections: [],
    sponsorship: null,
    topic_submissions: {
      "3d-renders": {
        status: "approved",
        approved_on: "2023-08-11T09:20:27Z",
      },
    },
    user: {
      id: "tcNGj-fj7EM",
      updated_at: "2023-08-26T20:09:11Z",
      username: "sunder_2k25",
      name: "Sunder Muthukumaran",
      first_name: "Sunder",
      last_name: "Muthukumaran",
      twitter_username: "Sunder_06",
      portfolio_url: null,
      bio: "Freelance CGI Generalist. I make 3D renders.",
      location: null,
      links: {
        self: "https://api.unsplash.com/users/sunder_2k25",
        html: "https://unsplash.com/@sunder_2k25",
        photos: "https://api.unsplash.com/users/sunder_2k25/photos",
        likes: "https://api.unsplash.com/users/sunder_2k25/likes",
        portfolio: "https://api.unsplash.com/users/sunder_2k25/portfolio",
        following: "https://api.unsplash.com/users/sunder_2k25/following",
        followers: "https://api.unsplash.com/users/sunder_2k25/followers",
      },
      profile_image: {
        small:
          "https://images.unsplash.com/profile-1633109738823-d9bdf7bd29a2image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
        medium:
          "https://images.unsplash.com/profile-1633109738823-d9bdf7bd29a2image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
        large:
          "https://images.unsplash.com/profile-1633109738823-d9bdf7bd29a2image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128",
      },
      instagram_username: "sunder_06",
      total_collections: 0,
      total_likes: 84,
      total_photos: 33,
      accepted_tos: true,
      for_hire: true,
      social: {
        instagram_username: "sunder_06",
        portfolio_url: null,
        twitter_username: "Sunder_06",
        paypal_email: null,
      },
    },
    exif: {
      make: null,
      model: null,
      name: null,
      exposure_time: null,
      aperture: null,
      focal_length: null,
      iso: null,
    },
    location: {
      name: null,
      city: null,
      country: null,
      position: {
        latitude: null,
        longitude: null,
      },
    },
    views: 345506,
    downloads: 4713,
  },
];

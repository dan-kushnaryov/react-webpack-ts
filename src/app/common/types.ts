export namespace Images {
  export interface Model {
    id: number,
    height: number,
    width: number,
    urls: {
      small: string,
    },
    user: {
      username: string,
    },
  }

  export interface Stats {
    imageId: number,
    downloads: number,
  }

  export type ModelsList = Model[];
}
interface INews {
  id: number;
  name_uz: string;
  name_kr: string;
  name_ru: string;
  description_uz: string;
  description_ru: string;
  description_en: string;
  views: number;
  photo: string;
  created_at: string;
}

interface IPhotos {
  id: number;
  photos: { photo: string }[];
  created_at: string;
  updated_at: string;
}

interface IVideos {
  id: number;
  video_src: string;
  created_at: string;
  updated_at: string;
}

interface ITvShow {
  id: number;
  tv_src: string;
}

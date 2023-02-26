export type AllPostsData = {
  id: string;
  title: string;
  createdAt: string;
  eyecatch: {
    url: string;
  };
}[];

export type PostData = {
  title: string;
  createdAt: string;
  content: string;
};

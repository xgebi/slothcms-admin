export default interface PostItem {
  uuid: string;
  postType: string;
  title?: string;
  slug?: string;
  content?: string;
  js?: string;
  css?: string;
  postStatus?: string;
  publishDate?: string;
  updateDate?: string;
  categories?: string[];
  tags?: string[];
  author?: string;
}

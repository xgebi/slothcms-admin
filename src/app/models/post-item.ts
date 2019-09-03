export default interface PostItem {
  uuid: string;
  postType: string;
  title?: string;
  slug?: string;
  content?: string;
  jsFilePath?: string;
  cssFilePath?: string;
  jsFile?: string;
  cssFile?: string;
  postStatus?: string;
  publishDate?: string;
  updateDate?: string;
  categories?: string[];
  tags?: string[];
  author?: string;
}

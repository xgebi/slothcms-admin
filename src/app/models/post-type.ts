export interface PostType {
  uuid: string;
  displayName: string;
  slug?: string;
  tags_enabled?: boolean;
  categories_enabled?: boolean;
  archive_enabled?: boolean;
}

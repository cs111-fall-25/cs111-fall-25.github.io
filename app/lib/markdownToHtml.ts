import { remark } from "remark";
import rehypeExternalLinks from 'rehype-external-links';
import remarkRehype from 'remark-rehype';
import rehypeSanitize from 'rehype-sanitize';
import rehypeStringify from "rehype-stringify";
import rehypeVideo from 'rehype-video';

export default async function markdownToHtml(markdown: string) {
  const result = await remark()
  .use(remarkRehype)
  .use(rehypeVideo, { test: /\/(.*)(\.mp4|\.mov)$/})
  .use(rehypeSanitize)
  .use(rehypeStringify)
  .use(rehypeExternalLinks, { target: "_blank" })
  .process(markdown);
  return result.toString();
}

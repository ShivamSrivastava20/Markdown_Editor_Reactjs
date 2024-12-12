import { marked } from "marked";
import dompurify from "dompurify";
// import hljs from "highlight.js";

interface PreviewProps {
  markdown: string;
}

export default function Preview({ markdown }: PreviewProps) {
  const parsed = dompurify.sanitize(marked.parse(markdown));
  return (
    <div>
      <div className="w-full bg-gray-900 p-3 text-gray-400 uppercase tracking-wider">
        Preview
      </div>
      <div
        className="p-6 prose prose-invert"
        dangerouslySetInnerHTML={{ __html: parsed }}
      />
    </div>
  );
}

import { useState, useRef, useEffect } from "react";
import { INSERT_PAGE_BREAK } from "./plugins/PageBreakPlugin";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import Editor from "./Editor"; // Ensure this path matches your file structure

export default function EditorWithPageBreak() {
  const editorRef = useRef<HTMLDivElement | null>(null);
  const [editor] = useLexicalComposerContext();
  const [hasInsertedPageBreak, setHasInsertedPageBreak] = useState(false);

  useEffect(() => {
    if (!editorRef.current) return;

    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const height = entry.contentRect.height;

        console.log("Height:", height);

        // // Convert 50mm to pixels (based on 96dpi, 1mm = 3.78px)
        // const minHeightPx = 100 * 3.78;

        // // Only insert a page break if the height is exceeded and hasn't been inserted yet
        // if (height > minHeightPx && !hasInsertedPageBreak) {
        //   setHasInsertedPageBreak(true); // Prevent further page breaks
        //   requestAnimationFrame(() => {
        //     editor.update(() => {
        //       editor.dispatchCommand(INSERT_PAGE_BREAK, undefined);
        //     });
        //   });
        // }
      }
    });

    observer.observe(editorRef.current);

    return () => {
      observer.disconnect();
    };
  }, [editor, hasInsertedPageBreak]);

  return (
    <div ref={editorRef}  className="editor-container">  
      <Editor />
    </div>
  );
}
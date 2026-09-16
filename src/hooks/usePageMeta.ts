import { useEffect } from "react";

function usePageMeta(title: string, description: string) {
  useEffect(() => {
    document.title = title;

    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", description);
  }, [title, description]);
}

export default usePageMeta;

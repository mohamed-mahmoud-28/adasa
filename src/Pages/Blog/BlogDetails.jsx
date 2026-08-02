import { useLocation } from "react-router-dom";
import BlogsData from "../../Data/BlogsData.json";
import ArticleContent from "./ArticleContent";
import HeroArticle from "./HeroArticle";
import RelatedBlogs from "./RelatedBlogs";

export default function BlogDetails() {
  const location = useLocation();
  const slug = location.pathname.split("/")[2];
  const post = BlogsData.posts.find((item) => item.slug === slug);

  return (
    <>
      <HeroArticle post={post} />
      <main className="bg-[#0B0B0B] px-5 py-14">
        <div className="mx-auto max-w-4xl">
          <ArticleContent post={post} />
          <RelatedBlogs blogs={BlogsData.posts} currentSlug={post.slug} />
        </div>
      </main>
    </>
  );
}

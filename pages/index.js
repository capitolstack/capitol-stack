import { getAllPosts } from '@/lib/posts';
import Navbar from '@/components/Navbar';
import ThesisSection from '@/components/ThesisSection';
import TeamSection from '@/components/TeamSection';
import PortfolioSection from '@/components/PortfolioSection';
import BlogSection from '@/components/BlogSection';
import ContactSection from '@/components/ContactSection';

export async function getStaticProps() {
  const posts = getAllPosts();
  return {
    props: {
      posts: posts.slice(0, 3),
    },
  };
}

export default function Home({ posts }) {
  return (
    <>
      {/* Add navbar back to homepage */}
      <Navbar />
      
      {/* Your existing sections exactly as they were */}
      <ThesisSection />
      <TeamSection />
      <PortfolioSection />
      <BlogSection posts={posts} />
      <ContactSection />
    </>
  );
}

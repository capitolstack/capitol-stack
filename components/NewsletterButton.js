import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function NewsletterButton() {
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleClick = () => {
    if (router.pathname === '/') {
      const section = document.getElementById('newsletter');
      if (section) section.scrollIntoView({ behavior: 'smooth' });
    } else {
      router.push('/#newsletter');
    }
  };

  if (!isClient) return null;

  return (
    <button
      onClick={handleClick}
      className="px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-100 transition"
    >
      Subscribe to Newsletter
    </button>
  );
}

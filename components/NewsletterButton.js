import { useEffect, useState } from 'react';

export default function NewsletterButton() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <button
      onClick={() => {
        const section = document.getElementById('newsletter');
        if (section) section.scrollIntoView({ behavior: 'smooth' });
      }}
      className="px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-100 transition"
    >
      Subscribe to Newsletter
    </button>
  );
}

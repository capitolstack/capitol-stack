
import { useEffect, useState } from 'react';

export default function NewsletterButton() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <button
      data-tally-open="m6zeoo"
      data-tally-layout="modal"
      data-tally-width="600"
      data-tally-overlay="1"
      className="px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-100 transition"
    >
      Get Updates
    </button>
  );
}

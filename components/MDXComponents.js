// components/MDXComponents.js
import Image from 'next/image';

const MDXComponents = {
  img: (props) => (
    <Image
      {...props}
      alt={props.alt || ''}
      width={props.width || 800}
      height={props.height || 500}
      layout="responsive"
      className="rounded-xl my-6"
    />
  ),
};

export default MDXComponents;

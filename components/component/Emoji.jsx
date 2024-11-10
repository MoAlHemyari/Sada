import Image from 'next/image';

export default function Emoji({ name, alt = '', size = 32 }) {
  return (
    <Image
      src={`/image/emoji/${name}.webp`} 
      alt={alt || name}
      width={size}
      height={size}
      className="inline-block undraggable"
      draggable={false}
    />
  );
}

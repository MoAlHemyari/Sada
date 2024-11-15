import Image from 'next/image';

export default function Emoji({ name, size = 32, alt = '' }) {
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

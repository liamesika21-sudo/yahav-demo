export default function ResponsiveImage({
  image,
  alt,
  className = '',
  eager = false,
  sizes = '100vw',
  fit = 'cover',
}) {
  return (
    <img
      className={`responsive-image ${className}`}
      src={image.src}
      srcSet={image.srcSet}
      sizes={sizes}
      width={image.width}
      height={image.height}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      decoding={eager ? 'sync' : 'async'}
      fetchPriority={eager ? 'high' : 'auto'}
      draggable={false}
      style={{
        '--image-position-desktop': image.objectPositionDesktop || image.objectPosition || '50% 50%',
        '--image-position-mobile': image.objectPositionMobile || image.objectPositionDesktop || image.objectPosition || '50% 50%',
        objectFit: fit,
      }}
    />
  );
}

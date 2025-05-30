interface LogoProps {
  url?: string;
  className?: string;
  imgSrc?: string;
  imgAlt?: string;
}

const Logo = (props: LogoProps) => {
  const { url, className, imgSrc, imgAlt } = props;
  return (
    <a href={url} target='_blank'>
      <img src={imgSrc} className={className} alt={imgAlt} />
    </a>
  );
};

export default Logo;

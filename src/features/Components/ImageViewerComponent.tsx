import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

interface ImageProps {
  ImageLink: string | undefined;
  className: string;
  width?: string;
  height?: string;
}

const ImageViewerComponent: React.FC<ImageProps> = ({ ImageLink, className, width = "200px", height = "150px" }) => {
  return (
    <>
      <Zoom>
        <img src={ImageLink} className={className} style={{ width, height, objectFit: 'cover' }} alt="Zoomable" />
      </Zoom>
    </>
  );
};

export default ImageViewerComponent;

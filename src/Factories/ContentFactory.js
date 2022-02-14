import ImageContent from "../Components/ImageContent";
import VideoContent from "../Components/VideoContent";

const ContentFactory = ({proyect, type}) => {
    const content ={
        video: <VideoContent proyect={proyect} />,
        image: <ImageContent proyect={proyect} />
    }

    return content[type];
}

export default ContentFactory;
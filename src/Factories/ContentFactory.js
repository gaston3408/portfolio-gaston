import ImageContent from "../Components/ImageContent";
import VideoContent from "../Components/VideoContent";

const ContentFactory = ({proyect, type}) => {
    const content ={
        video: VideoContent,
        image: ImageContent
    }

    return content[type]({proyect});
}

export default ContentFactory;

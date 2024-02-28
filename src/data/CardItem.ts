

type CardItem = {
    id: number;
    title: string;
    shortDescription: string;
    coverAltText?: string;
    cover: string | AnimationConfigWithData | React.ReactNode;
}
export default CardItem;

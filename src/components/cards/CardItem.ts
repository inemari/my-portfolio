// CardItem.ts
export interface CardItem {
    id: number;
    cover: string | AnimationConfigWithData | React.ReactNode | null;
    title: string;
    shortDescription: string;
    coverAltText: string;
    // Add other properties as needed
}
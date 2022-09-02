export class Card {
    imageName: string;
    imageUrl: string;
    createdAt: Date;
    rating: number;

    constructor(imageName: string, imageUrl: string) {
        this.imageName = imageName;
        this.imageUrl = imageUrl;
        this.createdAt = new Date();
        this.rating = 0;
    }

    setRating(rating: number) {
        if(rating < 0) {
            this.rating = 0;
        }
        else if(rating > 100) {
            this.rating = 100;
        }
        else {
            this.rating = rating;
        }
    }
}
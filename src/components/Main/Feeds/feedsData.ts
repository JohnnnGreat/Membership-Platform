import TestImage from "../../../../public/test.jpeg";

export interface feedDummyDataType {
  id: number;
  text: string;
  pictures: Array<any>;
  avatar: any;
  followers: number;
  likes: number;
  shares: number;
  comments: number;
  time: string | string;
  name: string;
}

export const feedDummyData: feedDummyDataType[] = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia placeat, beatae repellat vitae ipsum veniam blanditiis!",
    pictures: [TestImage, TestImage], // Array of picture URLs
    avatar: TestImage, // URL of the avatar image
    name: "John Doe", // Name of the user
    followers: 1000, // Number of followers
    likes: 500, // Number of likes
    shares: 200, // Number of shares
    comments: 50, // Number of comments
    time: "2024-04-29T12:00:00Z", // Timestamp of the post
  },
  {
    id: 2,
    text: "Another post",
    pictures: [TestImage, TestImage, TestImage], // Array of picture URLs
    avatar: TestImage, // URL of the avatar image
    name: "Jane Smith", // Name of the user
    followers: 1500, // Number of followers
    likes: 700, // Number of likes
    shares: 300, // Number of shares
    comments: 70, // Number of comments
    time: "2024-04-28T15:30:00Z", // Timestamp of the post
  },
  // Add more objects for additional posts if needed
];

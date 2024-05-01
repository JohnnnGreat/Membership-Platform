// import { profileData } from './../components/Main/Feeds/Profile/profileDummy';
export interface UserType {
  fullname: string;
  email: string;
  image: string;
  isAdmin: boolean;
  verified: boolean;
}

export interface feedDummyData {
  id: number;
  text: string;
  pictures: Array<any>;
  avater: any;
  followers: number;
  likes: number;
  shares: number;
  comments: 50;
  time: string;
}

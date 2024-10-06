// Database.ts

export interface VideoData {
    video: any;  // Change this to number to accommodate the require call
    title: string;
    description: string;
    likes: string;
    isLike: boolean;  // Change Boolean to boolean for type consistency
    image_url: string;
}

export const videoData: VideoData[] = [
    {
        video: require('~/assets/videos/video1.mp4'),  // This will be a number
        title: 'Ram_Charan',
        description: 'Feel the beauty of nature',
        likes: '245k',
        isLike: false,
        image_url: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg",

    },
    {
        video: require('~/assets/videos/video2.mp4'),
        title: 'The_Groot',
        description: 'Feel the beauty of nature',
        likes: '656k',
        isLike: false,
        image_url: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/2.jpg",
    },
    {
        video: require('~/assets/videos/video3.mp4'),
        title: 'loverland',
        description: 'Feel the beauty of nature',
        likes: '242k',
        isLike: false,
        image_url: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/3.jpg",
    },
    {
        video: require('~/assets/videos/video4.mp4'),
        title: 'mr.bean',
        description: 'Feel the beauty of nature',
        likes: '502k',
        isLike: false,
        image_url: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/4.jpg",

    },
    {
        video: require('~/assets/videos/video5.mp4'),
        title: 'naturbynature',
        description: 'Feel the beauty of nature',
        likes: '809k',
        isLike: false,
        image_url: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg",
    },
];

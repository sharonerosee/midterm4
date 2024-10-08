export interface VideoData {
    video: any; 
    title: string;
    description: string;
    likes: string;
    isLike: boolean;  
    image_url: string;
}

export const videoData: VideoData[] = [
    {
        video: require('~/assets/videos/video1.mp4'), 
        title: 'Sharone_Angel',
        description: 'Feel the beauty of nature',
        likes: '245k',
        isLike: false,
        image_url: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg",

    },
    {
        video: require('~/assets/videos/video2.mp4'),
        title: 'The_Groot',
        description: 'I am Groot!',
        likes: '656k',
        isLike: false,
        image_url: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/2.jpg",
    },
    {
        video: require('~/assets/videos/video3.mp4'),
        title: 'build_guilt',
        description: 'I am bored',
        likes: '242k',
        isLike: false,
        image_url: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/3.jpg",
    },
    {
        video: require('~/assets/videos/video4.mp4'),
        title: 'queen_elizabeth',
        description: 'I am the queen of british',
        likes: '502k',
        isLike: false,
        image_url: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/4.jpg",

    },
    {
        video: require('~/assets/videos/video5.mp4'),
        title: 'naturbynature',
        description: 'Boleh kaka langsung di beli',
        likes: '809k',
        isLike: false,
        image_url: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg",
    },
];

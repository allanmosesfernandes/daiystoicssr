import { TwitterShareButton, LinkedinShareButton, FacebookShareButton, WhatsappShareButton } from 'next-share'
import { useState, useEffect } from 'react';

interface ShareData {
    date: string;
    title: string;
    quote: string;
    author: string;
}

const Share = ({ data }: { data: ShareData }) => {
//     const [isNativeShare, setIsNativeShare] = useState(false);
// 
//     useEffect(() => {
//         if (navigator.share()) {
//             setIsNativeShare(true);
//         }
//     }, []);


    const tweetText = `"${data.quote}"\n- ${data.author}\n`;
    const shareURL = 'https://dailystoicreminders.com';

    return (
        <>
            <div className="dropdown dropdown-top font-xl">
                <div tabIndex={0} role="button" className="btn btn-neutral group m-1 text-2xl font-mf-consent min-w-[150px] py-6 relative">
                    <span className="transition-all group-hover:opacity-0 group-hover:scale-90">Share quote</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="absolute w-8 h-8 opacity-0 transition-all group-hover:opacity-100 group-hover:scale-100"><path fill="currentColor" fillRule="evenodd" d="M19,14 L19,19 C19,20.1045695 18.1045695,21 17,21 L5,21 C3.8954305,21 3,20.1045695 3,19 L3,7 C3,5.8954305 3.8954305,5 5,5 L10,5 L10,7 L5,7 L5,19 L17,19 L17,14 L19,14 Z M18.9971001,6.41421356 L11.7042068,13.7071068 L10.2899933,12.2928932 L17.5828865,5 L12.9971001,5 L12.9971001,3 L20.9971001,3 L20.9971001,11 L18.9971001,11 L18.9971001,6.41421356 Z"></path></svg>
                </div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm font-2xl">
                    <li className=''>
                        <a href="">
                            <FacebookShareButton
                                url={shareURL}
                                quote={tweetText}
                            >
                                Facebook
                            </FacebookShareButton>
                        </a>
                    </li>
                    <li className=''>
                        <a href="">
                            <LinkedinShareButton
                                url={shareURL}
                                title={tweetText}
                            >
                                Linkedin
                            </LinkedinShareButton>
                        </a>
                    </li>
                    <li className=''>
                        <a href="">
                            <TwitterShareButton
                                url={shareURL}
                                title={tweetText}
                            >
                                Twitter
                            </TwitterShareButton>
                        </a>
                    </li>
                    <li>
                        <a>
                            <WhatsappShareButton
                                url={shareURL}
                                title={tweetText}
                                separator="\n\n"
                                >Whatsapp
                            </WhatsappShareButton>
                        </a>
                    </li>
                </ul>
            </div>
            <button className="btn m-1 text-2xl font-mf-consent min-w-[150px] py-6">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
            </svg>Save</button>
        </>
    );
};

export default Share;
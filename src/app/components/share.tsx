import { TwitterShareButton, LinkedinShareButton, FacebookShareButton, WhatsappShareButton } from 'next-share'
import { useState, useEffect } from 'react';

interface ShareData {
    date: string;
    title: string;
    quote: string;
    author: string;
}

const Share = ({ data }: { data: ShareData }) => {
    const [isNativeShare, setIsNativeShare] = useState(false);

    useEffect(() => {
        if (navigator.share) {
            setIsNativeShare(true);
        }
    }, []);


    const tweetText = `"${data.quote}"\n- ${data.author}\n`;
    const shareURL = 'https://dailystoicreminders.com';

    const handleNativeShare = async () => {
        try {
            await navigator.share({
                title: 'Daily Stoic Reminder',
                text: tweetText,
                url: shareURL,
            });
        } catch (error) {
            console.error('Error sharing:', error);
        }
    };

    if (isNativeShare) {
        return (
            <button onClick={handleNativeShare} className="btn m-1 text-4xl font-mf-consent min-w-[200px] py-6 mt-8">
                Share reminder
            </button>
        );
    }

    return (
        <>
        <div className="dropdown dropdown-top mt-8 font-xl">
            <div tabIndex={0} role="button" className="btn m-1 md:text-4xl text-2xl font-mf-consent min-w-[200px] py-6">Share stoic reminder</div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm font-2xl">
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
                        <FacebookShareButton
                            url={shareURL}
                            quote={tweetText}
                        >
                            Facebook
                        </FacebookShareButton>
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
        </>
    );
};

export default Share;
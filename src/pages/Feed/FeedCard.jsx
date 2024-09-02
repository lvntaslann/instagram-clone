import React from 'react'
import instagramFeed from './FeedData'
import { Link } from 'react-router-dom'
import Ellipse from "/src/components/Icons/Ellipse/Ellipse.jsx"
import Like from "/src/components/Icons/Like/Like.jsx"
import Comment from "/src/components/Icons/Comment/Comment.jsx"
import Share from "/src/components/Icons/Share/Share.jsx"
import Save from "/src/components/Icons/Save/Save.jsx"
import Emoji from "/src/components/Icons/Emoji/Emoji.jsx"

const FeedCard = () => {
    return (
        <>
            {instagramFeed.map((feed) => (
                <div key={feed.id} className='w-full h-auto mb-6'>
                    {/* pp and username, time */}
                    <div className='w-full h-auto items-center justify-between mb-2'>
                        <div className='flex items-center  gap-x-2'>
                            <Link to="/" className='flex items-center justify-center flex-col flex-shrink-0'>
                                <div className='w-10 h-10 rounded-full object-cover p-[2px] bg-gradient-to-r from-[#f02aa6] to-[#ff6f48]'>
                                    <img
                                        src={feed.profileImg}
                                        alt={feed.profileImg}
                                        className='rounded-full w-full h-full object-cover bg-black p-[2.5px]'
                                    />
                                </div>
                            </Link>
                            <div className='flex items-center gap-x-2'>
                                <p className='text-white text-sm font-medium'>
                                    {feed.username}
                                </p>
                                <div className='w-1 h-1 bg-gray-500 rounded-full'></div>
                                <p className='text-white text-sm font-medium'>
                                    {feed.time}
                                </p>
                            </div>
                            <Ellipse />
                        </div>
                    </div>
                    {/* feed img*/}
                    <div className='w-full lg:max-h-[75vh] md:max-h-[70vh] sm:max-h-[65vh] max-h-[50vh] lg:h-[70vh] md:h-[60vh] sm:h-[50vh] h-[50vh] lg:min-h[65vh] md:min-h[55vh] sm:min-h-[50vh] min-h-[45vh] border border-gray-300 rounded overflow-hidden mb-3'>
                        <img src={feed.postImg} alt={feed.caption} className='w-full h-full rounded object-center' />
                    </div>
                    {/* user actiont( like,comment,shar&save) */}
                    <div className='w-full h-auto flex items-center justify-between'>
                        <div className='flex items-center gap-x-3'>
                            <Like />
                            <Comment />
                            <Share />
                        </div>
                        <Save />
                    </div>
                    {/* Like count */}
                    <Link to="/" className='w-full h-auto flex items-center gap-x-2 text-base text-gray-200 font-medium my-2'>
                        <div className='flex items-center'>
                            <img src={feed.mutualFrndImg1} alt={feed.likeCount} className='w-5 h-5 rounded-full object-full p-[1.5px] bg-black' />
                            <img src={feed.mutualFrndImg2} alt={feed.likeCount} className='w-5 h-5 rounded-full object-full p-[1.5px] bg-black -ml-3' />
                        </div>
                        {feed.likeCount} likes
                    </Link>
                    {/* caption section */}
                    <div className='w-full h-auto flex items-center gap-x-1'>
                        <div className='w-full h-auto text-sm text-gray-200 font-thin'>
                            <Link to="/" className='text-white font-medium text-sm me-1'>
                                {feed.username}
                            </Link>
                            {feed.caption}
                            <Link to="/" className='text-gray-400  text-sm ms-1'>
                                more
                            </Link>
                        </div>
                    </div>
                    {/* Comment count */}

                    <Link to="/" className='text-gray-400 font-normal my-2'>
                        View All {feed.commentCount} comments
                    </Link>
                    {/* comment */}
                    <div className='w-full h-auto flex items-center justify-between border-b border-b-gray-500'>
                        <input type="text"  className='w-[90%] h-auto bg-transparent border-none outline-none focus:outline-none text-sm text-gray-400 py-3' placeholder='Add a commen...'/>
                        <Emoji/>
                    </div>
                </div>
            ))}
        </>
    )
}

export default FeedCard;
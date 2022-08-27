import Link from 'next/link';
import React from 'react';
const img1 = "data:image/jpeg;base64,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"
const img2 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbx1n3CTFS4Okv8qvqUFdCRQJRp3opJ_RI-A&usqp=CAU"
const img3 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyMHt3IjQ-Q449PjGhDjpGVc9bs5vWYaInNQ&usqp=CAU"
const img4 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdA3gmzJtp-YammwA7mGpx4--iM29-l1URpQ&usqp=CAU"
const img5 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMnyjyVAA8-IGY3T5-FfAu0-EngBOZsfxTNg&usqp=CAU"
const img6 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcV4Mq4sC0t-pxfPnRHYojr5BkXF5sDxYy_w&usqp=CAU"
const img7 = "https://static.independent.co.uk/2022/03/02/04/RT_01.jpeg?quality=50&width=640&auto=webp"
const img8 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG9mEBHyBrxArTnyvnGBdfKk4rDEK0UgNetw&usqp=CAU"
const img9 = "https://wd-image.webdunia.com/image-conversion/process-aws.php?url=https://nonprod-media.webdunia.com/public_html/_media/en/img/article/2020-04/03/full/1585899323-416.jpg&w=&h=&outtype=webp"
const img10 = "https://images.indianexpress.com/2022/07/delhi-traffic-1.jpg?w=389"
const img11 = "https://media4.s-nbcnews.com/i/newscms/2020_27/3393340/world_dfcfcfcb5559c96e3677d3339926baca.jpg"
const img12 = "https://akm-img-a-in.tosshub.com/businesstoday/images/issue/bt_cover_itc.png?size=280:387"
const img13 = "https://img.etimg.com/thumb/msid-91299899,width-1200,height-900,resizemode-4,imgsize-80612/latest-daily-news-and-updates-may-4.jpg"
const img14 = "https://resize.indiatvnews.com/en/resize/newbucket/730_-/2022/07/pti07-16-2022-000213b-1658467502.jpg"
const img15 = "https://pbs.twimg.com/media/FY5JSDzaUAAIOiZ?format=jpg&name=small"
const img16 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvkeFf071cALywX_Cn_r0w-G-E5YLv80TLsA&usqp=CAU"
const img17 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJO23CkvBuViMO3P1W_ftxFmrBKC_eqLktaw&usqp=CAU"
const img18 = "https://menglish.sakshi.com/sites/default/files/styles/cinema_main/public/article_images/2022/08/27/student-1661576697.jpg?itok=h673ojp9"
const img19 = ""
function Hello() {
    return (
        <>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-6 '>

                <div className=' border rounded-lg group cursor-pointer overflow-hidden'>
                    <Link href='/'>
                        <img src={img1} alt="" className='h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out' />
                    </Link>
                    <div>
                        <p className='text-lg font-bold py-6 m-4'>India To Play A Key Role In Countering China</p>
                        <p className='text-xs'>Read More...</p>
                    </div>
                </div>


                <div className=' border rounded-lg group cursor-pointer overflow-hidden'>
                    <Link href='/'>
                        <img src={img2} alt="" className='h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out' />
                    </Link>
                    <div>
                        <p className='text-lg font-bold py-5'>The Biggest Attack Vectors for Cybercriminals in 2022</p>
                        <p className='text-xs'>Read More...</p>
                    </div>
                </div>

                <div className=' border rounded-lg group cursor-pointer overflow-hidden'>
                    <Link href='/'>
                        <img src={img3} alt="" className='h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out' />
                    </Link>
                    <div>
                        <p className='text-lg font-bold py-5'>Breaking: Haryana CM says he will request Goa government</p>
                        <p className='text-xs'>Read More...</p>
                    </div>
                </div>


                <div className=' border rounded-lg group cursor-pointer overflow-hidden'>
                    <Link href='/'>
                        <img src={img4} alt="" className='h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out' />
                    </Link>
                    <div>
                        <p className='text-lg font-bold py-5'>Today in the News | 5 dead, several injured within early morning inferno in Ogeere</p>
                        <p className='text-xs'>Read More...</p>
                    </div>
                </div>


                <div className=' border rounded-lg group cursor-pointer overflow-hidden'>
                    <Link href='/'>
                        <img src={img5} alt="" className='h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out' />
                    </Link>
                    <div>
                        <p className='text-lg font-bold py-5'> Light rainfall expected today</p>
                        <p className='text-xs'>Read More...</p>
                    </div>
                </div>


                <div className=' border rounded-lg group cursor-pointer overflow-hidden'>
                    <Link href='/'>
                        <img src={img6} alt="" className='h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out' />
                    </Link>
                    <div>
                        <p className='text-lg font-bold py-5'>
                            Updated on: July 06, 2022 9:53 IST
                            Super 100: Watch the latest news from India and around the world | July 06, 2022</p>
                        <p className='text-xs'>Read More...</p>
                    </div>
                </div>


                <div className=' border rounded-lg group cursor-pointer overflow-hidden'>
                    <Link href='/'>
                        <img src={img7} alt="" className='h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out' />
                    </Link>
                    <div>
                        <p className='text-lg font-bold py-5'>Russia Today - latest news, breaking stories and comment - The Independent</p>
                        <p className='text-xs'>Read More...</p>
                    </div>
                </div>



                <div className=' border rounded-lg group cursor-pointer overflow-hidden'>
                    <Link href='/'>
                        <img src={img8} alt="" className='h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out' />
                    </Link>
                    <div>
                        <p className='text-lg font-bold py-5'>Nigerian Newspapers: Top Stories For Today (04/06/22) – Independent Newspaper Nigeria Visit</p>
                        <p className='text-xs'>Read More...</p>
                    </div>
                </div>


                <div className=' border rounded-lg group cursor-pointer overflow-hidden'>
                    <Link href='/'>
                        <img src={img9} alt="" className='h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out' />
                    </Link>
                    <div>
                        <p className='text-lg font-bold py-5'>English News, News Headlines, Today News Headlines, News in English, Top Stories</p>
                        <p className='text-xs'>Read More...</p>
                    </div>
                </div>


                <div className=' border rounded-lg group cursor-pointer overflow-hidden'>
                    <Link href='/'>
                        <img src={img10} alt="" className='h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out' />
                    </Link>
                    <div>
                        <p className='text-lg font-bold py-5'>Monsoon news Highlights: Delhi traffic police issue alert amid rainfall, caution of slowdown | India News,The Indian Express</p>
                        <p className='text-xs'>Read More...</p>
                    </div>
                </div>


                <div className=' border rounded-lg group cursor-pointer overflow-hidden'>
                    <Link href='/'>
                        <img src={img11} alt="" className='h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out' />
                    </Link>
                    <div>
                        <p className='text-lg font-bold py-5'>Monsoon news Highlights: Delhi traffic police issue alert amid rainfall, caution of slowdown | India News,The Indian Express</p>
                        <p className='text-xs'>Read More...</p>
                    </div>
                </div>

                <div className=' border rounded-lg group cursor-pointer overflow-hidden'>
                    <Link href='/'>
                        <img src={img12} alt="" className='h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out' />
                    </Link>
                    <div>
                        <p className='text-lg font-bold py-5'>Business News: Breaking Business News India, Today Share Market Latest News</p>
                        <p className='text-xs'>Read More...</p>
                    </div>
                </div>


                <div className=' border rounded-lg group cursor-pointer overflow-hidden'>
                    <Link href='/'>
                        <img src={img13} alt="" className='h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out' />
                    </Link>
                    <div>
                        <p className='text-lg font-bold py-5'>Covid News Updates: Delhi reports 1,354 fresh Covid 19 infections today - The Economic Times</p>
                        <p className='text-xs'>Read More...</p>
                    </div>
                </div>


                <div className=' border rounded-lg group cursor-pointer overflow-hidden'>
                    <Link href='/'>
                        <img src={img14} alt="" className='h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out' />
                    </Link>
                    <div>
                        <p className='text-lg font-bold py-5'>Delhi LG recommends CBI probe into AAP govt's excise policy | India News – India TV</p>
                        <p className='text-xs'>Read More...</p>
                    </div>
                </div>

                <div className=' border rounded-lg group cursor-pointer overflow-hidden'>
                    <Link href='/'>
                        <img src={img15} alt="" className='h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out' />
                    </Link>
                    <div>
                        <p className='text-lg font-bold py-5'>News Headlines Today India 31 July 2022 | Breaking News Today</p>
                        <p className='text-xs'>Read More...</p>
                    </div>
                </div>


                <div className=' border rounded-lg group cursor-pointer overflow-hidden'>
                    <Link href='/'>
                        <img src={img16} alt="" className='h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out' />
                    </Link>
                    <div>
                        <p className='text-lg font-bold py-5'>Asia cup 2022: Rahul Dravid Recovers from Covid-19</p>
                        <p className='text-xs'>Read More...</p>
                    </div>
                </div>



                <div className=' border rounded-lg group cursor-pointer overflow-hidden'>
                    <Link href='/'>
                        <img src={img17} alt="" className='h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out' />
                    </Link>
                    <div>
                        <p className='text-lg font-bold py-5'>The Latest US and World News - USA TODAY</p>
                        <p className='text-xs'>Read More...</p>
                    </div>
                </div>


                <div className=' border rounded-lg group cursor-pointer overflow-hidden'>
                    <Link href='/'>
                        <img src={img18} alt="" className='h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out' />
                    </Link>
                    <div>
                        <p className='text-lg font-bold py-5'>Telugu States Latest News,Andhra Pradesh News Latest, Telangana News Today, Tollywood News Today, Bigg Boss</p>
                        <p className='text-xs'>Read More...</p>
                    </div>
                </div>


                







            </div>
        </>
    )
}

export default Hello;
import React from 'react';
import styles from './seller.module.css';
import {useState,useEffect} from 'react';

import person1 from '../../assets/seller/slider-1.webp';
import person2 from '../../assets/seller/slider-2.webp';
import person3 from '../../assets/seller/slider-3.webp';
import person4 from '../../assets/seller/slider-4.webp';

// import { getImageUrl } from "../../utils";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";



const Seller = () => {
    const [buyersCount, setbuyersCount] = useState(1);
    const [productCount, setproductCount] = useState(1);
    const [countriesCount, setcountriesCount] = useState(1);
    
    // const [store, setStore] = useState("");
    // const [adTool, setAdTool] = useState("");
    // const [dataAnalytics, setDataAnalytics] = useState("");
    // const [custSupport, setCustSupport] = useState("");

    const sections = [
      { id: 1, title: "Custom storefront", listContent: { heading: "Set up a store that showcases your brand", description: "Differentiate yourself from the competition with a full store dedicated to your products - no coding or design skills necessary!", imageSrc:"/src/assets/seller/1mdm-product-1.png" } },
      { id: 2, title: "Advertising tools", listContent: { heading: "Increase exposure by up to 120% with a suite of smart advertising tools.", description: "Get your products placed in the right spots to be noticed by the exact audience you are targeting." ,imageSrc:"/src/assets/seller/1mdm-product-image-4.png" } },
      { id: 3, title: "Data and analytics", listContent: { heading: "Optimize your every move with in-depth data and customer insights", description: "Improve performance with dashboards detailing product exposure, click volume, spend, average cost, store visits, and more.!",imageSrc:"/src/assets/seller/1mdm-product-2.png"  } },
      { id: 4, title: "Customers support", listContent: { heading: "Know you’re supported throughout your journey", description: "From onboarding help to online chats to local support during business hours and account optimization tips -- we’re here for you" ,imageSrc:"/src/assets/seller/1mdm-product-3.png" } }
    ];
    
    const [selectedSection, setSelectedSection] = useState(sections[0]);

    // const testimonials = [
    //   {
    //     text: "Mr David runs a manufacturing company that works in this field of medical devices. With administrative and production across the country. With full respect for environment and several years’ experience using IP systems that are conventional",
    //     image: "/src/assets/seller/slider-1.webp", // Change this to your actual image path
    //     name: "person1",
    //   },
    //   {
    //     text: "Lab Evolution is an import - export company of reagents and laboratory equipment established over a decade. Our company’s team of experts (in the instrumentations and reagents market) carefully follows customers all over the world. Lab Evolution is able to offer all the most competitive and popular brands and the best quality products for your laboratory.",
    //     image: "/src/assets/seller/slider-2.webp",
    //     name: "person2",
    //   },
    //   {
    //     text: "Rupesh Kanna found himself in between jobs in 2016. He started a blog, and wrote about his past experience as a lab technician while sharing his knowledge on imaging techniques. Kanna wanted to see more diversity in the medical devices industry and specilised high-quality pigmented imaging process, so he decided to create his own product line",
    //     image: "/src/assets/seller/slider-3.webp",
    //     name: "person3",
    //   },
    //   {
    //     text: "LTA International Global Services LLC is a Florida-based export management company that sells top Medical device products from major US brands to importers and distributors around the globe. Founded in 1994 by Loyd, LTA's long-standing expertise in logistics and pricing has made it one of the most successful international trade businesses in the USA.",
    //     image: "/src/assets/seller/slider-4.webp",
    //     name: "person4",
    //   },
    // ];


  useEffect(() => {
    if (buyersCount < 26000000) {
      const interval = setInterval(() => {
        setbuyersCount((prev) => prev + 1);
      }, 1); // Adjust speed by changing the interval (in ms)

      return () => clearInterval(interval); // Cleanup interval on unmount
    }
  }, [buyersCount]);

  useEffect(() => {
    if (productCount < 400000) {
      const interval = setInterval(() => {
        setproductCount((prev) => prev + 1);
      }, 1); // Adjust speed by changing the interval (in ms)

      return () => clearInterval(interval); // Cleanup interval on unmount
    }
  }, [productCount]);


  useEffect(() => {
    if (countriesCount < 200) {
      const interval = setInterval(() => {
        setcountriesCount((prev) => prev + 1);
      }, 1); // Adjust speed by changing the interval (in ms)

      return () => clearInterval(interval); // Cleanup interval on unmount
    }
  }, [countriesCount]);

 
    return (

        <div className={styles.seller}>

          {/* first section */}


            <div className={styles.sellerbdy}>
            <div className={styles.sellingcontent}>
            <h4 className={styles.contenth4}>Sell on 1mdm.com</h4>
                <h1 className={styles.contenth1}>Reach millions of B2B</h1>
                <h1 className={styles.contenth1}>buyers globally</h1>
                <div className={styles.btndiv}>
                    <button className={styles.btn}>Start selling</button>
                    <button className={styles.chatbtn}>Chat with consultant</button>

                </div>
            </div>
                
            <div className={styles.countsec}>
                <div>
                    <h3 className={styles.num}>{buyersCount}</h3> 
                    {/* 26,000,000 */}
                    <p className={styles.nump}>active buyers globally</p>
                </div>
                <div>
                    <h3 className={styles.num}>{productCount}</h3>
                    <p className={styles.nump}>product inquiries daily</p>
                </div>
                <div>
                    <h3 className={styles.num}>{countriesCount}</h3>
                    <p className={styles.nump}>countries and regions represented</p>
                </div>
            </div>
            </div>
           

             {/* second section */}


          <div className={styles.secsection}>
          <h2 className={styles.vhead}>1mdm.com is a leading ecommerce platform that helps SMEs go global</h2>
          <div className={styles.vediobody}>
          <div className={styles.vediocontent}>

          <iframe 
  className={styles.vedio} 
  src="https://www.youtube.com/embed/TN7iJyc5Uks?start=6" 
  frameBorder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
  allowFullScreen
></iframe>


</div>
<div className='vediopcontent'>
    <p className={styles.vp}>Connect with millions of business buyers from around the world.</p>
    <p className={styles.vp}>Get the tools and know-how to build a successful ecommerce presence for your business.</p>
    <p className={styles.vp}>Pocket more from each sale, with take rates as low as 0% in some cases.</p>
</div>
</div>


           </div>


          {/* third section */}

          
            <div className={styles.thirdsec}>
            <h2 className={styles.thirdhead}>Largest number of products & categories of medical devices on a single place - 1mdm.com</h2>
            <p className={styles.tp}>Connect with buyers worldwide for your product & start selling now.</p>
           </div>


          {/* fourth section */}


           <div className={styles.fourthsec}>
            <h3 className={styles.fh}>Grow your business with a suite of tools built for you</h3>
           </div>


           
          {/* fifth section */}

           <div className={styles.appcontainer}>
      <div className={styles.sidebar}>
        {sections.map((section) => (
          <div
            key={section.id}
            className={styles.sidebaritem}
            // className={`styles.sidebaritem ${section.id === selectedSection.id ? "active" : ""}`}
            // className={`sidebaritem ${section.id === selectedSection.id ? "active" : ""}`}
            onClick={() => setSelectedSection(section)}
          >
            {section.title}
          </div>
        ))}
      </div>
      <div className={styles.listContent}>
        <div className={styles.custContent}>
        <h2 className={styles.custContentHead}>{selectedSection.listContent.heading}</h2>
        <p className={styles.custContentp}>{selectedSection.listContent.description}</p>
       
        </div>
       
        <div className={styles.custImg}>
        <img
              src={(selectedSection.listContent.imageSrc)}
                className={styles.listDescImage}
            />

      {/* <img src={getImageUrl}/> */}
       </div>
      </div>
     
    </div>
      
        
        {/* slide section */}

        <div className={styles.carousel}>
        <h2 className={styles.sliderheading}>
        Success stories from 1mdm.com sellers
      </h2>

        <Swiper navigation={true} modules={[Navigation]} className={styles.swiper}>
          <SwiperSlide className={styles.slide}>
            <div className={styles.content}>
              <p className={styles.quote}>
                <span className={styles.quoteMark}>❝</span>
               Mr David runs a manufacturing company that works in this field of medical devices. With administrative and production across the country. With full respect for environment and several years’ experience using IP systems that are conventional
              </p>
              <img src={person1} alt="person1" className={styles.image}/>
            </div>

            
           
            </SwiperSlide>
          

            <SwiperSlide className={styles.slide}>
            <div className={styles.content}>
              <p className={styles.quote}>
                <span className={styles.quoteMark}>❝</span>
                Lab Evolution is an import - export company of reagents and laboratory equipment established over a decade. Our company’s team of experts (in the instrumentations and reagents market) carefully follows customers all over the world. Lab Evolution is able to offer all the most competitive and popular brands and the best quality products for your laboratory.
              </p>
              <img src={person2} alt="person2" className={styles.image}/>
            </div>

            
           
            </SwiperSlide>
          

            <SwiperSlide className={styles.slide}>
            <div className={styles.content}>
              <p className={styles.quote}>
                <span className={styles.quoteMark}>❝</span>
                Rupesh Kanna found himself in between jobs in 2016. He started a blog, and wrote about his past experience as a lab technician while sharing his knowledge on imaging techniques. Kanna wanted to see more diversity in the medical devices industry and specilised high-quality pigmented imaging process, so he decided to create his own product line
                
              </p>
              <img src={person3} alt="person3" className={styles.image}/>
            </div>

            
           
            </SwiperSlide>
          

            <SwiperSlide className={styles.slide}>
            <div className={styles.content}>
              <p className={styles.quote}>
                <span className={styles.quoteMark}>❝</span>
                LTA International Global Services LLC is a Florida-based export management company that sells top Medical device products from major US brands to importers and distributors around the globe. Founded in 1994 by Loyd, LTA's long-standing expertise in logistics and pricing has made it one of the most successful international trade businesses in the USA.
              </p>
              <img src={person4} alt="person4" className={styles.image}/>
            </div>

            
           
            </SwiperSlide>
          
          {/* Add more slides here */}
        </Swiper>
      </div>
   

   {/* seventh section */}

   <div className={styles.bussiness}>  
   <p className={styles.headingBussiness}>Ready to Grow Your Business?</p>
                    <button className={styles.sellbtn}>Start selling</button>
                    <button className={styles.chatusbtn}>Chat with consultant</button>

   </div>

        </div>
    );
}

export default Seller;

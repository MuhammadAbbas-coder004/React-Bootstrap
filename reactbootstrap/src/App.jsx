import React from 'react'
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Card from './components/Card';
import Footer from './assets/Footer';

const App = () => {

  return (
    <>
<Navbar/>
<Carousel/>

<>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(18rem, 1fr))",
        gap: "20px",
        padding: "20px",
        marginTop : "50px"
      }}
    >
      <Card       
       img={"https://i.pinimg.com/736x/73/cf/53/73cf53aed6d37cee8a465784fb9a4555.jpg"} 
    description= {"Vivi X300 16GB/512GB Model 2025"}  
    category = {"the Series 7 or the newer Ultra 3,such as a trail loop or sport band."}
    price = {"Rs,  339,999"} 
    
        />
      
          <Card       
       img={"https://i.pinimg.com/736x/e2/6a/4c/e26a4cc3a3f30c27359bd5a731f85034.jpg"} 
    description= {"Apple Smart Watch  series 6 Model 2020"}  
    category = {"18-hour battery life with fast charging and water resistance"}
    price = {"Rs, 100,000"} 
    
        />

            <Card       
       img={"https://i.pinimg.com/736x/d1/5b/da/d15bda2e80ebba0f8e6135251b37dbfc.jpg"} 
    description= {"Men,s Upper"}  
    category = {"The term upper in men's clothing generally refers to topwear "}
    price = {"Rs, 30,99"} 
    
        />

            <Card       
       img={"https://i.pinimg.com/736x/e1/6a/89/e16a896698cb8b69265bf95fd826295e.jpg"} 
    description= {"Air shoes for men,s"}  
    category = {"Air shoes in Pakistan mainly refer to Nike Air models"}
    price = {"Rs, 3,000 "} 
    
        />

            <Card       
       img={"https://i.pinimg.com/736x/80/09/b6/8009b6734b9843d65f6be043ebbd63dd.jpg"} 
    description= {"boAt Airdopes 280 ANC"}  
    category = {"boAt Airdopes offers features like 32dB Active Noise Cancellation,huge 60-hour battery"}
    price = {"Rs, 7,000"} 
    
        />

            <Card       
       img={"https://i.pinimg.com/736x/40/5d/1c/405d1ce8568c775dc6e1a5c2cee48324.jpg"} 
    description= {"Men,s Perfume"}  
    category = {"Tomfo Wood perfumes for men in Pakistan range from affordable attars "}
    price = {"Rs, 2,199"} 
    
        />


            <Card       
       img={"https://i.pinimg.com/736x/17/a6/e8/17a6e89c804d8ca1456beb00cae13d22.jpg"} 
    description= {"Wind Comfort Serum"}  
    category = {"looking for serums for weather-related skin needs with popular options including Vitamin C"}
    price = {"Rs, 31,99"} 
    
        />


            <Card       
       img={"https://i.pinimg.com/736x/20/cc/f7/20ccf73437ab5d2e13742ed9bb564bb7.jpg"} 
    description= {"Sony headphones WH-1000XM4"}  
    category = {"Sony headphones in Pakistan offer a wide range, from budget-friendly wired models"}
    price = {"Rs, 36,999"} 
    
        />


            <Card       
       img={"https://i.pinimg.com/736x/b8/7d/42/b87d427b41c4a3eea2ca6b3f3530bfd4.jpg"} 
    description= {"Men's Nike hoodie"}  
    category = {"Men's Nike hoodies in Pakistan offer soft fleece, adjustable hoods, kangaroo pockets"}
    price = {"Rs, 4,199"} 
    
        />


            <Card       
       img={"https://i.pinimg.com/1200x/fa/3c/37/fa3c37be255eebc4aecfb32f1fb11a31.jpg"} 
    description= {"Yolako watches for ladies"}  
    category = {"in Pakistan are affordable, trendy fashion watches featuring quartz movement"}
    price = {"Rs, 19,99"} 
    
        />


            <Card       
       img={"https://i.pinimg.com/1200x/54/47/75/544775eeec4676e5da01b2ccf5042110.jpg"} 
    description= {"Iphone 17Pro 512GB/1TB 2025 Model"}  
    category = {"The iPhone 17 Pro and retailer, featuring the A19 Pro chip, 48MP Pro cameras, 6.3"}
    price = {"Rs, 600,000"} 
    
        />


            <Card       
       img={"https://i.pinimg.com/736x/a5/79/06/a57906e26a0f0246a5a522b5be4d88f4.jpg"} 
    description= {"Men's loose t-shirts"}  
    category = {"Pakistan are widely available, focusing on comfort with styles like Oversized"}
    price = {"Rs, 15,99"} 
    
        />

            <Card       
       img={"https://i.pinimg.com/736x/06/1b/d4/061bd41ebe62f184e5cdf9f523c1c051.jpg"} 
    description= {"Laptop 5, Pro 10, Go 3"}  
    category = {"Microsoft Surface laptops are available in Pakistan"}
    price = {"Rs, 600,000"} 
    
        />

            <Card       
       img={"https://i.pinimg.com/1200x/a8/f8/c5/a8f8c50aae4b3bd12b1c81e631d03774.jpg"} 
    description= {"Ladies' handbag"}  
    category = {"affordable PU leather totes on genuine leather styles from brands like HUB,"}
    price = {"Rs, 36,99"} 
    
        />

            <Card       
       img={"https://i.pinimg.com/736x/2c/be/49/2cbe499d44be0719a775ecd457c85d41.jpg"} 
    description= {"Backpack catering to students, travelers"}  
    category = {"Pakistan are widely available from local to international brands, "}
    price = {"Rs, 9,999"} 
    
        />

            <Card       
       img={"https://i.pinimg.com/1200x/6e/c7/e9/6ec7e93aada2d813a7e8dcfc4a0d3679.jpg"} 
    description= {"Ladies   ,Water Sleeping Mask , Lip Glowy Balm, Cream Skin Care"}  
    category = {"Deep hydration, moisture barrier repair, overnight skincare Sleep Care Technology"}
    price = {"Rs, 15,999"} 
    
        />
      
    
    </div>

</>
<><Footer/></>
</>
  )
}

export default App
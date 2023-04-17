import React from 'react'
import './style.css'

export default function Nutrition() {
  return (
    <div className='nutrition'>
      <div className='hero'>
        <div className='container'>
          <h1>Your trusted source of food and nutrition information.</h1>
          <div className='inner'>
            <img src='https://www.eatright.org/-/media/images/mastheads/homepage-masthead/gettyimages-1353631308.jpg?as=0&w=520&hash=A375ACE869B7E15A0F9C1F0990FB3718' alt='' />
            <p>
              Welcome to our nutrition website, where we provide reliable resources on nutrition and healthy eating. Our mission is to help you make informed choices about your diet and lifestyle, and empower you to take control of your health and well-being. Our content ranges from practical advice on meal planning and healthy eating habits to in-depth articles on the science of nutrition and disease prevention. We offer a variety of tools and resources, such as interactive calculators, meal planners, and shopping guides, to help you make informed decisions about the foods you eat and the supplements you take. Thank you for visiting, and we hope you find our resources helpful!
            </p>
          </div>
        </div>
      </div>

      <div className='articles'>
        <div className='container'>
          <h2>Featured Articles</h2>

          <div className='articles-inner'>
            {
              articles.map((a, i) => (
                <a href={a.link} target='_blank' rel="noopener noreferrer" key={i}>
                  <img src={a.img} alt='' />
                  <div className='info'>
                    <h3>{a.title}</h3>
                    <p>{a.small_desc}</p>
                  </div>
                </a>
              ))
            }
          </div>
        </div>
      </div>

      <div className='videos'>
        <div className='container'>
          <h2>Videos may help</h2>

          <div className='videos-inner'>
            {
              videos.map((y, i) => (
                <iframe
                  key={i}
                  src={y}
                  title={`embed-${i}`}
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}


const articles = [
  {
    link: 'https://www.everydayhealth.com/diet-nutrition/creative-ways-to-enjoy-eggs-for-breakfast-lunch-and-dinner/',
    title: '13 Creative Ways to Enjoy Eggs for Breakfast, Lunch, and Dinner',
    img: 'https://images.everydayhealth.com/images/creative-ways-to-enjoy-eggs-hero-1440x810.jpg?sfvrsn=f7a647db_4',
    small_desc: 'Choline is one nutrient that can be hard to find in foods, but eggs are one of the top sources.'
  },
  {
    link: 'https://www.everydayhealth.com/diet-nutrition/diet/low-carb-diet-beginners-guide-food-list-meal-plan-tips/',
    title: 'A Complete Low-Carb Diet Guide for Beginners',
    img: 'https://images.everydayhealth.com/images/ultimate-guide-to-a-low-carb-diet-1440x810.jpg?sfvrsn=1a3f2e84_4',
    small_desc: 'Lean protein, low-carb fruit, and nonstarchy veggies are staples in a low-carb diet plan.'
  }
]

const videos = [
  'https://www.youtube.com/embed/jwWpTAXu-Sg',
  'https://www.youtube.com/embed/YwYa9UuEhqg',

]
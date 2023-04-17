import React from 'react'
import './style.css'

function FitnessRecommendations() {
  return (
    <div className='fit-rec container'>
      <h1>Fitness Recommendations to kick start your fitness journey</h1>

      <div className='yt-embeds'>
        <h2>Youtube recommendations</h2>
        <div className='grid-2'>
          {
            youtubeRecs.map((y, i) => (
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

      <div className='articles'>
        <h2>Articles you may like</h2>
        <div className='grid-2'>
          {
            articlesRecs.map((a, i) => (
              <a href={a.url} target='_blank' rel="noopener noreferrer" key={i}>
                <img src={a.img} alt='article' />
                <h3>{a.title}</h3>
              </a>
            ))
          }
        </div>
      </div>
    </div>
  )
}

const youtubeRecs = [
  'https://www.youtube.com/embed/gC_L9qAHVJ8',
  'https://www.youtube.com/embed/WjoBQsoekgk'
]

const articlesRecs = [
  {
    title: 'How to Become More Flexible and Why It’s Important',
    url: 'https://www.everydayhealth.com/fitness/how-become-more-flexible-because-yes-its-important/',
    img: 'https://images.everydayhealth.com/images/ehfc-flexibility-and-exercise-1440x810.jpg?sfvrsn=12c2747a_4'
  },
  {
    title: 'Why Exercise Boosts Mood and Energy',
    url: 'https://www.everydayhealth.com/fitness/workouts/boost-your-energy-level-with-exercise.aspx',
    img: 'https://images.everydayhealth.com/images/healthy-living/fitness/why-exercise-affects-our-mood-and-energy-722x406.jpg?sfvrsn=432e2f77_0'
  },
  {
    title: 'Everything You Need to Know About Working Out at Home',
    url: 'https://www.everydayhealth.com/fitness/everything-you-need-to-know-about-working-out-at-home/',
    img: 'https://images.everydayhealth.com/images/everything-you-need-to-know-about-working-at-home-722x406.jpg?sfvrsn=92d269c8_4'
  },
  {
    title: 'How Sleep Affects Fitness',
    url: 'https://www.everydayhealth.com/fitness/intimate-relationship-between-fitness-sleep/',
    img: 'https://images.everydayhealth.com/images/healthy-living/fitness/fitness-guide-fitness-and-sleep-722x406.jpg?sfvrsn=f062fdd8_0'
  },
]

export default FitnessRecommendations
import React from 'react';

const Interests = () => {
  return (
    <div
      id='interests'
      className='jumbotron jumbotron-fluid m-0'
      style={{ backgroundColor: 'white' }}
    >
      <div className='container container-fluid'>
        <div className='row'>
          <div className='col d-lg-inline align-self-center'>
            <h1 className='display-4 pb-4 text-center'>Interests</h1>
            {/* <p className="lead text-center">
              Outside of software engineering, I love to meditate, read, and play soccer!
            </p><br/> */}
            <div className='row'>
              <div className='col text-center'>
                <p className='lead text-center' style={{ fontSize: '28px' }}>
                  Meditation
                </p>
                <img alt='' src='https://img.icons8.com/nolan/128/light.png' />
                <p className='lead text-center'>
                  {/* Every morning, I begin my day with{' '}
                  <a
                    href='https://www.headspace.com/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Headspace
                  </a>
                  . I started meditating about one year ago and have learned how
                  to be more focused, mindful, and relaxed. So far, I've
                  meditated for a total of 1,385 minutes, and I am continuing to
                  grow this number every day!
                   */}
                  Every morning, I start my day with meditation. From the moment
                  I started coding I started to meditate and learned how to
                  focus and relax more. As my mind begins to calm down the day
                  begins I can come up with new ideas.
                </p>
              </div>
              <div className='col text-center'>
                <p className='lead text-center' style={{ fontSize: '28px' }}>
                  Reading
                </p>
                <img
                  alt=''
                  src='https://img.icons8.com/nolan/128/saving-book.png'
                />
                <p className='lead text-center'>
                  I have been a reader since I was young. I love reading stories
                  because it takes us to another world. No one in that world can
                  stop our imagination. I still try to find good books to read.
                  It helps to calm my mind. I am very interested in teaching
                  others what I have learned, which helps me to learn more about
                  that subject.
                  {/* <a
                    href='https://www.goodreads.com/ana_ashrafi'
                    target='_blank'
                  >
                    Goodreads
                  </a> */}
                  !
                </p>
              </div>
              <div className='col text-center'>
                <p className='lead text-center' style={{ fontSize: '28px' }}>
                  Soccer
                </p>
                <img
                  alt=''
                  src='https://img.icons8.com/nolan/128/football2.png'
                />
                <p className='lead text-center'>
                  Playing football is one of the habits from a young age.
                  Although I can not say that I am a good player, but it makes
                  me very happy when I play football. There is nothing happier
                  than playing with friends.
                </p>
              </div>
              <div className='col text-center'>
                <p className='lead text-center' style={{ fontSize: '28px' }}>
                  Food
                </p>
                <img alt='' src='https://img.icons8.com/nolan/128/meal.png' />
                <p className='lead text-center'>
                  I'm not a foodie but I'm still excited to discover new
                  flavors. The pleasure of discovering and eating new flavors is
                  something else. I'm still a person who likes to share my
                  favorite food, and that makes me happy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Interests;

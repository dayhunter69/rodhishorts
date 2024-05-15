import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
  {
    id: 1,
    name: 'Saroj Thapa',
    position: 'MD, Sosthenes Educational Consultancy ',
    text: "The team's expertise and dedication exceeded my expectations. Highly recommend their services for boosting digital presence",
    image:
      'https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png',
  },
  {
    id: 2,
    name: 'Saurab Adhikari',
    position: 'CEO Intern Nepal',
    text: 'I was skeptical at first, but after using this product,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet nisi at elit venenatis fringilla. Cras ut semper . ',
    image:
      'https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png',
  },
  {
    id: 3,
    name: 'Raju Suwal',
    position: 'Co-founder, Fitfashion Design Academy ',
    text: 'This is hands down the best product Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet sit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreper quam, sit. ',
    image:
      'https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png',
  },
];

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div id="testimonial" className="max-w-4xl mx-auto py-16">
      <h2 className="text-center text-rodhi-red text-4xl md:text-5xl mb-10">
        What Our Customers Say
      </h2>
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="px-8 h-[65vh]">
            <div className="bg-white rounded-lg shadow-xl p-8 h-full">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-[6rem] h-[6rem] rounded-full mx-auto shadow-md"
                />
              </div>
              <h3 className="text-3xl text-center font-semibold mt-[4rem]">
                {testimonial.name}
              </h3>
              <p className="text-center italic text-lg font-extralight px-8">
                {testimonial.position}
              </p>
              <p className="text-gray-700 mt-[3rem] text-xl font-light px-10 text-center">
                {testimonial.text}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialSlider;

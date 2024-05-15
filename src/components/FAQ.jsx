import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
const FAQs = [
  {
    id: 1,
    question: 'Can I start with a trial?',
    answer:
      'Yes, we offer a free trial for a single video. Contact us via email or book a call.',
  },
  {
    id: 2,
    question: 'Who should consider our vertical video service?',
    answer:
      'Individual content creators or businesses looking to create vertical videos for platforms such as TikTok, Instagram Reels, and YouTube Shorts.',
  },
  {
    id: 3,
    question: 'Will I have the same video editor for every order?',
    answer: "Yes, you'll have a dedicated video editor for consistency.",
  },
  {
    id: 4,
    question: 'What types of content can be converted into vertical videos?',
    answer:
      'Our vertical video service can convert various types of content, including horizontal videos, podcasts, and promotional clips, into a vertical format suitable for platforms like TikTok, Instagram Reels, and YouTube Shorts.',
  },
  {
    id: 5,
    question: 'What software do you use?',
    answer: 'We use Davinci Resolve for editing.',
  },
  {
    id: 6,
    question: 'Do you offer revisions?',
    answer: 'Yes, you can request unlimited revisions per order.',
  },
  {
    id: 7,
    question: 'How quickly will I receive the video?',
    answer: 'Typically within 2-3 working days.',
  },
  {
    id: 8,
    question: 'Can I cancel my subscription?',
    answer: 'Yes, you can cancel anytime.',
  },
];
const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="text-black py-12 pb-[10rem] mt-[8rem]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center text-rodhi-red text-4xl md:text-5xl user-select-none">
          Got questions? Check out our FAQs for answers!
        </h2>
        <div className="space-y-4 mt-10">
          {FAQs.map((faq, index) => (
            <div
              key={faq.id}
              className="bg-gray-100 text-black rounded-md py-4 mx-2"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleAccordion(index)}
              >
                <span className="text-gray-400 user-select-none pl-5 text-3xl">
                  {activeIndex === index ? '-' : '+'}
                </span>
                <h3 className="text-xl font-light user-select-none text-center mx-auto">
                  {faq.question}
                </h3>
              </div>
              <CSSTransition
                in={activeIndex === index}
                timeout={300}
                classNames="answer"
                unmountOnExit
              >
                <p className="mt-4 font-extralight user-select-none text-center px-10">
                  {faq.answer}
                </p>
              </CSSTransition>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;

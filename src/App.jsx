import HowItWorks from './components/HowItWorks';
import WelcomePage from './components/WelcomePage';
import VideoSlider from './components/VideoSlider';
import Testimonials from './components/Testimonials';
import FAQSection from './components/FAQ';
import Pricing from './components/Pricing';
import BookACall from './components/BookACall';
import Footer from './components/Footer';
import ScrollAnimation from './components/ScrollAnimation';
import FadeInOutAnimation from './components/FadeInOutAnimation';

const App = () => (
  <div>
    <FadeInOutAnimation>
      <ScrollAnimation>
        <WelcomePage />
      </ScrollAnimation>
    </FadeInOutAnimation>

    <FadeInOutAnimation>
      <HowItWorks />
    </FadeInOutAnimation>

    <VideoSlider />
    <Testimonials />
    <Pricing />
    <FAQSection />
    <BookACall />

    <Footer />
  </div>
);

export default App;

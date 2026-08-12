// submissions/react-animated-accordion-22924/Accordion.jsx
const { useState, useRef, useEffect } = React;

const AccordionItem = ({ title, content, isOpen, onClick }) => {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  // Dynamically calculate the height of the content block so we can animate it via CSS max-height
  useEffect(() => {
    if (isOpen && contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <div 
      className="ease-card ease-card-glass ease-mb-4"
      style={{ overflow: 'hidden', transition: 'all 0.3s ease' }}
    >
      <button
        className="ease-btn"
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '20px',
          background: 'transparent',
          border: 'none',
          color: 'white',
          cursor: 'pointer',
          textAlign: 'left'
        }}
        onClick={onClick}
      >
        <span className="ease-text-lg ease-font-semibold">{title}</span>
        
        {/* Animated Chevron Icon */}
        <span 
          style={{ 
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            fontSize: '1.2rem'
          }}
        >
          ▼
        </span>
      </button>

      {/* Accordion Content Wrapper */}
      <div 
        style={{
          maxHeight: `${height}px`,
          transition: 'max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          background: 'rgba(0,0,0,0.2)'
        }}
      >
        <div ref={contentRef} style={{ padding: '0 20px 20px 20px' }}>
          {/* 
            Notice how we conditionally apply EaseMotion classes to the inner text! 
            When the accordion opens, the wrapper expands (CSS max-height), 
            but the text itself performs an `ease-slide-up` bounce entry!
          */}
          <p 
            className={`ease-text-muted ${isOpen ? 'ease-slide-up ease-duration-normal' : 'hidden'}`}
            style={{ margin: 0, lineHeight: 1.6 }}
          >
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};

const Accordion = () => {
  // Store the index of the currently open accordion. null means all closed.
  const [openIndex, setOpenIndex] = useState(0);

  const accordionData = [
    {
      id: 1,
      title: 'What is EaseMotion CSS?',
      content: 'EaseMotion is a utility-first CSS animation framework designed to bring premium, hardware-accelerated animations to modern web applications with zero JavaScript dependencies. By simply attaching classes like `.ease-slide-up`, you achieve instant UI choreographics.'
    },
    {
      id: 2,
      title: 'How does it work with React?',
      content: 'It works beautifully! Because EaseMotion relies purely on CSS classes rather than heavy JavaScript `requestAnimationFrame` runtimes, you can safely use it alongside React\'s Virtual DOM and new React 19 Compiler without triggering any re-renders or performance bottlenecks.'
    },
    {
      id: 3,
      title: 'Can I use it with Next.js App Router?',
      content: 'Absolutely. All EaseMotion utility classes are 100% compatible with React Server Components (RSC) and Static Site Generation (SSG). You can safely import the framework in your global layout.'
    }
  ];

  const handleToggle = (index) => {
    // If the clicked item is already open, close it (set to null). Otherwise, open the clicked item.
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="ease-padding-8" style={{ maxWidth: '800px', margin: '0 auto', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      
      <header className="ease-fade-in ease-duration-normal ease-mb-8" style={{ textAlign: 'center' }}>
        <h1 className="ease-text-4xl ease-font-bold ease-gradient-text">FAQ Accordion</h1>
        <p className="ease-text-muted ease-mt-2">Animated with React state and EaseMotion classes</p>
      </header>

      <div className="ease-slide-up ease-duration-slow">
        {accordionData.map((item, index) => (
          <AccordionItem 
            key={item.id}
            title={item.title}
            content={item.content}
            isOpen={openIndex === index}
            onClick={() => handleToggle(index)}
          />
        ))}
      </div>

    </div>
  );
};

ReactDOM.render(<Accordion />, document.getElementById('root'));

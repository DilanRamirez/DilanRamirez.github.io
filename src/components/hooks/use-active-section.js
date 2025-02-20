// useActiveSection.js
import { useEffect, useState } from "react";

const useActiveSection = (sectionIds, offset = 0) => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const options = {
      root: null,
      rootMargin: `-${offset}px 0px 0px 0px`,
      threshold: 0.6,
    };

    const observer = new IntersectionObserver(handleIntersect, options);
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [sectionIds, offset]);

  return activeSection;
};

export default useActiveSection;

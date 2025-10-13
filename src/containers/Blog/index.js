import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faPenFancy } from '@fortawesome/free-solid-svg-icons';
import SectionHeading from '../../components/SectionHeading';

const Blog = ({section}) => {
  return ([
      <div key="blog_header" className="max-w-full">
        <div className="w-full">
          <SectionHeading light>{section.title}</SectionHeading>
        </div>
      </div>,
      <div key="blog_content" className="max-w-full">
        <div className="w-full">
          <div className="max-w-3xl mx-auto p-10 bg-white/10 backdrop-blur-md rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] text-center border border-white/20">
            <div className="text-brand mb-5">
              <FontAwesomeIcon icon={faPenFancy} size="3x" className="opacity-90" />
            </div>
            <h3 className="text-4xl font-semibold text-white mb-2 tracking-tight">JT's Thoughts</h3>
            <p className="text-xl text-gray-200 italic mb-6 font-light">Technical insights, stories, and ideas</p>
            <p className="text-lg leading-[1.7] text-gray-100 mb-8 text-left">
              Explore my technical blog where I share hands-on experiences with software development,
              DevOps practices, container technologies, and emerging tech. From LLM compression techniques
              to WSL configurations and Docker workflows, I document practical solutions and lessons learned
              from real-world projects.
            </p>
            <div className="mb-9 flex flex-wrap justify-center gap-2.5">
              <span className="bg-gradient-to-r from-brand to-brand-light text-white py-2 px-4 rounded-[20px] text-sm font-medium shadow-[0_3px_8px_rgba(52,152,219,0.3)] transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[0_5px_15px_rgba(52,152,219,0.4)]">Software Development</span>
              <span className="bg-gradient-to-r from-brand to-brand-light text-white py-2 px-4 rounded-[20px] text-sm font-medium shadow-[0_3px_8px_rgba(52,152,219,0.3)] transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[0_5px_15px_rgba(52,152,219,0.4)]">DevOps</span>
              <span className="bg-gradient-to-r from-brand to-brand-light text-white py-2 px-4 rounded-[20px] text-sm font-medium shadow-[0_3px_8px_rgba(52,152,219,0.3)] transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[0_5px_15px_rgba(52,152,219,0.4)]">Cloud Technologies</span>
              <span className="bg-gradient-to-r from-brand to-brand-light text-white py-2 px-4 rounded-[20px] text-sm font-medium shadow-[0_3px_8px_rgba(52,152,219,0.3)] transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[0_5px_15px_rgba(52,152,219,0.4)]">Machine Learning</span>
              <span className="bg-gradient-to-r from-brand to-brand-light text-white py-2 px-4 rounded-[20px] text-sm font-medium shadow-[0_3px_8px_rgba(52,152,219,0.3)] transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[0_5px_15px_rgba(52,152,219,0.4)]">Linux Systems</span>
            </div>
            <a href="https://thoughts.jonathantey.com"
               target="_blank"
               rel="noopener noreferrer"
               className="inline-block bg-gradient-to-r from-brand to-brand-dark text-white py-4 px-8 rounded-[30px] no-underline font-semibold text-lg shadow-[0_4px_15px_rgba(52,152,219,0.3)] transition-all duration-300 border-none hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(52,152,219,0.4)] hover:text-white visited:text-white"
               aria-label="Visit JT's Thoughts technical blog (opens in new tab)">
              Visit Blog <FontAwesomeIcon icon={faExternalLinkAlt} className="ml-2 transition-transform duration-200" />
            </a>
          </div>
        </div>
      </div>
    ]
  );
};

export default Blog;
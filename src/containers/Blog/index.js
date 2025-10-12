import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faPenFancy } from '@fortawesome/free-solid-svg-icons';

const Blog = ({section}) => {
  return ([
      <div key="blog_header" className="row">
        <div className="col-sm">
          <h2 className="heading">{section.title}</h2>
        </div>
      </div>,
      <div key="blog_content" className="row">
        <div className="col-sm">
          <div className="blog-highlight">
            <div className="blog-icon">
              <FontAwesomeIcon icon={faPenFancy} size="3x" />
            </div>
            <h3>JT's Thoughts</h3>
            <p className="blog-tagline">Technical insights, stories, and ideas</p>
            <p className="blog-description">
              Explore my technical blog where I share hands-on experiences with software development, 
              DevOps practices, container technologies, and emerging tech. From LLM compression techniques 
              to WSL configurations and Docker workflows, I document practical solutions and lessons learned 
              from real-world projects.
            </p>
            <div className="blog-topics">
              <span className="topic-tag">Software Development</span>
              <span className="topic-tag">DevOps</span>
              <span className="topic-tag">Cloud Technologies</span>
              <span className="topic-tag">Machine Learning</span>
              <span className="topic-tag">Linux Systems</span>
            </div>
            <a href="https://thoughts.jonathantey.com" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="btn-blog">
              Visit Blog <FontAwesomeIcon icon={faExternalLinkAlt} />
            </a>
          </div>
        </div>
      </div>
    ]
  );
};

export default Blog;
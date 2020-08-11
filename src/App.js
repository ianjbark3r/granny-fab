import React, { Component } from 'react';

import Footer from './components/Footer';
import Hero from './components/Hero';
import Section from './components/Section';

import { sections } from './layout/Sections';

export default class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <Hero />
        {sections.map((section, index) => {
          let nextIndex = index + 1;

          if (nextIndex === sections.length) {
            nextIndex = 0;
          }

          let nextId = sections[nextIndex].id;

          return (
            <Section
              section={section} 
              index={index}
              key={`section-${section.id}`}
              nextId={nextId}
              url={section.url}
            />
          )            
        })}
        <Footer />
      </div>
    );
  }
}
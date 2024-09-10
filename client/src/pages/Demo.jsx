
import React, { useState, useEffect } from 'react';
import { siteconfig } from '../Cofig/Config'

const Demo = () => {
        const [configs, setConfigs] = useState({});
        useEffect(() => {
          setConfigs(siteconfig);
        }, []);

  return (
   <div>
      {Object.keys(configs).map(key => (
        <div key={key}>
          <h2>{configs[key].config.name}</h2>
          <p>{configs[key].config.theme}</p>
          <p>{configs[key].config.about}</p>
          <ul>
            <li>Hosts: {configs[key].config.hosts.join(', ')}</li>
          </ul>
          <img src={configs[key].config.logo} alt="Logo" />
          <h2>Social Media Links</h2>
          <ul>
            {Object.entries(configs[key].config.social_media).map(([platform, link]) => (
              <li key={platform}>
                <a href={link}>{platform}</a>
              </li>
            ))}
          </ul>
          <h2>Demos</h2>
          {configs[key].config.demos.map(demo => (
            <div key={demo.id}>
              <h3>{demo.title}</h3>
              <p>{demo.description}</p>
              <p>{demo.industry}</p>
              <p>{demo.description}</p>
              <video controls width="500" height="300">
                <source src={demo.link} type="video/mp4" />
              </video>
              {/* <h2>{demo.content}</h2> */}
              
          
            </div>
          ))}
        </div>
      ))}
    </div>
    

  )
}

export default Demo


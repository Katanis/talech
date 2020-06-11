import React, { useState } from 'react';
import './Tabs.css';

function TabTitle(props) {
  return props.isActive === props.dataTab ? (
    <li
      onClick={props.onClick}
      className="tab-title tab-title--active"
      data-tab={props.dataTab}
    >
      {props.title}
    </li>
  ) : (
    <li onClick={props.onClick} className="tab-title" data-tab={props.dataTab}>
      {props.title}
    </li>
  );
}

function TabContent(props) {
  return (
    <p style={props.style} data-tab={props.dataTab}>
      {props.content}
    </p>
  );
}

const Tabs = (props) => {
  const [isActive, setActive] = useState('1');

  const changeActive = (ev) => {
    setActive(ev.target.getAttribute('data-tab'));
  };

  var listTitle = props.data.map((item) => (
    <TabTitle
      isActive={isActive}
      onClick={changeActive}
      dataTab={item.id}
      title={item.tabTitle}
    />
  ));
  var listContent = props.data.map((item) =>
    isActive === item.id ? (
      <TabContent dataTab={item.id} content={item.tabContent} />
    ) : (
      <TabContent
        style={{ display: 'none' }}
        dataTab={item.id}
        content={item.tabContent}
      />
    )
  );
  return (
    <div className="tabs">
      <ul className="tabs-titles">{listTitle}</ul>
      <div className="tab-content">{listContent}</div>
    </div>
  );
};

export default Tabs;

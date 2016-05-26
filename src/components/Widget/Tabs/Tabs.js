import React, { PropTypes } from 'react';
import ReactTabs from 'react-bootstrap/lib/Tabs';
import ReactTab from 'react-bootstrap/lib/Tab';

function Tabs({ tabs, data }) {
  return tabs === undefined ?
    undefined : (
    <ReactTabs defaultActiveKey={0} id="uncontrolled-tab-example">
      {tabs.map((tab, index) => (
        <ReactTab eventKey={index} title={tab}>{data[index]}</ReactTab>
      ))}
    </ReactTabs>
  );
}

Tabs.propTypes = {
  tabs: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
};

export default Tabs;

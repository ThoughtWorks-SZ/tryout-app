import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './StyleGuide.scss';
import Table from '../../components/Widget/Table/Table';
import Tabs from '../../components/Widget/Tabs/Tabs';
import Button from '../../components/Widget/Button/Button';
import Checkbox from '../../components/Widget/Checkbox';
import Dropdown from '../../components/Widget/Dropdown';
import Textbox from '../../components/Widget/Textbox';
import Popup from '../../components/Widget/Popup/Popup';

const title = 'Style Guide';
const tableHeaders = ['#', '名称', '最后修改时间', '状态', '操作'];
const tableData = [{
  name: '2016春季西南地区校招笔试题模板',
  lastModifyData: '2016-04-03',
  status: '未发布',
  operation: ['发布', '编辑', '查看', '删除'],
}, {
  name: '2016春季西南地区校招笔试题模板',
  lastModifyData: '2016-04-12',
  status: '已发布',
  operation: ['复制', '查看'],
}, {
  name: '2016春季西南地区校招笔试题模板',
  lastModifyData: '2016-04-21',
  status: '已发布',
  operation: ['复制', '查看'],
}]; // jscs:disable

const tabData = [<Table headers={tableHeaders} data={tableData} />, '未发布', '已发布'];

function StyleGuide(props, context) {
  context.setTitle(title);
  return (
    <div>
      {/* ----- Table ----- */}
      <div>
        <h2>Table</h2>
        <Table headers={tableHeaders} data={tableData} />
      </div>

      {/* ----- Tabs ----- */}
      <div>
        <h2>Tabs</h2>
        <Tabs tabs={['全部', '未发布', '已发布']} data={tabData} />
      </div>

      {/* ----- Button ----- */}
      <div>
        <h2>Button</h2>
        <Button buttonType="primary" buttonText="this is a primary button" />
        <Button buttonType="warning" buttonText="this is a warning button" />
        <Button buttonType="info" buttonText="this is a info button" />
        <Button buttonType="default" buttonText="this is a default button" />
      </div>

      {/* ----- Checkbox ----- */}
      <div>
        <h2>Checkbox</h2>
        <Checkbox /> This is Checkbox
      </div>

      {/* ----- Dropdown ----- */}
      <div>
        <h2>Dropdown</h2>
        <Dropdown items={['item1', 'item2', 'item3']} />
      </div>

      {/* ----- Popup ----- */}
      <div>
        <h2>Popup</h2>
        <Popup error="true" message="答案提交后将不能修改!" buttons={['取消', '确认提交']} />
      </div>

      {/* ----- Textbox ----- */}
      <div>
        <h2>Textbox</h2>
        <Textbox />
      </div>
    </div>
  );
}

StyleGuide.contextTypes = { setTitle: PropTypes.func.isRequired };

export default withStyles(s)(StyleGuide);

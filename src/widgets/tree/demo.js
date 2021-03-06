/**
 *
 * create by ligx
 *
 * @flow
 */
import * as React from 'react';
import Tree from './index.js';
import Widget from '../consts/index';
import { getBorder, getBorderRadius, getBoxShadow } from '@lugia/theme-utils';

const newData = [
  {
    value: 'Components',
    text: 'Components',
    children: [
      {
        value: 'General',
        text: 'General',

        children: [
          {
            value: 'Button 按钮',
            text: 'Button 按钮',
            icon: 'lugia-icon-financial_add_pic',
            children: [{ value: '皮皮', text: '皮皮' }, { value: '卡卡', text: '卡卡' }],
          },
          {
            value: 'Icon 图标',
            text: 'Icon 图标',
            icon: 'lugia-icon-financial_archive',
            describe: true,
          },
        ],
      },
      { value: '皮卡丘', text: '皮卡丘' },
      {
        value: 'Layout',
        text: 'Layout',
        children: [
          { value: 'Grid 栅格', text: 'Grid 栅格' },
          { value: 'Layout 布局', text: 'Layout 布局', describe: true },
        ],
      },

      {
        value: 'Navigation',
        text: 'Navigation',
        children: [
          { value: 'Affix 固钉', text: 'Affix 固钉', disabled: true },
          { value: 'Breadcrumb 面包屑', text: 'Breadcrumb 面包屑', describe: true },
          { value: 'Dropdown 下拉菜单', text: 'Dropdown 下拉菜单', notCanSelect: true },
          { value: 'Menu 导航菜单', text: 'Menu 导航菜单' },
          { value: 'Pagination 分页', text: 'Pagination 分页' },
          { value: 'Steps 步骤条', text: 'Steps 步骤条' },
        ],
      },

      {
        value: 'Data Entry',
        text: 'Data Entry',
        describe: true,
        children: [
          { value: 'AutoComplete 自动完成', text: 'AutoComplete 自动完成' },
          { value: 'Cascader 级联选择', text: 'Cascader 级联选择' },
          { value: 'Checkbox 多选框', text: 'Checkbox 多选框' },
          { value: 'DatePicker 日期选择框', text: 'DatePicker 日期选择框' },
          { value: 'Form 表单', text: 'Form 表单' },
          { value: 'Input 输入框', text: 'Input 输入框' },
        ],
      },
    ],
  },
];

const rowData = [
  { value: '1', text: '1' },
  { value: '1.1', text: '1.1', pid: '1', path: '1' },
  { value: '1.1.1', text: '1.1.1', pid: '1.1', path: '1/1.1' },
  { value: '1.1.1.1', text: '1.1.1.1', pid: '1.1.1', path: '1/1.1/1.1.1' },
  {
    value: '1.1.1.1.1',
    text: '1.1.1.1.1',
    pid: '1.1.1.1',
    path: '1/1.1/1.1.1/1.1.1.1',
    isLeaf: true,
  },
  { value: '1.2', text: '1.2', pid: '1', path: '1' },
  { value: '1.2.1', text: '1.2.1', pid: '1.2', path: '1/1.2', isLeaf: true },
  { value: '1.2.2', text: '1.2.2', pid: '1.2', path: '1/1.2' },
  { value: '1.2.2.1', text: '1.2.2.1', pid: '1.2.2', path: '1/1.2/1.2.2' },
  {
    value: '1.2.2.1.1',
    text: '1.2.2.1.1',
    pid: '1.2.2.1',
    path: '1/1.2/1.2.2/1.2.2.1',
    isLeaf: true,
  },
  {
    value: '1.2.2.1.2',
    text: '1.2.2.1.2',
    pid: '1.2.2.1',
    path: '1/1.2/1.2.2/1.2.2.1',
    isLeaf: true,
  },
  { value: '1.2.2.2', text: '1.2.2.2', pid: '1.2.2', path: '1/1.2/1.2.2', isLeaf: true },

  { value: '1.3', text: '1.3', pid: '1', path: '1' },
  { value: '1.3.1', text: '1.3.1', pid: '1.3', path: '1/1.3' },
  { value: '1.3.1.1', text: '1.3.1.1', pid: '1.3.1', path: '1/1.3/1.3.1', isLeaf: true },
  { value: '1.3.1.2', text: '1.3.1.2', pid: '1.3.1', path: '1/1.3/1.3.1', isLeaf: true },
  { value: '1.3.2', text: '1.3.2', pid: '1.3', path: '1/1.3' },
  { value: '1.3.2.1', text: '1.3.2.1', pid: '1.3.2', path: '1/1.3/1.3.2', isLeaf: true },
  { value: '1.3.2.2', text: '1.3.2.2', pid: '1.3.2', path: '1/1.3/1.3.2', isLeaf: true },
  { value: '1.3.3', text: '1.3.3', pid: '1.3', path: '1/1.3', isLeaf: true },

  { value: '2', text: '2' },
  { value: '2.1', text: '2.1', pid: '2', path: '2' },
  { value: '2.1.1', text: '2.1.1', pid: '2.1', path: '2/2.1', isLeaf: true },
  { value: '2.1.2', text: '2.1.2', pid: '2.1', path: '2/2.1' },
  { value: '2.1.2.1', text: '2.1.2.1', pid: '2.1.2', path: '2/2.1/2.1.2', isLeaf: true },
  { value: '2.2', text: '2.2', pid: '2', path: '2' },
  { value: '2.2.1', text: '2.2.1', pid: '2.2', path: '2/2.2' },
  { value: '2.2.1.1', text: '2.2.1.1', pid: '2.2.1', path: '2/2.2/2.2.1', isLeaf: true },
  { value: '2.2.1.2', text: '2.2.1.2', pid: '2.2.1', path: '2/2.2/2.2.1', isLeaf: true },
  { value: '2.2.2', text: '2.2.2', pid: '2.2', path: '2/2.2', isLeaf: true },

  { value: '3', text: '3' },
  { value: '3.1', text: '3.1', pid: '3', path: '3', isLeaf: true },
  { value: '3.2', text: '3.2', pid: '3', path: '3', isLeaf: true },
  { value: '4', text: '4', isLeaf: true },
];

const data = [
  { value: '1', text: '选项 1' },
  {
    value: '1.1',
    text: '选项 1.1',
    pid: '1',
    path: '1',
    icon: 'lugia-icon-financial_columns',
    disabled: true,
  },
  {
    value: '1.1.1',
    text: '选项 1.1.1',
    pid: '1.1',
    path: '1/1.1',
    isLeaf: true,
    disabled: true,
    icon: 'lugia-icon-financial_columns',
  },
  {
    value: '1.1.2',
    text: '选项 1.1.2',
    pid: '1.1',
    path: '1/1.1',
    isLeaf: true,
    notCanSelect: true,
  },

  { value: '1.2', text: '选项 1.2', pid: '1', path: '1' },
  { value: '1.2.1', text: '选项 1.2.1', pid: '1.2', path: '1/1.2', isLeaf: true },
  { value: '1.2.2', text: '选项 1.2.2', pid: '1.2', path: '1/1.2' },
  {
    value: '1.2.2.1',
    text: '选项 1.2.2.1',
    pid: '1.2.2',
    path: '1/1.2/1.2.2',
    isLeaf: true,
  },

  {
    value: '1.2.2.2',
    text: '选项 1.2.2.2',
    pid: '1.2.2',
    path: '1/1.2/1.2.2',
    isLeaf: true,
  },

  { value: '1.3', text: '选项 1.3', pid: '1', path: '1', isLeaf: true },

  { value: '2', text: '选项 2' },
  { value: '2.1', text: '选项 2.1', pid: '2', path: '2', isLeaf: true },
  { value: '2.2', text: '选项 2.2', pid: '2', path: '2', isLeaf: true },
];

const config = {
  [Widget.Tree]: {
    TreeWrap: {
      normal: {
        width: 500,
        height: 290,
        opacity: 1,
        background: { color: '#E086BB' },
        boxShadow: getBoxShadow('2px 2px 5px 5px #9C2D6E'),
        border: getBorder({ color: '#9C2D6E', width: 1, style: 'solid' }),
        borderRadius: getBorderRadius(20),
        padding: {
          left: 20,
          right: 20,
        },
        margin: {
          left: 20,
        },
      },
      hover: {
        opacity: 0.9,
        background: { color: '#F51196' },
        boxShadow: getBoxShadow('2px 2px 5px 5px #F51196'),
        border: getBorder({ color: '#F51196', width: 1, style: 'solid' }),
        borderRadius: getBorderRadius(40),
      },
    },

    TreeItem: {
      // TreeItemWrap: {
      //   normal: {
      //     background: { color: '#21EBE8' },
      //     // border: getBorder({ color: '#F51196', width: 1, style: 'solid' }),

      //     padding: { left: 30, right: 30 },
      //   },
      //   hover: {
      //     background: { color: '#119E9C' },
      //     color: 'white',
      //     borderRadius: getBorderRadius(40),
      //   },
      //   active: {
      //     background: { color: '#036664' },
      //     // color: '#4d63ff',
      //   },
      // },
      SelectedTreeItemWrap: {
        // normal: {
        //   background: {
        //     color: '#000',
        //   },
        // },
      },
      Text: {
        normal: {
          background: {
            color: 'orange',
          },
          color: 'red',
        },
        hover: {
          background: {
            color: 'red',
          },
          color: 'red',
        },
        // disabled: {
        //   background: {
        //     color: 'blue',
        //   },
        //   color: 'red',
        // },
      },
      SelectedText: {
        normal: {
          color: 'red',
          font: { size: 20 },
        },
      },
      // SubTreeWrap: {
      //   normal: {
      //     background: { color: '#66eecc' },
      //   },
      //   hover: {
      //     background: { color: '#bbb' },
      //   },
      // },
      Checkbox: {
        normal: {
          color: '#4d63ff',
        },
      },

      // Switch: {
      //   normal: {
      //     color: '#F51196',
      //     font: {
      //       size: 20,
      //     },
      //   },
      //   hover: {
      //     color: '#4d63ff',
      //   },
      //   disabled: {
      //     background: {
      //       color: 'red',
      //     },
      //     color: 'red',
      //   },
      // },
    },
  },
};

export default () => {
  return (
    <div>
      <Tree
        theme={config}
        expandAll
        autoHeight
        mutliple
        data={newData}
        translateTreeData
        // data={data}
        onlySelectLeaf
        igronSelectField={'notCanSelect'}
      />
    </div>
  );
};

import React from 'react';
import { Space, Divider, Table, Tag } from 'antd';
import type { TableProps } from 'antd';
// import antd icons
import { ShareAltOutlined, DeleteOutlined } from '@ant-design/icons';

type RiskLevel = 'Low' | 'Medium' | 'High';


const assignments = [
    {
        assignment_id: 1,
        assignment_name: 'Assignment 1',
        assignment_type: 'Type 1', 
        suppliers: 10,
        score: 35,
        risk_level: 'Low', // Possible values: Low, Medium, High
        status: 'Pending', // Possible values: Complete, Pending
        result: 'Pass', // Possible values: Pass, Fail
        link: 'https://www.google.com'
    },
    {
        assignment_id: 2,
        assignment_name: 'Assignment 2',
        assignment_type: 'Type 2', 
        suppliers: 20,
        score: 45,
        risk_level: 'Medium', // Possible values: Low, Medium, High
        status: 'Complete', // Possible values: Complete, Pending
        result: 'Fail', // Possible values: Pass, Fail
        link: 'https://www.google.com'
    },
    {
        assignment_id: 3,
        assignment_name: 'Assignment 3',
        assignment_type: 'Type 3', 
        suppliers: 30,
        score: 55,
        risk_level: 'High', // Possible values: Low, Medium, High
        status: 'Pending', // Possible values: Complete, Pending
        result: 'Pass', // Possible values: Pass, Fail
        link: 'https://www.google.com'
    },
    {
        assignment_id: 4,
        assignment_name: 'Assignment 4',
        assignment_type: 'Type 4', 
        suppliers: 40,
        score: 65,
        risk_level: 'Low', // Possible values: Low, Medium, High
        status: 'Complete', // Possible values: Complete, Pending
        result: 'Fail', // Possible values: Pass, Fail
        link: 'https://www.google.com'
    },
    {
        assignment_id: 5,
        assignment_name: 'Assignment 5',
        assignment_type: 'Type 5', 
        suppliers: 50,
        score: 75,
        risk_level: 'Medium', // Possible values: Low, Medium, High
        status: 'Pending', // Possible values: Complete, Pending
        result: 'Pass', // Possible values: Pass, Fail
        link: 'https://www.google.com'
    },
    {
        assignment_id: 6,
        assignment_name: 'Assignment 6',
        assignment_type: 'Type 6', 
        suppliers: 60,
        score: 85,
        risk_level: 'High', // Possible values: Low, Medium, High
        status: 'Complete', // Possible values: Complete, Pending
        result: 'Fail', // Possible values: Pass, Fail
        link: 'https://www.google.com'
    }
];

interface DataType {
    
    assignment_id: number;
    assignment_name: string;
    assignment_type: string;
    suppliers: number;
    score: number;
    risk_level: string; // Possible values: Low, Medium, High
    status: string;
    result: string;
    link: string;
}

const columns: TableProps<DataType>['columns'] = [
    {
        title: 'Assignment Title',
        dataIndex: 'assignment_name', // this is the key in the data, it can be used to access the data
        key: 'title', // this is the key in the columns, it is used to identify the column
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Type',
        dataIndex: 'assignment_type',
        key: 'type',
    },
    {
        title: 'No. of Suppliers',
        key: 'suppliers',
        dataIndex: 'suppliers',
    },
    {
        title: 'Risk Classification',
        key: 'risk_level',
        dataIndex: 'risk_level',
        render: (risk_level: RiskLevel) => {
            const colorMap = {
                Low: 'bg-emerald-500',
                Medium: 'bg-yellow-500',
                High: 'bg-red-500',
            };
            const color = colorMap[risk_level];

            return (
                <div className='flex gap-2 items-center'>
                    <div className={`${color} rounded-full px-1 py-1 w-[1px] h-[1px]`}></div>
                    {risk_level}
                </div>
            );
        },
    },
    {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        render: (_, { status }) => {
            let color = status === 'Pending' ? 'red' : 'green';
            return (
                <Tag color={color} key={status}>
                    {status.toUpperCase()}
                </Tag>
            );
        },
    },
    {
        title: 'Result',
        dataIndex: 'result',
        key: 'result',
        render: (_, { result }) => {
            return (
                result === 'Pass' ?(
                <a className=' text-[#4FA556] font-bold'>
                    View
                </a>):('-')
            );
        },
    },
    {
        title: 'Action',
        dataIndex: 'link',
        key: 'link',
        render: () => (
            <Space size="middle">
                <a><ShareAltOutlined/></a>
                <a className='  '><DeleteOutlined/></a>
            </Space>
        ),
    },
];

const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
};

const data: DataType[] = assignments.map((assignment) => {
    return {
        assignment_id: assignment.assignment_id,
        assignment_name: assignment.assignment_name,
        assignment_type: assignment.assignment_type,
        suppliers: assignment.suppliers,
        score: assignment.score,
        risk_level: assignment.risk_level,
        status: assignment.status,
        result: assignment.result,
        link: assignment.link,
    };
});


const DBDataEntry = () => {
    const selectionType = 'checkbox'
  return (
      <div>
          
          <Divider />

          <Table
              rowSelection={{
                  type: selectionType,
                  ...rowSelection,
              }}
              columns={columns}
              dataSource={data}
          />
      </div>
  )
}

export default DBDataEntry
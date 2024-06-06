import {useState} from 'react'
import type { DatePickerProps } from 'antd';
import { DatePicker, Space } from 'antd';
import logosm from '../assets/Logo_sm.png'
import { DownOutlined, BellOutlined, BankOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown } from 'antd';
import {Avatar} from 'antd';
import { Link } from 'react-router-dom';


const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
};

const regions = [
    {id: 1, name: 'Region 1'},
    {id: 2, name: 'Region 2'},
    {id: 3, name: 'Region 3'},
    {id: 4, name: 'Region 4'},
    {id: 5, name: 'Region 5'},
    {id: 6, name: 'Region 6'},
    {id: 7, name: 'Region 7'},
    {id: 8, name: 'Region 8'},
    {id: 9, name: 'Region 9'},
    {id: 10, name: 'Region 10'},
    {id: 11, name: 'Region 11'},

]


const DashboardTop = ({}) => {
    
    const [region, setRegion] = useState('Region Selector' as string)
    const items: MenuProps['items'] = 
        regions.map((region) => {
            return { key: region.id, label: region.name,
                onClick: () => {
                    setRegion(region.name as string)
                }
             }
        })

    return (
        <div className='flex flex-col gap-2'>
            <div className='top w-full flex justify-between mb-2 items-center'>
                <div className="top part1 flex gap-5 items-center">
                    <div>
                        <img src={logosm} alt="logo" className='w-[18px] ' />
                    </div>
                    <div className=' text-base font-bold text-[#333333]'>View Name</div>
                    <div className=' border-2 p-2 rounded-lg text-xs font-normal'>
                        <Dropdown menu={{ items }} trigger={['click']}>
                            <a onClick={(e) => e.preventDefault()}>
                                <Space>
                                    <span><BankOutlined/> {region}</span>
                                    
                                    <DownOutlined />
                                </Space>
                            </a>
                        </Dropdown>
                    </div>
                </div>
                <div className="top part2 flex gap-2 items-center font-bold text-sm text-[#9F9F9F]">
                    <div className=' text-[22px] p-[2px]'><BellOutlined /></div>
                    <div>John Doe</div>
                    <div><Avatar/></div>
                </div>
            </div>
            <hr />
            <div className='bottom flex gap-2 justify-between items-center'>
                <div className='flex gap-[48px] text-[#4FA556] font-bold text-xs'>
                    <Link to={"./DataEntry"}>DATA ENTRY</Link>
                    <div>TRACKER</div>
                </div>
                <div className='flex gap-2 items-center'>
                    <div>
                        <Space direction="vertical">
                        <DatePicker onChange={onChange} picker="year" />
                        </Space>
                    </div>
                    <div> 
                        <button className=' bg-[#2E9844] px-[16px] py-[8px] rounded-lg text-sm font-bold text-white font-opensans'> Submit for Approval</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default DashboardTop
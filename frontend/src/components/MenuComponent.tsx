import { useState } from 'react';
import {
    AppstoreOutlined,
    FileTextOutlined,
    ContainerOutlined,
    DesktopOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    LineChartOutlined,
    PieChartOutlined,
    AimOutlined,
    BarChartOutlined,
} from '@ant-design/icons';
import { Button, Menu } from 'antd';
import logo from  "../assets/Logo.svg"

import { MenuInfo } from 'rc-menu/lib/interface';


type MenuItem = {
    key: string;
    icon: React.ReactNode;
    label: string;
};

const items: MenuItem[] = [
    { key: '1', icon: <BarChartOutlined />, label: 'Dashboard' },
    { key: '2', icon: <AppstoreOutlined />, label: 'Entity Manager' },
    { key: '3', icon: <PieChartOutlined />, label: 'Data Manager' },
    { key: '4', icon: <FileTextOutlined />, label: 'Reporting' },
    { key: '5', icon: <DesktopOutlined />, label: 'Materialality' },
    { key: '6', icon: <ContainerOutlined />, label: 'Suppliers' },
    { key: '7', icon: <LineChartOutlined />, label: 'Analytics' },
    { key: '8', icon: <AimOutlined />, label: 'Targets' },
    { key: '9', icon: <ContainerOutlined />, label: 'Logout' },

];
const MenuComponent = () => {
    const [collapsed, setCollapsed] = useState(true);

    const [selectedKey, setSelectedKey] = useState('1'); // default selected key

    const handleMenuClick = (e: MenuInfo) => {
        setSelectedKey(e.key);
    };


    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    return (
        <div className={`${collapsed ? 'w-[80px] relative' : 'w-[256px] relative'} flex transition-all`}>
            <Menu
                onClick={handleMenuClick}
                defaultSelectedKeys={['1']}
                mode="inline"
                theme='dark'
                className='h-screen p-[24px] bg-[#181818]'
                inlineCollapsed={collapsed}
            >
                <div className={`${collapsed ? "hidden" : "flex"} mb-[80px]`}>
                    <img src={logo} alt="logo" className='' />
                </div>

                {items.map((item: MenuItem | null) => {
                    if (item) {
                        return (
                            <Menu.Item key={item.key} icon={item.icon} style={item.key === selectedKey ? { color: '#4FA556', background: "#181818" } : {}}>
                                {item.label}
                            </Menu.Item>
                        );
                    }
                })}
            </Menu>
            <Button type="primary" onClick={toggleCollapsed} className={` ${collapsed ? "left-[68px]":"left-[244px]"} absolute top-[44px]  mt-[44px] rounded-full p-2 w-[24px] h-[24px] bg-black text-white`}>
                {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </Button>
        </div>
    );
}

export default MenuComponent
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons"
import { Button, theme } from "antd"
import { Header } from "antd/es/layout/layout"
import { Dispatch, SetStateAction } from "react";

type CommomHeaderProps = {
    collapsed: boolean;
    setCollapsed: Dispatch<SetStateAction<boolean>>
}



const CommomHeader = ({ collapsed, setCollapsed}: CommomHeaderProps) => {
    const {
        token: { colorBgContainer },
      } = theme.useToken();
    
    return(
        <Header
            className="flex border-b-2"
            style={{ padding: 0, background: colorBgContainer }}
          >
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
          </Header>
    )
}

export default CommomHeader
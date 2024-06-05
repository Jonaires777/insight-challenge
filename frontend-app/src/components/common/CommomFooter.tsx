import { GithubOutlined, InstagramOutlined, LinkedinOutlined } from "@ant-design/icons"
import { Footer } from "antd/es/layout/layout"

const CommomFooter = () => {
    return(
        <Footer className="border-t-2">
          <div className="flex gap-4 items-center justify-center">
            <a href="/" className="flex gap-2 items-center">
              <p>Linkedin</p>
              <LinkedinOutlined size={24} />
            </a>
            <a href="/" className="flex gap-2 items-center">
              <p>Github</p>
              <GithubOutlined size={24} />
            </a>
            <a href="/" className="flex gap-2 items-center">
              <p>Instagram</p>
              <InstagramOutlined size={24} />{" "}
            </a>
          </div>
        </Footer>
    )
}

export default CommomFooter
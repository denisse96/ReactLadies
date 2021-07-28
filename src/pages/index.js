import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Grommet, Box, Text } from "grommet"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Grommet>
    <Layout>
      <Seo title="Home" />
      <Box pad="medium" background="blue" animation="pulse">
        Hi React Ladies
      </Box>
      <Box pad="medium" background="gray">
        <Text>
          I develop scalable, elegant infrastructure as code using Terraform in
          order to manage and automate multi-platform cloud services to obtain a
          􏰀ero downtime I ​create Continuous Integration and Continuous
          Deplo􏰁ment pipelines using Jenkins, GitHub actions as well as Docker
          containers and Kubernetes to optimi􏰀e team collaboration.
        </Text>
      </Box>
      <Box>
        <Text>
          Developed the front-end of an energ􏰁 consumption dashboard using React
          to monitor and reduce energ􏰁 consumption at manufacturing plants. 􏰊
          Implemented Mixpanel software to track user data and create A/B
          testing to anal􏰁􏰀e most frequentl􏰁 used features in energ􏰁 dashboard.
        </Text>
      </Box>

      <StaticImage
        src="../images/gatsby-astronaut.png"
        width={300}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />
      <p>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/page-3/">Go to page 3</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
      </p>
    </Layout>
  </Grommet>
)

export default IndexPage

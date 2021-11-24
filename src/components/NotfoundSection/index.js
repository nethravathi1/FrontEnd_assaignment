import {withRouter} from 'react-router-dom'

import {
  NotFoundViewContainer,
  Heading,
  Text,
  GoBackButton,
} from './styledComponents'

const NotfoundSection = props => {
  const gotoBackPage = () => {
    const {history} = props
    history.goBack()
  }
  return (
    <NotFoundViewContainer>
      <Heading>PAGE NOT FOUND..</Heading>
      <Text>
        were sorry, the page you requested could not be found please go back to
        home!
      </Text>
      <GoBackButton onClick={gotoBackPage}>Go Back!!</GoBackButton>
    </NotFoundViewContainer>
  )
}

export default withRouter(NotfoundSection)

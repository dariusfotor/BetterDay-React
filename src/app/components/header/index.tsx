import styled from 'styled-components'
import { AppBar, Toolbar } from '@material-ui/core'
import { colors } from '../../styles/colors'

const Header = () => {
  return (
    <Container>
      <AppBar style={{ background: `${colors.header}` }} position="sticky">
        <Toolbar>Patients API</Toolbar>
      </AppBar>
    </Container>
  )
}

export default Header
const Container = styled.div``

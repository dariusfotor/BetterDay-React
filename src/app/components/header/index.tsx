import styled from 'styled-components'
import { AppBar, Toolbar } from "@material-ui/core";
const Header = () => {
  const displayDesktop = () => {
    return <Toolbar>Patients API</Toolbar>;
  };
  return (
    <Container>
      <header>
      <AppBar>{displayDesktop()}</AppBar>
      </header>
    </Container>
  )
}

export default Header
const Container = styled.div`
margin-bottom: 80px;

`

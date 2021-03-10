import { colors } from '../../styles/colors'
import styled from 'styled-components'
const Header = () => {
  return (
    <Container>
      <div className='title'>
        <h3>Patients API</h3>
      </div>
    </Container>
  )
}

export default Header
const Container = styled.div`
  width: 100%;
  height: 80px;
  background-color: ${colors.grey};
  .title{
    margin-left: 20px;
    font-size: 25px;
  }
`

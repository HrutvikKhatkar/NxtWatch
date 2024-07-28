import styled from 'styled-components'

export const ListTrending = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  width: 90%;
  margin-bottom: 10px;
`

export const TrendingImg = styled.img`
  width: 50%;
  margin-right: 20px;
`

export const TrendingVideoContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  h1 {
    font-size: 18px;
    margin: 0;
    font-weight: bold;
  }

  p {
    margin: 5px 0;
    font-size: 14px;
    color: #666;
  }
`

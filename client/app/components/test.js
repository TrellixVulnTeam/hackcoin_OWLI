import { graphql } from 'react-apollo'
import gql from 'graphql-tag'




const allCoins = gql`
{
    coins{
      id
      name
      price_usd
    }
  }
  `

  export default graphql(allCoins);
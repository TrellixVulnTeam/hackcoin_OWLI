import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import withData from '../lib/apollo';

const query = gql`
{
    coins{
      id
      name
      price_usd
    }
  }

`;

const index = ({ data: { coins } }) => (
     <div>
     
     Hello Friends ... 
     <div className="allthecoins">
    { coins.map( (u, i) => <li key={i}> {u.name} </li>  )}

        </div>
     </div>

);


const GraphqlIndex = graphql(query)(index);

export default withData(GraphqlIndex);
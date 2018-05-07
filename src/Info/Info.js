import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

class Info extends React.Component {
  state = {
    response:''
  }
  componentDidMount() {

  }
  render() {
    return(
      <div style={{padding:'100px',fontSize:'14px'}}>
        Info comes up here
        <Query
          query = {gql`
            {
              rates(currency: "INR") {
                currency,
                rate
              }
            }
          `}
          >
            {({ loading, error, data }) => {
              if(loading) return <p>Loading...</p>
              if(error) return <p>Error...</p>
              return(
                  <div>
                    <table>
                      <tbody>
                        {data.rates.map((item) => (
                            <tr key={item.currency}><td>{item.currency}</td><td>{item.rate}</td></tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
              )
            }}
        </Query>
      </div>
    )
  }
}

export default Info;

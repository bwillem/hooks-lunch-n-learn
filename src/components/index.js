import React from "react";
import { Button } from "rebass";
import styled from "styled-components";

export const Small = styled.p`
  font-size: 2rem;
`;

export const Light = styled.p`
  color: grey;
`;

export const Subtitle = styled.p`
  font-size: 2rem;
  color: grey;
`

/**
 * State - class version
 */
export class State extends React.Component {
  state = {
    count: 0
  }

  render() {
    return (
      <>
        <p><Light as="span">stateful value: </Light>
          {this.state.count}
        </p>
        <Button onClick={this.handleClick}>increment</Button>
      </>
    )
  }

  handleClick = e => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }))
  }
}

/**
 * State - hook version
 */
// import { useState } from "react";

// // custom hook
// const useCounter = (initialValue) => {
//   const [ count, setCount ] = useState(initialValue);

//   const handleClick = () => setCount(prevCount => prevCount + 1);
//   const reset = () => setCount(initialValue);

//   return [ count, handleClick, reset ];
// }

// export const State = () => {
//   const [ count, handleClick, reset ] = useCounter(0);

//   return (
//     <>
//       <p><Light as="span">stateful value: </Light>
//         {count}
//       </p>
//       <Button onClick={handleClick}>increment</Button> <br />
//       <Button onClick={reset}>reset</Button>
//     </>
//   )
// }

/**
 * Side Effect - class version
 */
export class SideEffect extends React.Component {
  state = {
    data: []
  }

  componentDidMount = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')

    let data = await response.json()

    data.splice(6)

    setTimeout(
      () => this.setState({
        data,
      }),
      3000,
    )
  }

  render() {
    return (
      <>
        {
          this.state.data.length
          ? this.state.data.map(d => <Small>{d.name}</Small>)
          : <Small>fetching...</Small>
        }
        <Button onClick={() => document.location.reload()}>refresh</Button>
      </>
    )
  }
}

/**
 * SideEffect - hook version
 */
// import {useEffect} from "react";

// export const SideEffect = prop => {
//   const [ data, setData ] = useState([]);

//   useEffect(async() => {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')

//     let data = await response.json()

//     data.splice(6)

//     setTimeout(
//       () => setData(data),
//       3000,
//     )

//     // dependencies
//   }, [])

//   return (
//     <>
//       {
//         data.length
//         ? data.map(d => <Small>{d.name}</Small>)
//         : <Small>fetching...</Small>
//       }
//       <Button onClick={() => document.location.reload()}>refresh</Button>
//     </>
//   )
// }

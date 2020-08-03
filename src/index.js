import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({onClick,text}) => <button onClick={onClick}>{text}</button>
const Mostvoted = (props) => {
  let max = 0;
  let i = 0
  let len = props.anecdotes.length
  console.log("len",len);
  for (i = 1; i < len; i++){
    if(props.votes[i]>props.votes[max]){
      max=i
    }
  }

  return (
    <div>
    <h1>Anecdote with most votes</h1>
    <div>
      {props.anecdotes[max]}
    </div>
    <div>
      {'has '+ props.votes[max]+ ' votes'}
    </div>
    </div>
  )
}

const Anecdoteofday = (props) => {
  let max = 0;
  let i = 0
  let len = props.anecdotes.length
  console.log("len",len);
  for (i = 1; i < len; i++){
    if(props.votes[i]>props.votes[max]){
      max=i
    }
  }

  return (
    <>
    <h1>Anecdote of the day</h1>
    <div>
      {props.anecdotes[props.selected]}
    </div>
    <div>
      {'has '+ props.votes[props.selected]+ ' votes'}
    </div>
    </>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)

  const [votes, setVotes] = useState({
    0:0,1:0,2:0,3:0,4:0,5:0,6:0
  })
  const nextRandomAnecdote = () => {
    const selected = Math.floor(Math.random() * anecdotes.length)
    console.log("random",selected)
    setSelected(selected)
  }

  const voteForAnecdote = () => {
    const newVotes = {
      ...votes
    }
    console.log("selected",selected)
    console.log("votes",votes)

    newVotes[selected]+=1
    console.log("newVotes",newVotes)

    setVotes(newVotes)
  }

  return (
    <>
    <Anecdoteofday votes={votes} anecdotes={props.anecdotes} selected = {selected}/>
    <Button onClick={voteForAnecdote} text='vote' />
    <Button onClick={nextRandomAnecdote} text='next anecdote' />
    <Mostvoted votes={votes} anecdotes={props.anecdotes} />
    </>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
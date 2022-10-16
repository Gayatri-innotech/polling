import { Button, Card, Divider, Image, Placeholder, Header, Icon, Modal } from 'semantic-ui-react'
import _ from 'lodash'
import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const cards = [
  {
    id: 1,
    avatar: 'https://miro.medium.com/max/666/1*yGrOUQyqX3MBekvP5d-pCA.png',
    date: 'Joined in 2013',
    header: 'VUE.JS',
    description: 'Primary Contact',
  },
  {
    id: 2,
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png',
    date: 'Joined in 2013',
    header: 'NODE.JS',
    description: 'Primary Contact',
  },
]

const Polls = () => {
  const [loading, setLoading] = useState(false);
  const [voteForA, setVoteForA] = useState(0);
  const [voteForB, setVoteForB] = useState(0);
  const [voted, setVoted] = useState(false);
  const [open, setOpen] = useState(false);
  const [openVoted, setOpenVoted] = useState(false);

  // const handleLoadingClick = () => {
  //   setLoading(true);

  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 3000)
  // }

  
  const submitVote = () => {
    axios.post(`https://634bf56ad90b984a1e42e64b.mockapi.io/vote`, {
      partyA: voteForA,
      partyB: voteForB,
    })
    .then(
      (response)=>{
        console.log(response);
      },
      (error)=>{
        console.log(error);
      }
    );
    };

  return <>
    {voteForA} - {voteForB}
    {/* <Button loading={loading} onClick={handleLoadingClick} primary>
      Simulate loading
    </Button> */}
    <Divider />

    <Card.Group doubling itemsPerRow={3} stackable>
      {_.map(cards, (card) => (
        <Card key={card.header}>
          {loading ? (
            <Placeholder>
              <Placeholder.Image square />
            </Placeholder>
          ) : (
            <Image src={card.avatar} />
          )}

          <Card.Content>
            {loading ? (
              <Placeholder>
                <Placeholder.Header>
                  <Placeholder.Line length='very short' />
                  <Placeholder.Line length='medium' />
                </Placeholder.Header>
                <Placeholder.Paragraph>
                  <Placeholder.Line length='short' />
                </Placeholder.Paragraph>
              </Placeholder>
            ) : (
              <>
                <Card.Header>{card.header}</Card.Header>
                <Card.Meta>{card.date}</Card.Meta>
                <Card.Description>{card.description}</Card.Description>
              </>
            )}
          </Card.Content>

          <Card.Content extra>
            <Button disabled={voted} onClick={() => [
              card.id === 1
               ? setVoteForA(voteForA + 1) 
               : setVoteForB(voteForB + 1),
               setVoted(true),
               setOpen(true),
               ]} 
               primary>
              Vote
            </Button>
            <Button disabled={
              (card.id === 1 && voteForA <= 0? true:false) ||
              (card.id === 2 && voteForB <=0? true:false)
            } onClick={() => [
              card.id === 1 
              ? setVoteForA(voteForA - 1) 
              : setVoteForB(voteForB - 1), setVoted(false)
              ]} >
                Unvote
                </Button>
          </Card.Content>
        </Card>
      ))}
    </Card.Group>

    <Modal
      basic
      onClose={() => setOpen(false)}
      onOpen={()=> setOpen(true)}
      open={open}
      size='small'>

        <Header icon>
          <Icon name='archive'/>
          You are about to vote for this party.
        </Header>
        <Modal.Content>
          <p>
            Are you sure about voting this?
          </p>
        </Modal.Content>
        <Modal.Actions>
          <Button basic color='red' inverted onClick={() => [setOpen(false), window.location.reload()]}>
            <Icon name='remove'/>No
          </Button>
          
          <Button basic color='green' inverted onClick={() => [setOpen(false), submitVote(), setOpenVoted(true)]} >
            <Icon name='checkmark'/>Yes
          </Button>
          
        </Modal.Actions>
      </Modal>
      <Modal
      basic
      onClose={() => setOpenVoted(false)}
      onOpen={()=> setOpenVoted(true)}
      open={openVoted}
      size='small'>

        <Header icon>
          <Icon name='archive'/>
          You have voted!
        </Header>
        <Modal.Content>
         <h4>Thanks! Want to see the results now?</h4>
        </Modal.Content>
        <Modal.Actions>
          <Button basic color='red' inverted onClick={() => [setOpenVoted(false), setOpen(false)]}>
            <Icon name='remove'/>No
          </Button>
          <Link to='/result'>
          <Button basic color='green' inverted onClick={() => [setOpenVoted(false), setOpen(false)]} >
            <Icon name='checkmark'/>Yes
          </Button>
          </Link>
        </Modal.Actions>
      </Modal>
  </>
}

export default Polls;

import { Button, Card, Divider, Image, Placeholder, Header, Icon, Modal } from 'semantic-ui-react'
import _ from 'lodash'
import { useState } from 'react'

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

  // const handleLoadingClick = () => {
  //   setLoading(true);

  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 3000)
  // }

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
          Archive
        </Header>
        <Modal.Content>
          <p>
            hello
          </p>
        </Modal.Content>
        <Modal.Actions>
          <Button basic color='red' inverted onClick={() => setOpen(false)}>
            <Icon name='remove'/>No
          </Button>
          <Button basic color='green' inverted onClick={() => setOpen(false)}>
            <Icon name='checkmark'/>Yes
          </Button>
        </Modal.Actions>
      </Modal>
  </>
}

export default Polls;
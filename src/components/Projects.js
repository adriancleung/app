import React, { useState, useRef, useEffect } from 'react';
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Text,
} from 'grommet';
import { ScaleLoader } from 'react-spinners';
import GitHubIcon from '@material-ui/icons/GitHub';
import axios from 'axios';

const CardItem = ({ title, body, fullTitle, link }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Card
      style={{
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: 'auto',
        transform: hovered ? 'translate(0px, -10px)' : null,
      }}
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
      id={'card'}
      height={'medium'}
      width={'medium'}
      background={'black'}>
      <CardHeader
        pad={'medium'}
        style={{ fontWeight: 'bolder', fontSize: '1.5rem' }}>
        {title}
      </CardHeader>
      <CardBody pad={'medium'}>{body}</CardBody>
      <CardFooter pad={'small'}>
        <Button href={link} hoverIndicator>
          <GitHubIcon style={{ padding: '10px' }} />
        </Button>
        <Text>{fullTitle}</Text>
      </CardFooter>
    </Card>
  );
};

const Repos = ({ projectsLoading, data }) => {
  const boxRef = useRef();
  const pos = { top: 0, left: 0, x: 0, y: 0 };

  const handleMouseDrag = e => {
    boxRef.current.style.cursor = 'grabbing';
    boxRef.current.style.userSelect = 'none';
    boxRef.current.style['-webkit-user-select'] = 'none';
    boxRef.current.style['-webkit-touch-callout'] = 'none';
    boxRef.current.style['-moz-user-select'] = 'none';
    boxRef.current.style['-ms-user-select'] = 'none';

    pos.left = boxRef.current.scrollLeft;
    pos.right = boxRef.current.scrollTop;
    pos.x = e.clientX;
    pos.y = e.clientY;

    const handleMouseUp = e => {
      boxRef.current.style.cursor = 'grab';
      boxRef.current.style.removeProperty('user-select');
      boxRef.current.style.removeProperty('-webkit-user-select');
      boxRef.current.style.removeProperty('-webkit-touch-callout');
      boxRef.current.style.removeProperty('-moz-user-select');
      boxRef.current.style.removeProperty('-ms-user-select');
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', this);
    };

    const handleMouseMove = e => {
      const dx = e.clientX - pos.x;
      const dy = e.clientY - pos.y;

      boxRef.current.scrollTop = pos.top - dy;
      boxRef.current.scrollLeft = pos.left - dx;
    };

    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mousemove', handleMouseMove);
  };

  return (
    <Box
      ref={boxRef}
      animation={!projectsLoading ? { type: 'fadeIn', duration: 2000 } : null}
      width={'100vw'}
      direction={'row'}
      gap={'medium'}
      id={'box'}
      pad={'medium'}
      onWheel={e => {
        e.preventDefault();
        var container = document.getElementById('box');
        var containerScrollPosition = document.getElementById('box').scrollLeft;
        container.scrollTo({
          top: 0,
          left: containerScrollPosition + e.deltaY,
          behaviour: 'smooth',
        });
      }}
      onMouseDown={e => handleMouseDrag(e)}
      style={{ cursor: 'grab', userSelect: 'none' }}
      overflow={{ horizontal: 'scroll', vertical: 'hidden' }}
      wrap={false}>
      {data.map((value, index) => {
        return (
          <CardItem
            key={index}
            title={value.title}
            body={value.body}
            fullTitle={value.fullTitle}
            link={value.link}
          />
        );
      })}
    </Box>
  );
};

const Projects = _props => {
  const [projectsLoading, setProjectsLoading] = useState(true);
  const [repos, setRepos] = useState([]);

  const fetchRepos = () => {
    axios
      .get('https://api.github.com/users/adriancleung/repos', {
        headers: { Accept: 'application/vnd.github.v3+json' },
      })
      .then(res => {
        const data = [];
        res.data.forEach(value => {
          data.push({
            loading: projectsLoading,
            title: value.name,
            body: value.description,
            fullTitle: value.full_name,
            link: value.url,
          });
        });
        setRepos(data);
        setProjectsLoading(false);
      })
      .catch(err => {
        console.error(err);
      });
  };

  useEffect(() => {
    fetchRepos();
    // eslint-disable-next-line
  }, []);

  return (
    <Box height={'100%'}>
      <Heading margin={'medium'}>Projects</Heading>
      <Box height={'100%'} justify={'center'} align={'center'}>
        <ScaleLoader
          loading={projectsLoading}
          height={60}
          width={10}
          radius={20}
        />
        {!projectsLoading && <Repos loading={projectsLoading} data={repos} />}
      </Box>
    </Box>
  );
};

export default Projects;

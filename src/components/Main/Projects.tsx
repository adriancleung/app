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
import github from '../../services/github';
import { Repo } from '../../types/repo';

type RepoProps = {
  projectsLoading: boolean;
  data: Repo[];
};

type RepoCardProps = Repo;

type ProjectProps = {};

const RepoCard: React.FC<RepoCardProps> = ({
  title,
  body,
  fullTitle,
  link,
  language,
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Card
      style={{
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: 'auto',
        transform: hovered ? 'translate(0px, -10px)' : undefined,
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
        <Text size={'small'} weight={'normal'}>
          {language}
        </Text>
      </CardHeader>
      <CardBody pad={'medium'}>{body}</CardBody>
      <CardFooter pad={'small'}>
        <Button href={link}>
          <GitHubIcon style={{ padding: '10px' }} />
        </Button>
        <Text>{fullTitle}</Text>
      </CardFooter>
    </Card>
  );
};

const Repos: React.FC<RepoProps> = ({ projectsLoading, data }) => {
  const boxRef = useRef<HTMLDivElement>(null);
  const pos = { top: 0, left: 0, x: 0, y: 0 };

  const handleMouseDrag = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    boxRef!.current!.style.cursor = 'grabbing';
    boxRef!.current!.style.userSelect = 'none';
    boxRef!.current!.style['-webkit-user-select' as unknown as number] = 'none';
    boxRef!.current!.style['-webkit-touch-callout' as unknown as number] =
      'none';
    boxRef!.current!.style['-moz-user-select' as unknown as number] = 'none';
    boxRef!.current!.style['-ms-user-select' as unknown as number] = 'none';

    pos.left = boxRef!.current!.scrollLeft;
    pos.x = e.clientX;
    pos.y = e.clientY;

    const handleMouseUp = () => {
      boxRef!.current!.style.cursor = 'grab';
      boxRef!.current!.style.removeProperty('user-select');
      boxRef!.current!.style.removeProperty('-webkit-user-select');
      boxRef!.current!.style.removeProperty('-webkit-touch-callout');
      boxRef!.current!.style.removeProperty('-moz-user-select');
      boxRef!.current!.style.removeProperty('-ms-user-select');
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const dx = e.clientX - pos.x;
      const dy = e.clientY - pos.y;

      boxRef!.current!.scrollTop = pos.top - dy;
      boxRef!.current!.scrollLeft = pos.left - dx;
    };

    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mousemove', handleMouseMove);
  };

  return (
    <Box
      ref={boxRef}
      animation={
        !projectsLoading ? { type: 'fadeIn', duration: 2000 } : undefined
      }
      width={'100vw'}
      direction={'row'}
      gap={'medium'}
      id={'box'}
      pad={'medium'}
      onMouseDown={e => handleMouseDrag(e)}
      style={{ cursor: 'grab', userSelect: 'none' }}
      overflow={{ horizontal: 'scroll', vertical: 'hidden' }}
      wrap={false}>
      {data.map((value, index) => {
        return (
          <RepoCard
            key={index}
            title={value.title}
            body={value.body}
            fullTitle={value.fullTitle}
            link={value.link}
            language={value.language}
          />
        );
      })}
    </Box>
  );
};

const Projects: React.FC<ProjectProps> = () => {
  const [projectsLoading, setProjectsLoading] = useState(true);
  const [repos, setRepos] = useState<Repo[]>([]);

  const loadRepos = async () => {
    try {
      const response = await github.repos.get();
      setRepos(
        response.map(repo => {
          return {
            title: repo.name,
            body: repo.description,
            fullTitle: repo.full_name,
            link: repo.html_url,
            language: repo.language,
          };
        })
      );
    } catch (err) {
      console.error(err);
    } finally {
      setProjectsLoading(false);
    }
  };

  useEffect(() => {
    loadRepos();
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
        {!projectsLoading && (
          <Repos projectsLoading={projectsLoading} data={repos} />
        )}
      </Box>
    </Box>
  );
};

export default Projects;

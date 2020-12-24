import React from 'react';
import { Anchor, Box, Text } from 'grommet';

const AboutContent = _props => {
  return (
    <Box overflow={'scroll'}>
      <Text style={{textAlign: 'justify'}} margin={'medium'}>
        Hello!
        <br />
        <br />
        My name is Adrian Leung and welcome to my website! I am a 20 years old
        student at the Univerisity of Alberta pursuing a Bachelor's of Science
        degree. As a Computing Science Undergraduate, I am continuously being
        exposed to varieties of different programming languages and challenges.
        Since taking Computer Science 10 in high school, my passion to pursue a
        degree in the technological industry continues to grow.
        <br />
        <br />
        When I was a kid, I did not get the chance to grow up with technology. I
        would be playing around with my toy cars and figurines. My imagination
        was the source of my creativity. But one day, my dad comes home with a
        surprise. A surprise it was... My dad brought home a brand new gaming
        console! From that point, I fell in love with technology.
        <br />
        <br />
        Growing up without technology allowed me to realize that creativity does
        not start with convenience but convenience starts with creativity - this
        is the root of innovation, the root of thinking out of the box, and the
        root of finding solutions to problems. Now that I'm older, I hope that
        my ability to innovate, think out of the box, and to find solutions to
        problems can help others to reach their full potential!
        <br />
        <br />
        Although my academic studies take up a substantial amount of time in my
        life, I continue to push myself to explore different languages,
        library/frameworks, and development platforms. During my summer breaks,
        I continue to gain experience through employment opportunities in
        technological fields. I volunteer my extra hours to take care of kids,
        to provide my leadership skills in the community, and to provide my
        audio visual skills for different venues.
        <br />
        <br />I am currently looking for employment in software development for
        my academic internship. If interested, please take a look at my resume
        and email me at{' '}
        <Anchor href={'mailto:contact@adrianleung.dev'} color={'white'} weight={'bold'}>
          contact@adrianleung.dev
        </Anchor>
        .
      </Text>
    </Box>
  );
};

export default AboutContent;

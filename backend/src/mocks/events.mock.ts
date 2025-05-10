import { Event } from '../types/event.types.js';

export const mockEvents: Event[] = [
  {
    id: 1,
    title: 'React Native Global Summit',
    location: 'San Francisco, CA',
    date: '2025-06-12',
    description: 'Explore the future of cross-platform apps with talks from core contributors and industry leaders.',
    image: 'https://picsum.photos/id/1011/600/400',
    rsvpCount: {
      participants: ['john', 'sarah', 'mike'],
      guests: 3
    }
  },
  {
    id: 2,
    title: 'AI for Social Good Forum',
    location: 'New York, NY',
    date: '2025-06-20',
    description: 'Highlighting global initiatives where AI technology drives real social impact and ethical innovation.',
    image: 'https://picsum.photos/id/1005/600/400',
    rsvpCount: {
      participants: ['lior', 'maya'],
      guests: 2
    }
  },
  {
    id: 3,
    title: 'Women in Tech Leadership Retreat',
    location: 'Austin, TX',
    date: '2025-07-03',
    description: 'Empowering women to lead in tech through mentorship, networking, and growth workshops.',
    image: 'https://picsum.photos/id/1027/600/400',
    rsvpCount: {
      participants: ['noa', 'rachel', 'sally'],
      guests: 3
    }
  },
  {
    id: 4,
    title: 'Future of Work Hackathon',
    location: 'Online',
    date: '2025-07-15',
    description: 'Innovative teams collaborate remotely to solve workplace automation and productivity challenges.',
    image: 'https://picsum.photos/id/1035/600/400',
    rsvpCount: {
      participants: ['ido'],
      guests: 1
    }
  },
  {
    id: 5,
    title: 'Climate Tech Startup Showcase',
    location: 'Berlin, Germany',
    date: '2025-08-01',
    description: 'Pitch competition and demo day for the world’s most promising climate tech startups.',
    image: 'https://picsum.photos/id/1016/600/400',
    rsvpCount: {
      participants: ['john'],
      guests: 1
    }
  },
  {
    id: 6,
    title: 'Global DevOps Conference',
    location: 'Toronto, Canada',
    date: '2025-08-20',
    description: 'Best practices and real-world DevOps case studies from global enterprise teams.',
    image: 'https://picsum.photos/id/1003/600/400',
    rsvpCount: {
      participants: ['mike', 'maya'],
      guests: 2
    }
  },
  {
    id: 7,
    title: 'Creative Code & Design Jam',
    location: 'Amsterdam, Netherlands',
    date: '2025-09-05',
    description: 'A celebration of experimental interfaces, generative art, and creative development.',
    image: 'https://picsum.photos/id/1012/600/400',
    rsvpCount: {
      participants: [],
      guests: 0
    }
  },
  {
    id: 8,
    title: 'Ethics in AI Symposium',
    location: 'London, UK',
    date: '2025-09-18',
    description: 'Interdisciplinary discussion on the impact and governance of machine learning systems.',
    image: 'https://picsum.photos/id/1020/600/400',
    rsvpCount: {
      participants: ['sarah', 'rachel'],
      guests: 2
    }
  },
  {
    id: 9,
    title: 'Open Source Maintainers Summit',
    location: 'Seattle, WA',
    date: '2025-10-10',
    description: 'Focused on mental health, funding, and the future of sustainable open source projects.',
    image: 'https://picsum.photos/id/1024/600/400',
    rsvpCount: {
      participants: ['mike', 'john'],
      guests: 2
    }
  },
  {
    id: 10,
    title: 'End-of-Year Tech Celebration',
    location: 'Los Angeles, CA',
    date: '2025-12-19',
    description: 'Wrap up the year with food, talks, networking, and a celebration of tech milestones.',
    image: 'https://picsum.photos/id/1002/600/400',
    rsvpCount: {
      participants: ['maya', 'lior', 'sally'],
      guests: 3
    }
  }
];

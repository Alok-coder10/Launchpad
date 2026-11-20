import { FeedbackItem } from '@/types';
export const initialFeedback:FeedbackItem[]=[
{id:1,title:'Two-factor authentication',description:'Add an extra layer of security with authenticator apps and backup codes.',category:'Feature',status:'Planned',votes:248,author:'Olivia Rhye',initials:'OR',date:'2 days ago',comments:18},
{id:2,title:'Dark mode across the app',description:'A system-wide dark theme that is easier on the eyes during late work sessions.',category:'Improvement',status:'In progress',votes:186,author:'Phoenix Baker',initials:'PB',date:'Yesterday',comments:24},
{id:3,title:'Export reports to CSV',description:'Let workspace admins export analytics and feedback data for their own reports.',category:'Feature',status:'Under review',votes:142,author:'Lana Steiner',initials:'LS',date:'3 days ago',comments:9},
{id:4,title:'Keyboard shortcuts',description:'Navigate between boards and create feedback without reaching for the mouse.',category:'Improvement',status:'Under review',votes:97,author:'Demi Wilkinson',initials:'DW',date:'1 week ago',comments:12},
{id:5,title:'Bulk edit feedback status',description:'Select multiple requests and update their status in one action.',category:'Feature',status:'Planned',votes:83,author:'Candice Wu',initials:'CW',date:'1 week ago',comments:6},
{id:6,title:'Notification preferences not saving',description:'My email notification preferences reset after refreshing the settings page.',category:'Bug',status:'In progress',votes:51,author:'Natali Craig',initials:'NC',date:'2 weeks ago',comments:7},
{id:7,title:'Add integrations with Slack',description:'Send product updates and feedback activity to a Slack channel.',category:'Feature',status:'Complete',votes:46,author:'Drew Cano',initials:'DC',date:'2 weeks ago',comments:14},
];
export const chartData=[{name:'Mon',votes:28,feedback:12},{name:'Tue',votes:42,feedback:18},{name:'Wed',votes:35,feedback:15},{name:'Thu',votes:58,feedback:24},{name:'Fri',votes:48,feedback:20},{name:'Sat',votes:72,feedback:31},{name:'Sun',votes:64,feedback:27}];
